import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header.js';

//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactGA from 'react-ga';

class App extends Component {


    constructor(props) {
            super(props);
            this.state = {
                foo: 'bar',
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
        //ReactGA.initialize('UA-191999663-1');
        //ReactGA.pageview("/homepage");
    }

    render() {
        return ( <
            Header data = { this.state.resumeData.main }
            />);
        }
    }

    export default App;