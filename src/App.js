import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
  function handleAddActivity(useDataObject) {
    setActivities([{ id: uid(8), ...useDataObject }, activities]);
  }
  return (
    <>
      <List activities={activities} />
      <Form onAddActivity={handleAddActivity} />
    </>
  );
}

export default App;
