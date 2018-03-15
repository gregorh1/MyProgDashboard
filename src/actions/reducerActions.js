export function addTech() {
    return {
        type: 'CREATE_TECH',
    }
}

export function newTechNameOnChange(nameChange) {
    return {
        type: 'CHANGE_NEW_TECH_NAME',
        payload: nameChange
    }
}

export function setTechsFromLocalStorage(techs) {
    return {
        type: 'SET_TECHS_FROM_LOCALSTORAGE',
        payload: techs
    }
}

export function clickOnTech(tech, i) {
    return {
        type: 'CLICK_ON_TECH',
        payload: {
            techData: tech,
            indexToEdit: i
        }
    }
}

export function clickBack() {
    return {
        type: 'CLICK_BACK'
    }
}

export function noteOnChange(index, noteChange) {
    return {
        type: 'CHANGE_NOTE',
        payload: {index, noteChange}
    }
}

export function saveEditorState(index, editorChange) {
    return {
        type: 'CHANGE_EDITOR_STATE',
        payload: {index, editorChange}
    }
}

export function addLink(index, newLink) {
    return {
        type: 'ADD_LINK',
        payload: {index, newLink}
    }
}

export function linkDescOnSubmit(index, newLink) {
    return {
        type: 'LINK_DESC_SUBMIT',
        payload: {index, newLink}
    }
}

export function linkOnDelete(index, linkIndex) {
    return {
        type: 'DELETE_LINK',
        payload: {index, linkIndex}
    }
}

export function deleteConfirmation() {
    return {
        type: 'DELETE_CONFIRMATION',
    }
}

export function deleteTech(index) {
    return {
        type: 'DELETE_TECH',
        payload: index
    }
}
