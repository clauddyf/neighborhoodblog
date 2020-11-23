import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';


export class MapShow extends Component {
    constructor(props){
        debugger
        super(props);
        this.styles = Styles.bind(this)
    }
    componentDidMount(){
        this.props.fetchStyle(this.props.match.params.id)
    }
    render() {
        debugger
        
        return (
            
            <Map
                google={this.props.google}
                zoom={14}
                styles={this.props.currentStyle}
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

