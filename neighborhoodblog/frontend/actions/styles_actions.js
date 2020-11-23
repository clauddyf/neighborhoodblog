import { getStyle } from '../util/styles_api_util';

export const RECEIVE_STYLE = 'RECEIVE_STYLE';

export const receiveStyle = (style) => ({
    type: RECEIVE_STYLE,
    style
});

export const fetchStyle = (id) => dispatch => {
    debugger 
    getStyle(id).then((style) => dispatch(receiveStyle(style)));
};