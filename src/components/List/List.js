export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  function Button() {
    return (
      <button type="button" onClick={onDeleteActivity}>
        x
      </button>
    );
  }

  if (isGoodWeather) {
    return (
      <>
        <h3>The weather is awesome! Go outside and:</h3>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <Button />
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return (
      <>
        <h3>Bad weather outside! Here's what you can do now:</h3>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.name} <Button />
            </li>
          ))}
        </ul>
      </>
    );
  }
}
