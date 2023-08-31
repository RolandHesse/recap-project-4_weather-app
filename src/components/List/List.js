export default function List({ activities, isGoodWeather, onDeleteActivity }) {
  if (isGoodWeather) {
    return (
      <>
        <h3>The weather is awesome! Go outside and:</h3>
        <ul>
          {activities.map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                x
              </button>
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
              {activity.name}{" "}
              <button
                type="button"
                onClick={() => onDeleteActivity(activity.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
