import React, { Component } from 'react';
import Emoji from '../OldComponents/Emoji';
var image_src  =  "images/avatar.png";
class Header extends Component {

    render() {
        document.getElementsByTagName("META")[2].content="charset = 'UTF8";
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(function(network) {
                return <li key = { network.name } > < a href = { network.url } > < i className = { network.className } > </i></a > </li>
            })
        }
        //Signature transition
        //this.mainpage_transition();
        return ( 
            
        <div id = "app_container" >
                { /* <header id="home" style = {{opacity : this.state.opacity}}>  */ } 
                <header id = "home" >
                
                    
                    <nav id = "nav-wrap" >
                        <a className = "mobile-btn"
                        href = "#nav-wrap"
                        title = "Show navigation" > Show navigation </a> <a className = "mobile-btn"
                        href = "#home"
                        //TODO: Add real links to the navigation buttons
                        title = "Hide navigation" > Hide navigation </a> {
                            
                            <ul id="nav" className="nav">
                              
                                <li className="current"><a className="smoothscroll" href="#home">Home</a><Emoji symbol ="🏠"></Emoji></li>
                                <li> <Emoji></Emoji></li>
                                <li><a className="smoothscroll" href="#things_done_container">My Focus Today</a></li>  
                                <li className="projects"><a className="smoothscroll" href="#projects">Projects</a></li>
                                <li className="outside_of_work"><a className="smoothscroll" href="#outouseside_of_work">Outside of Work</a></li>
                                <li className="blog"><a className="smoothscroll" href="#blog">Blog</a></li>


                                
                                
                              {/*   
                                <li><a className="smoothscroll" href="#resume_container">Resume</a></li>
                                <li><a className="smoothscroll" href="#blog_container">Blog</a></li>
                                */}
                            </ul>                
                        }
                    </nav>
                   
                    <div className = "row banner" >
                    <img id = "avatar" src ={image_src}/>
                    <div className = "banner-text" >
                    
                    <h1 className = "responsive-headline" > I'm {name}.</h1> <h3 > I'm a {city} based <span>{occupation}</span> {description}</h3> 
                    
                    <hr/>
                    <ul className = "social" > { networks } </ul> </div > </div>  
                    
                    
            </header>
           
        </div>
    );

}
}


export default Header;