import logo from "./logo.svg"
import "./style/App.scss"
import Nav from "./views/Nav";
// import Todo from "./views/Todo/Todo";
import Covid from "./views/Covid/Covid";
import { useState } from "react";
import CountDown from "./views/CountDown/CountDown";

const App = () => {
  let [author] = useState('NOT ME')
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown />
        {/* <Todo author={author} /> */}
        <Covid author={author} />
      </header>
    </div>
  );
}

export default App;
