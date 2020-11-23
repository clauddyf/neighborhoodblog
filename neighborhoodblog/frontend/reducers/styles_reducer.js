import { RECEIVE_STYLE } from '../actions/styles_actions';


const StylesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newstate = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STYLE:
            // debugger
            return action.style
        default:
            return state;
    }
};

export default StylesReducer