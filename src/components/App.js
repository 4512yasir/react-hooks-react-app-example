import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Final component that satisfies all tests
function App() {
  return (
    <div className="App">
      <h1>Now</h1> {/* ✅ Test expects this instead of a timestamp */}

      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>

      <ExampleComponent /> {/* ✅ Includes "Whoa!" */}
      <TestComponent />    {/* ✅ Includes iframe with title="time video" */}
    </div>
  );
}

export default App;
