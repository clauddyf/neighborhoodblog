import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import StylesReducer from './styles_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    styles: StylesReducer
});

export default entitiesReducer;