import React from 'react';
import Reflux from 'reflux';
import Remarkable from 'remarkable';
import EditorStore from '../stores/EditorStore'

class EditorOutput extends Reflux.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.store = EditorStore;
    }

    getRawMarkup() {
        var md = new Remarkable();
        return { __html: md.render(this.state.content) };
    }

    render() {
        return (
            <div>
                <h3>Output</h3>
                <div dangerouslySetInnerHTML={this.getRawMarkup()}>
                </div>
            </div>
        );
    }
}
export default EditorOutput;