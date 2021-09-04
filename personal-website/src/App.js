import React, { Component } from 'react';
import $ from 'jquery';
import './Styles/App.css';
import Header from './Components/Header.js';
import Leetcode from './Components/Leetcode';
import About from "./Components/About.js";
import Calendar2 from './Components/Calendar2';
import Portfolio from './Components/Portfolio';
import Contact from "./Components/Contact"
import Footer from './Components/Footer';
import Resume from "./Components/Resume"
import ReactGA from 'react-ga';

const dir = '/Leetcode';

class App extends Component {
    constructor(props) {
            super(props);
            this.state = {
                resumeData: {}
            };
        }
        /*
        Fetches data from a json file and feeds to sub-components as props
        */
    getResumeData() {
        $.ajax({
            url: 'resumeData.json',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({ resumeData: data });
            }.bind(this),
            error: function(xhr, status, err) {
                console.log(err);
                alert(err);
            }
        });
    }
    
    fetchTodayLeetcode(){
        
    }

    componentDidMount() {
        this.fetchTodayLeetcode();
        this.getResumeData();
        ReactGA.initialize('UA-191999663-1');
        ReactGA.pageview("/");
    }

   
    render() {
        return ( 
            < div >
                <Header data = { this.state.resumeData.main }/>  
                {/*<Leetcode filepath = "./146.LRUCache.md"></Leetcode> */}
                <Calendar2></Calendar2>
           
                
            {/*   
                <div className="smoothscroll" id = "resume_container">
                    <Resume data = {this.state.resumeData.resume}></Resume>      
                </div>
            */}
            </div> 
        );
    }
}export default App;