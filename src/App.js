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

  const [weather, setWeather] = useState();
  // const weather = true;
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
    console.log("Weather", weather);
    console.log("SetWeather", setWeather);
  }, []);

  function handleAddActivity(dataObject) {
    setActivities([{ id: uid(8), ...dataObject }, ...activities]);
  }

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather
  );

  // console.log("filteredActivities: ", filteredActivities);

  // console.log("activities: ", activities);

  return (
    <>
      <List activities={filteredActivities} isGoodWeather={weather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
