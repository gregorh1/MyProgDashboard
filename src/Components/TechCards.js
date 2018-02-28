import React, {Component} from 'react';


class TechCards extends Component {

    constructor() {
        super();
        this.state = {
            techName: ''
        }
    }

    handleChange(event) {
        this.setState({techName: event.target.value.toUpperCase()});
    }

    handleSubmit(techName, event) {
        event.preventDefault();
        if (this.state.techName === '') {
            alert('Nazwa Technologii nie może być pusta!')
        } else {
            this.setState(
                function () {
                    this.props.createTech(techName);
                }, this.setState({techName: ''})
            );
        }
    }

    componentDidMount() {
        this.setState({techName: ''})
    }


    render() {
        return (
            <div className="container">
                <div className="card border-danger">
                    <div className="card-header text-danger">
                        <div className="row">
                            <div className="col text-left">
                            </div>
                            <div className="col"><h3 className="text-center">Moje technologie</h3></div>
                            <div className="col text-right">
                                <a onClick={this.props.saveToDB} className="btn btn-danger text-white">Zapisz w LocalStorage</a>
                            </div>
                        </div>

                    </div>
                    <div className="card-body">
                        <div className="row">

                            {this.props.techItems}

                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card border-primary text-center mb-2" style={{height: '7rem'}}>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit.bind(this, this.state.techName)}>
                                            <div className="form-group">
                                                <input onChange={this.handleChange.bind(this)}
                                                       className="form-control mb-2"
                                                       type="text"
                                                       placeholder="Nazwa technologii"
                                                       value={this.state.techName}
                                                       required
                                                />
                                                <input type="submit" className="btn btn-sm btn-primary text-white" value="Dodaj"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>





                </div>
            </div>
        );
    }
}

export default TechCards;