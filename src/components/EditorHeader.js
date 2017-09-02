import React from 'react';
import Reflux from 'reflux';
import {EditorActions} from '../actions/editorActions';

class EditorHeader extends Reflux.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        EditorActions.transformToMD(event.target.value);
    }

    render() {
        return (
            <div>
                <h3>MarkDown Editor</h3>
                <textarea onChange = {this.onChange} />
            </div>
        );
    }
}
export default EditorHeader;