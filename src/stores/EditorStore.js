import Reflux from 'reflux';
import Remarkable from 'remarkable';
import {EditorActions} from '../actions/editorActions';

class EditorStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {content: ''};
        this.listenables = EditorActions;
    }
    onTransformToMD(text) {
        var md = new Remarkable();
        this.setState({content: md.render(text)});  
    }
}

export default EditorStore;