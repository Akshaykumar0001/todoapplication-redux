import "./App.css";
import LoginSignup from "./Components/LoginPage/LoginSignup";
import AllTodos from "./Components/AllTodos";
// import TblTodo from "./Components/TblTodo";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Components/LoginPage/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AllTodos />}></Route>
        <Route exact path="/LoginSignup" element={<LoginSignup />}></Route>
        <Route exact path="/Signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
