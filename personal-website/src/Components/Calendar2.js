import React from "react";
import TodayFocus from "../TodayFocus";
import Calendar from "react-awesome-calendar";
import styles from "../Styles/Calendar2.css";
import { createThisMonthEvents } from "../DBCalendarEventsFetch";
var date = new Date();
class Calendar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      this_month_events: [],
      events_dom: [],
    };
    this.calendar = React.createRef();
  }

  async componentDidMount() {
    await this.addCurrentMonthEvents();
    // this.forceUpdate();
  }

  async addCurrentMonthEvents(month) {
    const res = await createThisMonthEvents(month);
    console.log("THIS RETURNS EMPTY ", res);
    this.setState({ this_month_events: res }, () => this.add_to_today_focus());
    // this.forceUpdate();
  }

  add_to_today_focus() {
    let events = this.state.this_month_events;
    console.log(events);
    let tmp = [];
    for (let i = 0; i < events.length; i++) {
      console.log(i);
      let event = events[i];
      console.log(event);
      tmp.push(<h5 className="task"> {event.title} </h5>);
    }

    this.setState({ events_dom: tmp }, () =>
      console.log(this.state.events_dom)
    );
  }

  render() {
    return (
      <div id="things_done_container">
        <h1 id="dividor_h1">What do i work on?</h1>
        <div id="calendar_container">
          <div className={styles.pageCalendar}>
            <Calendar
              ref={this.calendar}
              onClickEvent={(event) => console.log("this is an event", event)}
              onChange={(date) => {
                if (date.mode == "monthlyMode") {
                  this.addCurrentMonthEvents(date.month);
                }
              }}
              onClickTimeLine={(date) => console.log(date)}
              events={this.state.this_month_events}
            />
          </div>
        </div>
        <div id="todayfocus_container" className="todayfocus_container">
          <h1 className="title"> Today </h1>
          <h5 className="task"> Personal Website Maintenance </h5>
        </div>
      </div>
    );
  }
}
export default Calendar2;
