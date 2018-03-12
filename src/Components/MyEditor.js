import React, {Component} from 'react';
import {convertFromRaw, convertToRaw, EditorState} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        const content = this.props.notesEditor;
        if (content) {
            this.state.editorState = EditorState.createWithContent(convertFromRaw(content));
        } else {
            this.state.editorState = EditorState.createEmpty()
        }
    }

    onEditorStateChange = (editorState) => {
        const contentState = convertToRaw(editorState.getCurrentContent());


        this.setState(
            {editorState},
            function () {
                this.props.saveEditorState(contentState, this.props.indexToEdit)
            });
    };

    render() {
        const {editorState} = this.state;
        return (
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
            />
        )
    }
}

export default MyEditor;