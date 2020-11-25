import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';



export class MapShow extends Component {
    constructor(props){
        super(props);
        // debugger
        // this.styles = Styles.bind(this)
        // this.pulledUp = false;
        this.styleStrToArray = this.styleStrToArray.bind(this)
    }
    componentDidMount(){
        debugger
        // this.pulledUp = true;
        // if(this.pulledUp){
        //     this.props.fetchStyle(this.props.match.params.id)
        // }
        this.props.fetchStyle(5)
        debugger
    }

    styleStrToArray(str){
    for (let i = 0; i < str.length; i++) {
        debugger
        str[i] = str[i].replace(/"/g, "")
    }

    return str 
    }



    render() {
        debugger
        let pickedStyle;

        if(jQuery.isEmptyObject(this.props.currentStyle)){
            pickedStyle = []
        } else {
            pickedStyle = this.styleStrToArray(this.props.currentStyle[5].json)
        }
        debugger
        return (
            
            <Map
                google={this.props.google}
                zoom={14}
                styles={pickedStyle}
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




