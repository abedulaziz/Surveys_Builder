import React from 'react'
import FormContainer from './registration_components/formContainer';
import Head from "react-helmet";
import axios from 'axios';

const signUp = () => {
  let fnameInp;
  let lnameInp;
  let emailInp;
  let passwordInp;
  let genderInp;
  let DOBInp;

  const getInputsInfo = (fname, lname, email, password, gender, DOB) => {
    fnameInp = fname
    lnameInp = lname
    emailInp = email
    passwordInp = password 
    genderInp = gender
    DOBInp = DOB
  }

  console.log(fnameInp, lnameInp, emailInp, passwordInp, genderInp, DOBInp);

  const registerUser = async(e) => {
    e.preventDefault();
    if (fnameInp.value && lnameInp.value && emailInp.value && passwordInp.value && genderInp.value && DOBInp.value) {
      try {
        const signUpReq = await axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/register",
          data: {
            fname: fnameInp.value,
            lname: lnameInp.value,
            email: emailInp.value,
            password: passwordInp.value,
            gender: genderInp.value,
            date_of_birth: DOBInp.value,
            type: "user"
          }
        })
        console.log(signUpReq)
        localStorage.setItem("access_token", signUpReq.data.access_token)
        if (signUpReq.data.user_type == "admin") {
          window.location.href="/admin"
        }
        else {
          window.location.href="/user"
        }

      } catch(err) {
        if (err.response.status == 400) {
          alert("Unvalid data")
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
        <title>Surveys Builder - Sign-up</title>
      </Head>

      <main>
        <FormContainer onSubmitForm={registerUser} inputsInfo={getInputsInfo} fromPage="sign-up" />
      </main>
    </>
  )
}

export default signUp