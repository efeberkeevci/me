import Activity from "./OldComponents/Activity";
const BACKEND_ROOT_URL = "https://efeevci-person-site-backend.herokuapp.com";

/*
Gets days of the current month
Calls to get the activities for that day
*/
async function createThisMonthEvents(){
    var date = new Date();
    var month = date.getMonth() + 1; // need to make it reflective for current month window
    var activities = [];
    var events = [];
    
    const days = await fetch(BACKEND_ROOT_URL + "/days/" + month).then(res => res.json());
    
    Promise.all(days.map(async (day) => {
        const cur_activities = await getActivities(day.day_id,day.date);
        cur_activities.forEach((activity) =>{
            const cur_event = createEvent(activity);
            events.push(cur_event);
        }) 
    }));
    
    return events;
}
/*
.then(
          (result) => {
              result.forEach(day => {
                 getActivity(day.day_id, day.date);
              })
          },
          (error) => {
              console.log("Error in getting days: ", error)
          }
           ).then(() => {createEvents(activities)});
*/
/*
Gets the activities for the specified day with given day_id
*/
async function getActivities(day_id, date) {
    
    let current_activities = [];
    const result = await fetch(BACKEND_ROOT_URL + "/activities/" + day_id).then(res => res.json());
    result.forEach((element) => {   
        let activity = new Activity();
        activity.date = date;
        activity.day_id = day_id;
        activity.activity_id = element.activity_id;
        activity.title = element.title;
        activity.description = element.description;
        //getTag(activity);
        current_activities.push(activity);
    });
    return current_activities;      
}
/*
async function getTag(activity) {
  fetch(BACKEND_ROOT_URL + "/tags/" + activity.activity_id).then(res => res.json())
      .then(
          (result) => {
              result.forEach(tag => {
                  activity.tags.push(tag.name);
              });
          },
          (error) => {
              console.log("Error in getting tags: ", error)
          }
      ).then(() => {return});
}
*/

function createEvent(activity, event_color = '#fd3153'){
    let end_date = new Date(activity.date);
    end_date.setDate(end_date.getDate()+1);

    const event = {
        id : activity.activity_id,
        color : event_color,
        from : activity.date,
        to: end_date,
        title: activity.title
    };
    return event;
}
export{createThisMonthEvents};