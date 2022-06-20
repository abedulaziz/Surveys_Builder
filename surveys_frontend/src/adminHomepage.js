import React from 'react'
import Head from './layout_components/header'
import Footer from './layout_components/footer'
import SubmitButton from './registration_components/submitButton'

const adminHomepage = () => {
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
              <div className='form'>
                <div>
                  <h4 className='title'>SEF Registration</h4>
                  <p className='created_at'>11/0/2022</p>
                </div>
                <div className='submits'>Submits: <span className='submits_num'>32</span></div>
              </div>
              <div className='form'>
                <div>
                  <h4 className='title'>SEF Registration</h4>
                  <p className='created_at'>11/0/2022</p>
                </div>
                <div className='submits'>Submits: <span className='submits_num'>32</span></div>
              </div>
            </div>

            <SubmitButton buttonValue="Create a form"/>

          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default adminHomepage