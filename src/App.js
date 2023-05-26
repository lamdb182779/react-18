import logo from "./logo.svg"
import "./style/App.scss"
import Nav from "./views/Nav";
// import Todo from "./views/Todo/Todo";
import Covid from "./views/Covid/Covid";
import { useState } from "react";

const App = () => {
  let [author] = useState('NOT ME')
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Todo author={author} /> */}
        <Covid />
      </header>
    </div>
  );
}

export default App;
