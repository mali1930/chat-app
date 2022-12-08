import React from "react";
import { Route, Routes } from "react-router-dom";
import Chats from "./Components/Chats";

import Login from "./Components/Login";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/chats" element={<Chats />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
