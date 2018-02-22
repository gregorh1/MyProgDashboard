import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Techs from './Components/Techs';
import './App.css';
import TechPages from "./Components/TechPages";

class App extends Component {
    render() {
        return (
            <div className="container mt-2">
                <Techs/>
                {/*<BrowserRouter>*/}
                    {/*<div>*/}
                            {/*<Route path="/" component={Techs}/>*/}
                            {/*<Route path="/techs" component={Techs}/>*/}
                            {/*<Route path="/tech-pages" component={TechPages}/>*/}
                    {/*</div>*/}
                {/*</BrowserRouter>*/}
            </div>
        );
    }
}

export default App;

// https://github.com/google/code-prettify