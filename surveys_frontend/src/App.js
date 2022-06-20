import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./sign_in";
import SignUp from "./signUp";
import CreateForm from "./createForm";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="admin/create-form" element={<CreateForm />} />
      </Routes>
    </Router>
  );
}

export default App;
