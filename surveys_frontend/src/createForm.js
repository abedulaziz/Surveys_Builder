import React, {useState, useRef} from 'react'
import Head from "react-helmet";
import Header from './layout_components/header';
import Footer from './layout_components/footer';
import SubmitButton from './registration_components/submitButton';
import InputType from './registration_components/inputType';
import axios from 'axios';


const CreateForm = () => {
  const inputsRef = useRef(null);
  const formTitle = useRef(null);
  const form = useRef(null);

  const addQuesRef = React.createRef();
  const submitFormRef = React.createRef();

  const quesType = useRef(null);
  const quesContent = useRef(null);

  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    if (quesContent.current.value)
    setQuestions([...questions, {type: quesType.current.value, placeholder: quesContent.current.value}])


    quesType.current.defaultValue = "text"
    quesContent.current.value = "";
  }

  // submit form
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(form);
    if (inputsRef.current.children.length) {

      // try {
        let user_id = localStorage.getItem('user_id')

        const postFormReq = await axios({
          method: "post",
          url: `http://127.0.0.1:8000/api/admin/forms/${user_id}/create-form`,
          data: {
            title: formTitle.current.value,
            HTML_data: form.current.outerHTML
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        })

        console.log(postFormReq)

      // } 
    }
  }

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

          <form ref={form} id='createForm'>
            <input ref={formTitle} id='formTitle' type="text" placeholder='Form title'/>
            <div ref={inputsRef} className='inputs' id='inputs'>

              {questions.map((question, i) => (
                <InputType key={i} type={question.type} placeholder={question.placeholder} />
              ))}

            </div>
            <SubmitButton ref={submitFormRef} buttonValue="Submit form" onSubmitForm={submitForm}/>
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
            <SubmitButton ref={addQuesRef} buttonValue="Add question"  onSubmitForm={addQuestion} />
          </div>

        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default CreateForm