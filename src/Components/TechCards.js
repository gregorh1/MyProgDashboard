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

    componentDidMount(){
        this.setState({techName: ''})
    }


    render() {
        return (
            <div className="container">
                <h4 className="text-center m-3">Moje technologie</h4>
                <div className="row">

                    {this.props.techItems}

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card text-center mb-2" style={{height: '7rem'}}>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit.bind(this, this.state.techName)}>
                                    <div className="form-group">
                                        <input onChange={this.handleChange.bind(this)}
                                               className="form-control mb-2"
                                               type="text"
                                               placeholder="Nazwa technologii"
                                               value={this.state.techName}
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