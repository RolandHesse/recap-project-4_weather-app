import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);
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
