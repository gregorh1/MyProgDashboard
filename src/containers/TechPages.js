import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
    addLink, clickBack, deleteConfirmation, deleteTech, noteOnChange,
    saveEditorState
} from '../actions/reducerActions';
import TechLinks from "./TechLinks";
import MyEditor from '../components/MyEditor'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class TechPages extends Component {

    render() {
        return (
            <div className="card border-primary text-center">
                <div className="card-header text-primary">
                    <div className="row">
                        <div className="col-2 text-left">
                            <a onClick={this.props.clickBack} className="btn btn-primary text-white">Wstecz</a>
                        </div>
                        <div className="col"><h3>{this.props.reducer.techData.name}</h3></div>
                        <div className="col-2 text-right">
                        </div>
                    </div>
                    <form>
                        <input className="form-control mt-2"
                               id="editor"
                               onChange={this.props.noteOnChange.bind(this, this.props.index)}
                               ref="notes"
                               value={this.props.reducer.techs[this.props.index].notes}
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
                                notesEditor={this.props.reducer.techData.notesEditor}
                                index={this.props.index}
                                saveEditorState={this.props.saveEditorState}
                            />

                        </div>
                    </div>

                    <TechLinks
                        index={this.props.index}
                    />
                </div>
                <div className="card-footer text-muted text-center">
                    <div className="row align-self-end ml-2 mr-1 ml-1">

                        <button onClick={this.props.deleteTech.bind(this, this.props.index)}
                                className="col btn btn-danger mr-3"
                                hidden={!this.props.reducer.deleteConfirm}
                        >Jesteś pewien? Nie można tego cofnąć!
                        </button>
                        <button onClick={this.props.deleteConfirmation}
                                className=" col btn btn-success"
                                hidden={!this.props.reducer.deleteConfirm}
                        > Anuluj
                        </button>

                    </div>

                    <button onClick={this.props.deleteConfirmation}
                            className="btn btn-outline-primary"
                            hidden={this.props.reducer.deleteConfirm}
                    > Usuń Technologie
                    </button>

                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        reducer: state.reducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clickBack: () => {
            dispatch(clickBack())
        },
        noteOnChange: (index, event) => {
            dispatch(noteOnChange(index, event.target.value))
        },
        saveEditorState: (index, editorChange) => {
            dispatch(saveEditorState(index, editorChange))
        },
        addLink: (index, newLink) => {
            dispatch(addLink(index, newLink))
        },
        deleteConfirmation: () => {
            dispatch(deleteConfirmation())
        },
        deleteTech: (index) => {
            dispatch(deleteTech(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TechPages);
