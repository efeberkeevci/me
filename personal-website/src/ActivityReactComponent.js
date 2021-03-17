import React, { Component } from 'react';
class ActivityReactComponent extends Component {
    state = { 
        title:""
     }
    
    render() { 
        if(this.props.data){
            this.setState({title: this.props.data.title});
        }
        return (  <div class="task--primary">{this.state.title}</div>);
    }
}
 
export default ActivityReactComponent;