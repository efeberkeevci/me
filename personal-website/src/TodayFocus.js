import React, { Component } from 'react';
import "./Styles/TodayFocus.css";
class TodayFocus extends Component {
    constructor(props){
        super(props);
        this.state = {
            events : props.events,
            events_dom : []
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({ events: nextProps.events });
        console.log(this.state.events);
        let tmp = [];
        for (let event of this.state.events) {
            tmp.push( <h5 className = "task" > {event.title} </h5>);
        }
        console.log(tmp);
        this.setState({events_dom: tmp });
      }
    componentDidMount(){
        let events = this.props.events; // change this
        
    }
    
   
    render() {
        return ( 
            <div className = "todayfocus_container" >
                <h1 className = "title" > Today </h1>  
                {this.state.events_dom}
             </div >
        );
    }
}export default TodayFocus;