import React, { Component } from 'react';
import Map from './map'
import Emergency from './emergency'
import Messages from './messages'

class Main extends Component{
    markClick = markNumber => {

      console.log(markNumber)
    }
    render(){
        return(
            <div>
              <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCCOyvijzxBB3EocKRr1aoncrfrPWrOvck&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                onMarkerClick={this.markClick}

              />
                <Emergency/>
                <Messages/>

            </div>
        )
    }
}
export default Main ;
