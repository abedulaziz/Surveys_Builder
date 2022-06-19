import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormContainer from "./registration_components/formContainer";
import Head from "react-helmet";
import axios from "axios";

import Home from "./sign_in";
import SignUp from "./signUp";

function App() {
  let emailInp;
  let passwordInp;

  const getInputsInfo = (email, password) => {
    emailInp = email;
    passwordInp = password;
  };

  const signIn = async (e) => {
    e.preventDefault();
    if (emailInp.value && passwordInp.value) {
      try {
        const signInReq = await axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/login",
          data: {
            email: emailInp.value,
            password: passwordInp.value,
          },
        });
        console.log(signInReq);
        localStorage.setItem("access_token", signInReq.data.access_token);
      } catch (err) {
        if (err.response.status == 422) {
          alert("Unvalid data");
        } else if (err.response.status == 401) {
          alert("Account doesn't exist");
        }
      }
    } else alert("Please input all fields");
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        {/* <Route path="admin/" element={AdminLogin} */}
      </Routes>
    </Router>
  );
}

export default App;
