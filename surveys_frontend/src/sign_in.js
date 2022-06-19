import React from 'react';
import FormContainer from './registration_components/formContainer';
import Head from "react-helmet";
import axios from 'axios';

const sign_in = () => {
  let emailInp;
  let passwordInp;

  const getInputsInfo = (email, password) => {
    emailInp = email
    passwordInp = password
  }

  const signIn = async(e) => {
    e.preventDefault();
    if (emailInp.value && passwordInp.value) {
      try {
        const signInReq = await axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/login",
          data: {
            email: emailInp.value,
            password: passwordInp.value
          }
        })
        console.log(signInReq)
        localStorage.setItem("access_token", signInReq.data.access_token)
        if (signInReq.data.user_type == "admin") {
          window.location.href="/admin"
        }
        else {
          window.location.href="/user"
        }

      } catch(err) {
        if (err.response.status == 422) {
          alert("Unvalid data")
        }
        else if(err.response.status == 401) {
          alert("Account doesn't exist")
        }
      }

    }
    else alert("Please input all fields")
  }
  return (
    <>
    
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free surveys creator" />
        <meta name="author" content="Abdul Aziz Kharraz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Surveys Builder - Sign-in</title>
      </Head>

      <main>
        <FormContainer onSubmitForm={signIn} inputsInfo={getInputsInfo} fromPage="sign-in"/>
      </main>

    </>
  )
}

export default sign_in