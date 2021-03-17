import React, { Component } from 'react';
import Signature from "../signature"
import Calendar from "../Calendar"
import { unmountComponentAtNode, render } from "react-dom";
import Footer from './Footer';
class Header extends Component {
   timeout = 0;
   state = {
      is_mainpage_visible : true,
      is_welcome_page_visible : true,
      opacity : 0      
   }
   componentWillUnmount(){this.setState({is_mainpage_visible:true, is_welcome_page_visible:false});}
   switchToMainPage(){setInterval(() => {this.componentWillUnmount()}, 4000);}
   stopTransition(){clearInterval(this.timeout);}

   mainpage_transition(){
      this.timeout = setInterval(() => {
         if(this.state.opacity<=1){
            this.setState({opacity: this.state.opacity+= 0.001});
         }else{
            this.stopTransition();
         }
      }, 10);
   }
   render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
    
    

   
    if(this.state.is_welcome_page_visible){
      this.switchToMainPage();
       return <Signature></Signature>
    }


    
    if(this.state.is_mainpage_visible){
      this.mainpage_transition();
      return (
         <div id="app_container">

         <header id="home" style = {{opacity : this.state.opacity}}>
         
   
         <nav id="nav-wrap">
   
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
   
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#calendar">My Focus</a></li>
               {/*
               
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
                              */}

            </ul>
   
         </nav>
         
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">I'm {name}.</h1>
               <h3>I'm a {city} based <span>{occupation}</span> {description}</h3>
               <hr />
               <ul className="social">
                  {networks}
               </ul>
            </div>
         </div>  
        
        
      
         <p className="scrolldown">
            <a className="smoothscroll" href="#calendar"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      <Calendar></Calendar>
      <Footer></Footer>
      </div>
       );
     }
   }
}
    

export default Header;
