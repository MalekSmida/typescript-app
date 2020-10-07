import React from "react";
import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Test
        text="Test Typescript 🚀"
        selected={false}
        obj={{ name: "laabidi", email: "laabidi@gmail.com" }}
      />
    </div>
  );
}

export default App;
