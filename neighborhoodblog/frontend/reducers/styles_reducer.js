import { RECEIVE_STYLE } from '../actions/styles_actions';
import merge from 'lodash/merge';


const StylesReducer = (oldState = {}, action) => {
    // debugger
    Object.freeze(oldState);
    // let newstate = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STYLE:
            debugger
            let newState = merge({}, oldState, { [action.style.id]: action.style });
            debugger
            return newState
        default:
            return oldState;
    }
};

export default StylesReducer