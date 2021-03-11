import React, { Component } from 'react';
import "./Calendar.css"
import TodayFocus from "./TodayFocus"


let names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
let days = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

class Calendar extends Component {
    state = {
        date : new Date()
      }
    render() { 
        var date = new Date();
        var prev_month_length = new Date(date.getFullYear(), date.getMonth()-1, 0);
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

        let missing_days_beginning_of_month =[];
        let missing_days_end_of_month =[];
        let days = []
        let num_days_of_month = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
        console.log(num_days_of_month);

        for(let i = 1; i<firstDay; i++){
            missing_days_beginning_of_month.push( <div class="day day--disabled">{prev_month_length-i+1}</div> )
        }

        for(let i=1; i<=7-lastDay; i++){
            missing_days_end_of_month.push(<div class="day day--disabled">{i}</div>)
        }

        for(let i = 1; i<=num_days_of_month; i++){
            if(i == 11){
                days.push(
                    <div class="day">
                        {i}
                                
                    </div>
                )
            }
            else{
                days.push(<div class="day">{i}</div>);
            }
        }

        return ( 
            <div class="dailywork_container">
                 <a name="calendar"></a>

                <h1 className="calendar-title"></h1>

                <TodayFocus></TodayFocus>
                <div class="calendar-container">
                <div class="calendar-header">
                    <h2>{monthNames[this.state.date.getMonth()]} {this.state.date.getFullYear()}</h2>
                </div>
                <div class="calendar"><span class="day-name">Mon</span><span class="day-name">Tue</span><span class="day-name">Wed</span><span class="day-name">Thu</span><span class="day-name">Fri</span><span class="day-name">Sat</span><span class="day-name">Sun</span>
                    
                    {missing_days_beginning_of_month}
                    {days}
                    {missing_days_end_of_month}
                </div>
                </div>
            </div>
         );
    }
}
 
export default Calendar;