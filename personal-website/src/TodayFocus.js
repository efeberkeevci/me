import React, { Component } from 'react';
import "./TodayFocus.css"
class TodayFocus extends Component {
    state = {  }
    render() { 
        return ( 
            <div className= "todayfocus_container">
                <h1 className="title">Today</h1>
                <h5 className="task"> Distributed Hash Table</h5> 
                <h5 className="task"> Personal Website Development</h5> 
             </div>
         );
    }
}
 
export default TodayFocus;