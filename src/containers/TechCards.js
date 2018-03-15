import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTech, clickOnTech, newTechNameOnChange} from "../actions/reducerActions";
import TechItem from '../components/TechItem';

class TechCards extends Component {

    handleSaveToDB() {
        window.localStorage.setItem('content', JSON.stringify(this.props.reducer.techs));
    }

    render() {

        let techItems = this.props.reducer.techs.map((tech, i) => {
            return (
                <TechItem click={this.props.clickOnTech.bind(this, tech, i)} key={i} tech={tech}/>
            );
        });

        return (
            <div className="container">
                <div className="card border-danger">
                    <div className="card-header text-danger">
                        <div className="row">
                            <div className="col text-left">
                            </div>
                            <div className="col"><h3 className="text-center">Moje technologie</h3></div>
                            <div className="col text-right">
                                <a onClick={this.handleSaveToDB.bind(this)} className="btn btn-danger text-white">Zapisz
                                    w
                                    LocalStorage</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">

                            {techItems}

                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card border-primary text-center mb-2" style={{height: '7rem'}}>
                                    <div className="card-body">
                                        <form onSubmit={this.props.addTech}>
                                            <div className="form-group">
                                                <input onChange={this.props.newTechNameOnChange.bind(this)}
                                                       className="form-control mb-2"
                                                       type="text"
                                                       placeholder="Nazwa technologii"
                                                       value={this.props.reducer.newTechName}
                                                       required/>
                                                <input type="submit" className="btn btn-sm btn-primary text-white"
                                                       value="Dodaj"/>
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

const mapStateToProps = (state) => {
    return {reducer: state.reducer}
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTech: (event) => {
            event.preventDefault();
            dispatch(addTech())
        },
        newTechNameOnChange: (event) => {
            dispatch(newTechNameOnChange(event.target.value.toUpperCase()))
        },
        clickOnTech: (tech, i) => {
            dispatch(clickOnTech(tech, i))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TechCards);
