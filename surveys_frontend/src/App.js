import React from 'react';
import FormContainer from './registration_components/formContainer';
import Head from "react-helmet";
import axios from 'axios';


function App() {

  const signIn = async(e) => {
    e.preventDefault();
    
    const signInReq = await axios({
      method: "post",
      url: "http://127.0.0.1:8000/api/login",
      data: {
        email: "clindgren@example.com",
        password: "password"
      }
    })

    console.log(signInReq)
    localStorage.setItem("access_token", signInReq.data.access_token)
  }

  return (
    <div className="app">
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Free surveys creator" />
        <meta name="author" content="Abdul Aziz Kharraz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Surveys Builder - Sign-in</title>
      </Head>

      <main>
        <FormContainer onSubmitForm={signIn}/>
      </main>

    </div>
  );
}

export default App;
