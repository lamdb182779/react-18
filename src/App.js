import logo from "./logo.svg"
import "./style/App.scss"
import Nav from "./views/Nav";
import Todo from "./views/Todo/Todo";
import { useState } from "react";

const App = () => {
  let [author] = useState('NOT ME')
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Todo author={author} />
      </header>
    </div>
  );
}

export default App;
