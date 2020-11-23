import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Styles from './mapstyles'

export class MapShow extends Component {
    // constructor(props){
    //     super(props);
    //     this.styles = Styles.bind(this)
    //     debugger
    // }
    // componentDidMount(){

    // }
    render() {
        debugger
        
        return (
            
            <Map
                google={this.props.google}
                zoom={14}
                styles={}
                initialCenter={
                    {
                        lat: 38.9072,
                        lng: -77.0369
                    }
                }
            />
        );
    }
}

export default GoogleApiWrapper({
    
    apiKey: `${window.googleAPIKey}`
})(MapShow);

