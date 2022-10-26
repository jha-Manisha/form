import React from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import "./index.css"
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Logout /> : <Login />}</div>;

};

export default App;
