import React, { Component } from 'react';

class AgendaItem extends Component {
    state = { 
        date : new Date(),
        title,
        description,
        events,

     }
    render() { 
        return (
            <p> This is an agenda item</p>
         );
    }
}
 
export default AgendaItem;