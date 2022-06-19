import React, {useEffect} from 'react';
import FormHead from './formHead';
import InputType from './inputType';
import SubmitButton from './submitButton';



const FormContainer = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  useEffect(() => {
    props.inputsInfo(emailRef.current, passwordRef.current)
  }, []);

  return (

    <div className='container'>
      <h1 className='page_head'>Welcome to our surveys</h1>

      <div className='form_wrapper'>
        <form className='login_form'>
          <FormHead head="Log in" desc="sign-in and access our surveys"/>

          {/* <InputType type="text" placeholder="Email"/> */}
          <InputType ref={emailRef} type="text" placeholder="Email" />
          <InputType ref={passwordRef} type="password" placeholder="Password"/>

          <SubmitButton buttonValue="Sign in" onSubmitForm={props.onSubmitForm}/>
          <div className='redirect'>
            <p>Don't have an existing account? <a href='#'>Sign-up</a></p>
            <p>Are you an admin? <a href='#'>Log-in here</a></p>
          </div>

        </form>
      </div>
    </div>

  )
}

export default FormContainer