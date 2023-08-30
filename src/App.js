import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import useLocalStorageState from "use-local-storage-state";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });
  function handleAddActivity(dataObject) {
    setActivities([{ id: uid(8), ...dataObject }, ...activities]);
  }

  console.log(activities);
  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
