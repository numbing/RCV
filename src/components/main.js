import React, { Component } from 'react';
import Map from './map'
import Emergency from './emergency'
import Messages from './messages'

class Main extends Component{
    render(){
        return(
            <div>
                <Map/>
                <Emergency/>
                <Messages/>

            </div>
        )
    }
}
export default Main ;