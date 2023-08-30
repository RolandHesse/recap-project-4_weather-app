import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const isGoodWeather = true;

  function handleAddActivity(dataObject) {
    setActivities([{ id: uid(8), ...dataObject }, ...activities]);
  }

  const goodWeatherActivities = activities.filter(
    (activity) => activity.isForGoodWeather === isGoodWeather
  );

  // console.log("goodWeatherACtivities: ", goodWeatherActivities);

  // console.log("activities: ", activities);

  return (
    <>
      <List activities={goodWeatherActivities} isGoodWeather={isGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
