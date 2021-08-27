import React, { Component } from 'react';
import $ from 'jquery';
import './Styles/App.css';
import Header from './Components/Header.js';
import Leetcode from './Components/Leetcode';
import About from "./Components/About.js";
import Calendar2 from './Components/Calendar2';
import TodayFocus from "./TodayFocus";
import Portfolio from './Components/Portfolio';
import Contact from "./Components/Contact"
import Footer from './Components/Footer';
import Resume from "./Components/Resume"
import ReactGA from 'react-ga';

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

    componentDidMount() {
        this.getResumeData();
        ReactGA.initialize('UA-191999663-1');
        ReactGA.pageview("/");
    }

    render() {
        return ( 
            < div >
                <Header data = { this.state.resumeData.main }/>  
                <Leetcode filepath = "./a.md"></Leetcode>
                <Leetcode filepath = "./146.LRUCache.md"></Leetcode>

            {/*   
                <div className="smoothscroll" id = "things_done_container">
                    <h1 id="dividor_h1">What do i work on?</h1>
                    <div id = "calendar_container">
                        <Calendar2 /> 
                    </div>
                    <div id = "todayfocus_container">
                    <TodayFocus></TodayFocus>
                    </div>
                </div>
           
                <div className="smoothscroll" id = "resume_container">
                    <Resume data = {this.state.resumeData.resume}></Resume>      
                </div>
            */}
            </div> 
        );
    }
}export default App;