import logo from "./logo.svg"
import "./style/App.scss"
import Nav from "./views/Nav";
import Todo from "./views/Todo/Todo";
import Covid from "./views/Covid/Covid";
import { useState } from "react";
import CountDown from "./views/CountDown/CountDown";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"

const App = () => {
  let [author] = useState('NOT ME')
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <CountDown /> */}
          {/* <Todo author={author} /> */}
          {/* <Covid author={author} /> */}
          <Routes>
            <Route path="/" element={<CountDown />} />
            <Route path="/covid" element={<Covid author={author} />} />
            <Route path="/todo" element={<Todo author={author} />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>

  );
}

export default App;
