export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log("data: ", data);
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
