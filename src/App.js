import React from "react";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods from "./components/Moods";
import Spinner from "./components/Spinner";
import Squares from "./components/Squares";
import Programmers from "./components/Programmers";

function App() {
  return (
    <div className="App">
      <Counter />
      <Moods />
      <Spinner />
      <Input />
      <Squares />
      <Programmers />
    </div>
  );
}

export default App;
