import { RECEIVE_STYLE } from '../actions/styles_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newstate = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_STYLE:
            debugger
            // newstate[action.user.id] = action.user;
            // return newstate;
            return action.style
        default:
            return state;
    }
};

export default StylesReducer