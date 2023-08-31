import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  function handleAddActivity(dataObject) {
    setActivities([{ id: uid(8), ...dataObject }, ...activities]);
  }
  console.log("activities: ", activities);

  const [weather, setWeather] = useState();

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("An error occured.");
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  if (!weather) {
    return null;
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  return (
    <>
      <h1>
        {weather.condition} {weather.temperature}
      </h1>
      <List
        activities={filteredActivities}
        isGoodWeather={weather.isGoodWeather}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
