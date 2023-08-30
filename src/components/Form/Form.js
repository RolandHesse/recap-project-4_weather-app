export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const dataObject = {
      name: event.target[0].value,
      isForGoodWeather: event.target[1].checked,
    };
    // console.log("event: ", event);
    console.log("dataObject", dataObject);
    onAddActivity(dataObject);
    event.target[0].focus();
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add new Activity</h2>
      <label htmlFor="activity-name">Activity</label>
      <input
        id="activity-name"
        name="activtiy-name"
        type="text"
        placeholder="Type new activity here"
      ></input>
      <label htmlFor="checkbox">Good-weather activity</label>
      <input id="checkbox" name="checkbox" type="checkbox"></input>
      <button type="submit">Submit</button>
    </form>
  );
}
