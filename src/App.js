import logo from "./logo.svg"
import "./style/App.scss"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Nav from "./views/Nav";
import Todo from "./views/Todo/Todo";
import Covid from "./views/Covid/Covid";
import { useState } from "react";
import CountDown from "./views/CountDown/CountDown";
import Blog from "./views/Blog/Blog";
import Detail from "./views/Blog/Detail";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import AddNew from "./views/Blog/AddNew";


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
            <Route path="/blog" element={<Blog author={author} />} />
            <Route path="/blog/:id" element={<Detail author={author} />} />
            <Route path="/blog/add-new-blog" element={<AddNew author={author} />} />
          </Routes>
        </header>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
