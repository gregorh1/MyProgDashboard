import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTechsFromLocalStorage} from "../actions/reducerActions";
import TechCards from "./TechCards";
import TechPages from "./TechPages";

// TODO: ADD setInterwal for saveing state to DB, - import Timers from 'react-timers';

class App extends Component {

    componentDidMount() {
        const stateFromLocalStorage = window.localStorage.getItem('content');
        if (stateFromLocalStorage) {
            this.props.setTechsFromLocalStorage(JSON.parse(stateFromLocalStorage));
        }
    }

    render() {
        if (this.props.reducer.toReturn === 'dash') {
            return <TechCards/>
        } else if (this.props.reducer.toReturn === 'tech') {
            return <TechPages
                data={this.props.reducer.techData}
                index={this.props.reducer.indexToEdit}
            />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        reducer: state.reducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTechsFromLocalStorage: (techs) => {
            dispatch(setTechsFromLocalStorage(techs))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
