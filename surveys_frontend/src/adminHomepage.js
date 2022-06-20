import React, {useState, useEffect} from 'react'
import Head from './layout_components/header'
import Footer from './layout_components/footer'
import SubmitButton from './registration_components/submitButton'
import AdminForm from './registration_components/adminForm'
import axios from 'axios';

const AdminHomepage = () => {

  const [listOfForms, setListOfForms] = useState([])

  // const retrieveForms = async () => {

    let user_id = localStorage.getItem('user_id')

    useEffect(() => {

      const retrieveData = async() => {
        const grabFormsReq = await axios({
          method: "get",
          url: `http://127.0.0.1:8000/api/admin/forms/${user_id}`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        })
    
        if (grabFormsReq.data.message == "You are unauthorised") {
          alert("You are unauthorised. Please login first")
        }
        else {
          const forms = grabFormsReq.data.admin_forms
          console.log(forms);
          setListOfForms(forms)
    
        }
        console.log(grabFormsReq)

      }
      retrieveData()

    }, [])
  // }
  // retrieveForms()


  // } 


  return (
    <>
      <Head />
      <main>
        <div className='container'>
          <div className='admin_forms'>

            <div className='forms_head'>
              <h2>Your forms</h2>
            </div>

            <div className='forms_list'>
              {listOfForms.map(form => (
                <AdminForm key={form.id} title={form.title} created_at={form.created_at} />
              ))}
            </div>

            <SubmitButton buttonValue="Create a form"/>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default AdminHomepage