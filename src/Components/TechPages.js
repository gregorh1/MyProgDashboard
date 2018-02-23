import React, {Component} from 'react';

// import Simditor from 'simditor';

class TechPages extends Component {

    constructor() {
        super();
        this.state = {
            notes: '',
            syntax: ''
        }
    }

    componentWillMount() {
        this.setState({
            notes: this.props.data.notes,
            syntax: this.props.data.syntax
        });
    }

    handleChangeNotes(newNote, index, event) {
        this.setState({notes: event.target.value},
            function () {
                this.props.updateNotes(newNote, index);
            });
    }

    // UNUSED, BUT DON'T REMOVE IT
    // handleSubmitNotes(newNote, index, e) {
    //     e.preventDefault();
    //     this.setState({notes: newNote},
    //         function () {
    //             this.props.updateNotes(newNote, index);
    //         }
    //     );
    // }

    handleChangeSyntax(newSyntaxChange, index, event) {
        this.setState({syntax: event.target.value},
            function () {
                this.props.updateSyntax(newSyntaxChange, index);
            });
    }

    render() {

        // var editor = new Simditor({
        //     textarea: this.state.textarea,
        //     placeholder: 'ooo'
        //     //optional options
        // });

        return (
            <div className="card text-center">
                <div className="card-header">
                    <div className="row">
                        <div className="col-2 text-left text-info">
                            <a onClick={this.props.clickBack} className="btn btn-outline-info"><i
                                className="fa fa-arrow-left fa-1x"> </i>
                            </a>
                        </div>
                        <div className="col">
                            <h3>{this.props.data.name}</h3>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
                <div className="card-body">


                    <div className="card border-primary mb-3">
                        <div className="card-header text-primary"><h5>Notatki</h5></div>
                        <div className="card-body">
                            <form
                                // onSubmit={this.handleSubmitNotes.bind(this, this.state.notes, this.props.index)}
                            >
                                <textarea className="form-control"
                                          id="editor"
                                          onChange={this.handleChangeNotes.bind(this, this.state.notes, this.props.index)}
                                          ref="notes"
                                          value={this.state.notes}
                                />
                                {/*<input className="btn btn-primary mt-2" type="submit" value="Zapisz"/>*/}
                            </form>
                            {/*{editor}*/}
                            {/*<div id="trumbowyg-demo"></div>*/}
                        </div>
                    </div>

                    <div className="card border-danger mb-3">
                        <div className="card-header text-danger"><h5>Składnia języka</h5></div>
                        <div className="card-body">
                            <form>
                                <textarea className="form-control"
                                          onChange={this.handleChangeSyntax.bind(this, this.state.syntax, this.props.index)}
                                          value={this.state.syntax}
                                />
                            </form>
                        </div>
                    </div>

                    <div className="card border-secondary mb-3">
                        <div className="card-header text-secondary"><h5>Przydatne linki</h5></div>
                        <div className="card-body">

                            <form>
                                <div className="row mb-2">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Link"/>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Opis"/>
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-primary">Dodaj</button>
                                    </div>
                                </div>
                            </form>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th className="border-top-0" scope="col ">#</th>
                                    <th className="border-top-0" scope="col">Link</th>
                                    <th className="border-top-0" scope="col">Opis</th>
                                    <th className="border-top-0" scope="col">Akcje</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><a href="#">youtube.com</a></td>
                                    <td>Strona z darmowymi kursami</td>
                                    <td><a href="#" className="btn-sm btn-primary mr-2">Edytuj</a><a href="#"
                                                                                                     className="btn-sm btn-primary">Usuń</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card border-success mb-3">
                        <div className="card-header text-success"><h5>Moje projekty</h5></div>
                        <div className="card-body">
                            <form>
                                <textarea className="form-control"/>
                            </form>
                        </div>
                    </div>


                </div>
                {/*Footer*/}
                <div className="card-footer text-muted text-right">
                    <button className="btn btn-outline-info">Usuń Technologie</button>
                </div>
            </div>

        );
    }
}

export default TechPages;
