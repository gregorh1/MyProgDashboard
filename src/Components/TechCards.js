import React, {Component} from 'react';


class TechCards extends Component {

    constructor() {
        super();
        this.state = {
            techName: ''
        }
    }

    handleChange(event) {
        this.setState({techName: event.target.value});
    }

    handleSubmit(techName, event) {
        event.preventDefault();
        this.setState(
            function () {
                this.props.createTech(techName);
            }
        );
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center m-3">Technologie, ktorych się uczyłem: </h1>
                <div className="row">

                    {this.props.techItems}

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card text-center mb-2" style={{width: '14rem', height: '7rem'}}>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this, this.state.techName)}>
                                    <div className="form-group">
                                        <input onChange={this.handleChange.bind(this)}
                                               className="form-control mb-2"
                                               type="text"
                                               placeholder="Nazwa technologii"
                                        />
                                        <input type="submit" className="btn btn-info" value="Dodaj"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default TechCards;