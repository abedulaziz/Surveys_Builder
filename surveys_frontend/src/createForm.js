import React, {useEffect, useRef} from 'react'
import Head from "react-helmet";
import Header from './layout_components/header';
import Footer from './layout_components/footer';
import SubmitButton from './registration_components/submitButton';
import InputType from './registration_components/inputType'
import { createRoot } from 'react-dom/client';


const CreateForm = () => {
  const inputsRef = useRef(null);
  const addQuesRef = React.createRef();
  const submitFormRef = React.createRef();

  const quesType = useRef(null);
  const quesContent = useRef(null);

  let addQues;

  useEffect(() => {
    
    addQues = () => {
      console.log(inputsRef, addQuesRef, submitFormRef, quesType, quesContent);
      
      if (quesContent.current.value) {
        
      }
    }
    const root = createRoot(inputsRef.current)
    root.render(<InputType type={quesType.current.value} placeholder={quesContent.current.value} />)
  })
  console.log(addQues);

  return (
    <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="description" content="Free surveys creator" />
      <meta name="author" content="Abdul Aziz Kharraz" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Surveys Builder - Create a form</title>
    </Head>
    <Header />
    <main id='createFormPanel'>
      <div className='container'>
        <div className='createFormWrapper'>

          <form id='createForm'>
            <h3>Form title</h3>
            <div ref={inputsRef} className='inputs'>
              <input type="text" placeholder="First name" />

            </div>
            <SubmitButton ref={submitFormRef} buttonValue="Submit form"/>
          </form>

          <div className='createInput'>
            <div className='ques_type_wrapper'>
              <label htmlFor='questionType'>Question Type:</label>
              <select ref={quesType} className='question_type' id='questionType'>
                <option defaultValue value="text">Text</option>
                <option value="password">Password</option>
                <option value="email">Email</option>
                <option value="number">Number</option>
                <option value="tel">Tel</option>
                <option value="date">Date</option>
                <option value="month">Month</option>
                <option value="time">Time</option>
              </select>
            </div>
            <div className='ques_content_wrapper'>
              <label htmlFor='questionContent'>Question Content:</label>
              <input ref={quesContent} type="text" placeholder='Type your question'/>
            </div>
            <SubmitButton ref={addQuesRef} buttonValue="Add question" onSubmitForm={addQues} />
          </div>

        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default CreateForm