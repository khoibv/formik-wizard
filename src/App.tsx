import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { EnhancedForm } from "./Wizard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <EnhancedForm />
    </div>
  );
}

export default App;
