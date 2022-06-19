import React, {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import FormHead from './formHead';
import InputType from './inputType';
import SubmitButton from './submitButton';



const FormContainer = (props) => {
  const isLoginPage = props.fromPage == "sign-in";


  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const fnameRef = React.createRef();
  const lnameRef = React.createRef();
  const genderRef = useRef(null);
  const DOBRef = React.createRef();

  useEffect(() => {
    console.log(fnameRef, emailRef, passwordRef, lnameRef, genderRef, DOBRef);

    isLoginPage ? 
    props.inputsInfo(emailRef.current, passwordRef.current)
    : props.inputsInfo(fnameRef.current, lnameRef.current, emailRef.current, passwordRef.current, genderRef.current, DOBRef.current)
  }, []);
  

  return (

    <div className='container'>
      <h1 className='page_head'>Welcome to our surveys</h1>

      <div className='form_wrapper'>
        <form>

          {isLoginPage ? 
          <FormHead head="Log In" desc="Sign-in and access our surveys"/>
          : <FormHead head="Sign Up" desc="Sign-up and access our surveys"/>}
          
          {!isLoginPage &&
          <InputType ref={fnameRef} type="text" placeholder="First name" /> }

          {!isLoginPage &&
          <InputType ref={lnameRef} type="text" placeholder="Last name" /> }

          <InputType ref={emailRef} type="text" placeholder="Email" />
          <InputType ref={passwordRef} type="password" placeholder="Password"/>

          {!isLoginPage &&
          <select ref={genderRef}>
            <option name="male">Male</option>
            <option name="female">Female</option>
          </select> }

          {!isLoginPage &&
          <InputType ref={DOBRef} type="date" placeholder="Date of birth" /> }


          <SubmitButton buttonValue={!isLoginPage ? "Sign Up": "Log In"} onSubmitForm={props.onSubmitForm}/>
          <div className='redirect'>
            {isLoginPage ?
            <p>Don't have an existing account? <Link to="/sign-up">Sign-up</Link></p>
            : <p>Already have an account? <Link to="/">Sign-in</Link></p>
            }
          </div>

        </form>
      </div>
    </div>

  )
}

export default FormContainer