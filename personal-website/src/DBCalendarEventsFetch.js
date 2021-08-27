import Activity from "./OldComponents/Activity";
const BACKEND_ROOT_URL = "https://efeevci-person-site-backend.herokuapp.com";
let activities = [];
let events = [];

/*
Gets days of the current month
Calls to get the activities for that day
*/
async function getDays(){
    var date = new Date();
    var month = date.getMonth() + 1;
    
    fetch(BACKEND_ROOT_URL + "/days/" + month).then(res => res.json())
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

}
/*
Gets the activities for the specified day with given day_id
*/
async function getActivity(day_id, date) {
    fetch(BACKEND_ROOT_URL + "/activities/" + day_id).then(res => res.json())
      .then(
          (result) => {
              result.forEach(element => {
                  let activity = new Activity();
                  activity.date = date;
                  activity.day_id = day_id;
                  activity.activity_id = element.activity_id;
                  activity.title = element.title;
                  activity.description = element.description;
                  //getTag(activity);
                  activities.push(activity);
              });
          },
          (error) => {
              console.log("Error in getting activity: ", error)
          }
      ).then(() => {return});
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

function createEvents(activities){
  let id = 0;
  if(activities){
    for(let activity of activities){
        var title = activity.title;
        var start_date = activity.date;
        events.push({
          id : {id},
          color : '#fd3153',
          from : {start_date},
          to: '2020-08-27T18:00:00+00:00',
          title:{title}
        });
      }
  }
}
export{getDays,createEvents};