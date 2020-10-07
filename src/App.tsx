import React from "react";
import "./App.css";
import Test from "./components/Test";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Test
        text="Test Typescript 🚀"
        selected={false}
        obj={{ name: "laabidi", email: "laabidi@gmail.com" }}
      />

      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
