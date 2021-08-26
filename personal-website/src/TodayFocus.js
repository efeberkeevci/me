import React, { Component } from 'react';
import "./Styles/TodayFocus.css";
let activites_dom = [];
let activities = [];
class TodayFocus extends Component {
    /*
    componentWillMount(){
        activities = this.props.activities;
        
        for (let activity of activities) {
            activites_dom.push( < h5 className = "task" > {activity.title} < /h5>);
        }
    }
    */
   
    render() {
        return ( 
            <div className = "todayfocus_container" >
                <h1 className = "title" > Today </h1>  
                < h5 className = "task" > Personal Website Maintenance </h5>
             </div >
        );
    }
}export default TodayFocus;