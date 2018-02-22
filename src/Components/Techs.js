import React, {Component} from 'react';
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

    componentWillMount() {
        this.setState(
            {
                techs: [
                    {
                        id: 0,
                        name: 'JS',
                        notes: 'JavaScript',
                        courses: 'YT course',
                        links: 'https://www.youtube.com/watch?v=Oioo0IdoEls&index=15&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS'
                    },
                    {
                        id: 1,
                        name: 'HTML',
                        notes: 'HyperTextMarkupLanguage for constructing web pages HyperTextMarkupLanguage for ' +
                        'constructing web pages HyperTextMarkupLanguage for constructing web pages ' +
                        'HyperTextMarkupLanguage for constructing web pages HyperTextMarkupLanguage for ' +
                        'constructing web pages HyperTextMarkupLanguage for constructing web pages ' +
                        'HyperTextMarkupLanguage for constructing web pages HyperTextMarkupLanguage for ' +
                        'constructing web pages HyperTextMarkupLanguage for constructing web pages ' +
                        'HyperTextMarkupLanguage for constructing web pages HyperTextMarkupLanguage for ' +
                        'constructing web pages HyperTextMarkupLanguage for constructing web pages',
                        courses: 'YT course4',
                        links: 'https://www.youtube.com'
                    },
                    {
                        id: 2,
                        name: 'CSS',
                        notes: 'Cascade Style Sheet',
                        courses: 'YT course #3',
                        links: 'https://www.youtube.com'
                    },
                    {
                        id: 2,
                        name: 'CSS',
                        notes: 'Cascade Style Sheet',
                        courses: 'YT course #3',
                        links: 'https://www.youtube.com'
                    }
                ]

            }
        );
    }

    onClickTech(tech, i) {
        this.setState({
            toReturn: 'tech',
            techData: tech,
            indexToEdit: i
        });
    }

    handleCreateTech(techName) {
        console.log(techName);
        let newTech = {
            id: 4,
            name: techName,
            notes: '',
            courses: '',
            links: ''
        };

        this.setState({
            techs: this.state.techs.concat(newTech)
        });

    }

    handleUpdateNotes(newNote, index) {
        let changeTechs = this.state.techs;
        changeTechs[index].notes = newNote;

        this.setState({techs: changeTechs});
    }

    handleClickBack() {
        this.setState({toReturn: 'dash'})
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
            />

        } else if (this.state.toReturn === 'tech') {
            return <TechPages
                data={this.state.techData}
                index={this.state.indexToEdit}
                updateNotes={this.handleUpdateNotes.bind(this)}
                clickBack={this.handleClickBack.bind(this)}
            />
        }
    }
}

export default Techs;
