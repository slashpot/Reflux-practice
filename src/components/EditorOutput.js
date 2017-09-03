import React from 'react';
import Reflux from 'reflux';
import EditorStore from '../stores/EditorStore'

class EditorOutput extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = EditorStore;
    }
    getMDContent() {
        return {__html: this.state.content};
    }
    render() {
        return (
            <div>
                <h3>Output</h3>
                <div dangerouslySetInnerHTML={this.getMDContent()}>
                </div>
            </div>
        );
    }
}
export default EditorOutput;