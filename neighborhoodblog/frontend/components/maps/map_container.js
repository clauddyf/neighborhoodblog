import { connect } from 'react-redux';
import { fetchStyle } from '../../actions/styles_actions';
import { withRouter } from 'react-router-dom';
import MapShow from './map_show';



const mSTP = (state, ownProps) => {
    return ({
        currentStyle: state.entities.style[ownProps.match.params.id]
    })
}

const mDTP = dispatch => {
    return {
        fetchStyle: style => dispatch(fetchStyle(style)),
    };
};

export default withRouter(connect(mSTP, mDTP)(MapShow))