import React, {Component} from 'react';
import TechLinks from "./TechLinks";
import MyEditor from './MyEditor'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TechPages extends Component {
    constructor() {
        super();
        this.state = {
            note: '',
            syntax: '',
            deleteConfirm: false
        }
    }

    componentWillMount() {
        this.setState({
            note: this.props.data.notes,
            syntax: this.props.data.syntax
        });
    }

    handleChangeNotes(newNote, index, event) {
        this.setState({note: event.target.value},
            function () {
                this.props.updateNotes(newNote, index);
            });
    }

    handleChangeSyntax(newSyntaxChange, index, event) {
        this.setState({syntax: event.target.value},
            function () {
                this.props.updateSyntax(newSyntaxChange, index);
            });
    }

    handleDeleteTechConfirm() {
        this.setState({deleteConfirm: !this.state.deleteConfirm})
    }

    render() {
        return (
            <div className="card border-primary text-center">
                <div className="card-header text-primary">
                    <div className="row">
                        <div className="col-2 text-left">
                            <a onClick={this.props.clickBack} className="btn btn-primary text-white">Wstecz</a>
                        </div>
                        <div className="col"><h3>{this.props.data.name}</h3></div>
                        <div className="col-2 text-right">
                        </div>
                    </div>
                    <form>
                        <input className="form-control mt-2"
                               id="editor"
                               onChange={this.handleChangeNotes.bind(this, this.state.note, this.props.index)}
                               ref="notes"
                               value={this.state.note}
                               placeholder="Krótki opis"
                        />
                    </form>
                </div>
                <div className="card-body">
                    <div className="card border-secondary mb-3">
                        <div className="card-header text-secondary">
                            <h5>Mój opis i notatki</h5>
                        </div>
                        <div className="card-body p-2">

                            <MyEditor
                                notesEditor={this.props.data.notesEditor}
                                indexToEdit={this.props.index}
                                saveEditorState={this.props.saveEditorState}
                                wrapperClassName="demo-wrapper"
                                editorClassName="demo-editor"
                                onEditorStateChange={this.onEditorStateChange}
                            />

                        </div>
                    </div>

                    <TechLinks
                        data={this.props.data}
                        index={this.props.index}
                        updateLinks={this.props.updateLinks}
                        deleteLink={this.props.deleteLink}
                    />
                </div>
                {/*Footer*/}
                <div className="card-footer text-muted text-center">
                    <div className="row align-self-end ml-2 mr-1 ml-1">

                        <button onClick={this.props.deleteTech.bind(this, this.props.index)}
                                className="col btn btn-danger mr-3"
                                hidden={!this.state.deleteConfirm}
                        >Jesteś pewien? Nie można tego cofnąć!
                        </button>
                        <button onClick={this.handleDeleteTechConfirm.bind(this)}
                                className=" col btn btn-success"
                                hidden={!this.state.deleteConfirm}
                        > Anuluj
                        </button>

                    </div>

                    <button onClick={this.handleDeleteTechConfirm.bind(this)}
                            className="btn btn-outline-primary"
                            hidden={this.state.deleteConfirm}
                    > Usuń Technologie
                    </button>

                </div>
            </div>

        );
    }
}

export default TechPages;
