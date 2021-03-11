import React, { Component } from 'react';
import Activity from "./Activity"
import Signature from "./signature"
class MainPage extends Component {
    state = {  }
    render() { 
        return (
        /*
        <div>
            
            <h1>This is the main Page</h1>  
             <Activity ActivityName ="AUDI"> </Activity>
             <Activity ActivityName ="UBC"> </Activity>
             


        </div>
        */
        <div>
            <Activity></Activity>
        </div>
        );
    } 
}
 
export default MainPage;