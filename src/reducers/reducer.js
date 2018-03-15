const initialState = {
    techs: [],
    toReturn: 'dash', //other: tech,
    techData: {},
    indexToEdit: '',
    newTechName: '',
    newLinkSet: {},
    deleteConfirm: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TECHS_FROM_LOCALSTORAGE':
            state = {
                ...state,
                techs: action.payload
            };
            break;
        case 'CREATE_TECH':
            state = {
                ...state,
                techs: state.techs.concat(
                    {
                        name: state.newTechName,
                        notes: '',
                        notesEditor: '',
                        syntax: '',
                        courses: '',
                        links: []
                    }),
                newTechName: ''
            };
            break;
        case 'CHANGE_NEW_TECH_NAME':
            state = {
                ...state,
                newTechName: action.payload
            };
            break;
        case 'CLICK_ON_TECH':
            state = {
                ...state,
                toReturn: 'tech',
                techData: action.payload.techData,
                indexToEdit: action.payload.indexToEdit
            };
            break;
        case 'CLICK_BACK':
            state = {
                ...state,
                toReturn: 'dash'
            };
            break;
        case 'CHANGE_NOTE':
            let techChangeNote = state.techs;
            techChangeNote[action.payload.index].notes = action.payload.noteChange;
            state = {
                ...state,
                techs: techChangeNote
            };
            break;
        case 'CHANGE_EDITOR_STATE':
            let techChangeEditor = state.techs;
            techChangeEditor[action.payload.index].notesEditor = action.payload.editorChange;
            state = {
                ...state,
                techs: techChangeEditor
            };
            break;
        case 'LINK_DESC_SUBMIT':
            let techChangeLinks = state.techs;
            techChangeLinks[action.payload.index].links =
                techChangeLinks[action.payload.index].links.concat([action.payload.newLink]);
            state = {
                ...state,
                techs: techChangeLinks
                //     {
                //     ...state.techs,
                //     [action.payload.index]: {
                //         ...state.techs[action.payload.index],
                //         links:                        techChangeLinks[action.payload.index].links
                //     }
                // }
            };
            break;
        case 'DELETE_LINK':
            let techChangeLinkDelete = state.techs;
            techChangeLinkDelete[action.payload.index].links =
                techChangeLinkDelete[action.payload.index].links.filter(
                    (link) => link !== techChangeLinkDelete[action.payload.index].links[action.payload.linkIndex]
                );
            state = {
                ...state,
                techs: techChangeLinkDelete
            };
            break;
        case 'DELETE_CONFIRMATION':
            state = {
                ...state,
                deleteConfirm: !state.deleteConfirm
            };
            break;
        case 'DELETE_TECH':
            let techChangeDeleteTech = state.techs;
            techChangeDeleteTech = techChangeDeleteTech.filter(
                (tech) => tech !== techChangeDeleteTech[action.payload]
            );
            state = {
                ...state,
                techs: techChangeDeleteTech,
                toReturn: 'dash',
                deleteConfirm: false
            };
            break;
    }
    return state;
};

export default reducer;
