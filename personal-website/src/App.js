import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import MainPage from "./mainpage"
import Calendar from "./Calendar"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom' 
import ReactGA from 'react-ga';

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    //ReactGA.initialize('UA-110570651-1');
    //ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
    ReactGA.initialize('UA-191999663-1');
    ReactGA.pageview("/homepage");
  }

  render() {
    return (
        <Header data= {this.state.resumeData.main}> </Header>
    );
  }
}

export default App;
