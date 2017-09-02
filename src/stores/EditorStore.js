import Reflux from 'reflux';
import {EditorActions} from '../actions/editorActions';

class EditorStore extends Reflux.Store {
    constructor() {
        super();
        this.state = {content: ''};
        this.listenables = EditorActions;
    }
    onTransformToMD(text) {
        console.log(text);
        this.setState({content: text});
        
    }
}

export default EditorStore;