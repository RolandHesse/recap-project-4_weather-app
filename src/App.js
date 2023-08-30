import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [actvities, setActivities] = useState("");
  function handleAddActivity(useDataObject) {
    setActivities({ id: uid(8), ...useDataObject });
  }
  return <Form onAddActivity={handleAddActivity} actvities={actvities} />;
}

export default App;
