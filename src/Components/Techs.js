import React, {Component} from 'react';
// TODO: ADD setInterwal for saveing state to DB, - import Timers from 'react-timers';
import TechItem from "./TechItem";
import TechCards from "./TechCards";
import {browserHistory} from 'react-router';
import TechPages from "./TechPages";

class Techs extends Component {

    constructor() {
        super();
        this.state = {
            techs: [],
            toReturn: 'dash', //other: tech,
            techData: {},
            indexToEdit: ''
        }
    }

    componentDidMount() {
        const stateFromLocalStorage = window.localStorage.getItem('content');
        if (stateFromLocalStorage) {
            this.setState({techs: JSON.parse(stateFromLocalStorage)})
        }
    }

    handleSaveToDB(){
        window.localStorage.setItem('content', JSON.stringify(this.state.techs));
        console.log('seved to localStorage');
    }



    onClickTech(tech, i) {
        this.setState({
            toReturn: 'tech',
            techData: tech,
            indexToEdit: i
        });
    }

    handleCreateTech(techName) {
        let newTech = {
            name: techName,
            notes: '',
            notesEditor: '',
            syntax: '',
            courses: '',
            links: []
        };
        this.setState({
            techs: this.state.techs.concat(newTech)
        });
    }

    handleUpdateNotes(newNoteChange, index) {
        let changeTechs = this.state.techs;
        changeTechs[index].notes = newNoteChange;
        this.setState({techs: changeTechs});
    }

    handleSaveEditorState(newNoteEditorChange, index) {
        let changeTechs = this.state.techs;
        changeTechs[index].notesEditor = newNoteEditorChange;
        this.setState({techs: changeTechs});
    }

    handleUpdateSyntax(newSyntaxChange, index) {
        let changeTechs = this.state.techs;
        changeTechs[index].syntax = newSyntaxChange;
        this.setState({techs: changeTechs});
    }

    handleAddLink(newLinks, index) {
        let changeTechs = this.state.techs;
        if (changeTechs[index].links.includes(newLinks)) {
            alert('Ta pozycja jest już dodana')
        } else {
            changeTechs[index].links = changeTechs[index].links.concat([newLinks]);
            this.setState({techs: changeTechs});
        }
    }

    handleDeleteLink(linkIndex, index) {
        let changeTechs = this.state.techs;
        changeTechs[index].links = changeTechs[index].links.filter(function (link) {
            return link !== changeTechs[index].links[linkIndex]
        });
        this.setState({techs: changeTechs});
    }

    handleClickBack() {
        this.setState({toReturn: 'dash'})
    }

    handleDeleteTech(index) {
        let changeTechs = this.state.techs;
        changeTechs = changeTechs.filter(function (tech) {
            return tech !== changeTechs[index]
        });
        this.setState({
            techs: changeTechs,
            toReturn: 'dash'
        });
        this.handleSaveToDB();

    }

    render() {
        if (this.state.toReturn === 'dash') {
            let techItems;
            techItems = this.state.techs.map((tech, i) => {
                return (
                    <TechItem click={this.onClickTech.bind(this, tech, i)} key={i} tech={tech}/>
                );
            });
            return <TechCards
                techItems={techItems}
                createTech={this.handleCreateTech.bind(this)}
                saveToDB={this.handleSaveToDB.bind(this)}
            />
        } else if (this.state.toReturn === 'tech') {
            return <TechPages
                data={this.state.techData}
                index={this.state.indexToEdit}
                updateNotes={this.handleUpdateNotes.bind(this)}
                saveEditorState={this.handleSaveEditorState.bind(this)}
                updateSyntax={this.handleUpdateSyntax.bind(this)}
                updateLinks={this.handleAddLink.bind(this)}
                clickBack={this.handleClickBack.bind(this)}
                deleteLink={this.handleDeleteLink.bind(this)}
                deleteTech={this.handleDeleteTech.bind(this)}
            />
        }
    }
}

export default Techs;
