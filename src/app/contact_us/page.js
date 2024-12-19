'use client'
import Form from 'next/form'
import { useState } from 'react';
import { dbPost } from '../scripts/dbHelper';

const ContactUs = () => {
  const title = "Contact Our Team"
  const textContent = `Please use the below form to get in touch with our team about any queries you may have.`

  const [hasSubmitted, setSubmit] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState(false)
  const submitMessages = {success : "Your message has been sent succesfully. Please await a responce via email.", error : "Your message didnt send succesfully. Please check the values entered or reload the page and try again."}
  
  const handleSubmit = (e) => {
    setSubmit(true)
    e.preventDefault()
    if(personName.value == 0 || email.value == 0 || message.value == 0) return 
    const query = "INSERT INTO sitemessages (MessageName, MessageEmail, MessageMessage) VALUES (?,?,?)"
    const row = [ personName.value, email.value, message.value ]
    console.log(row)
    const postStatus = dbPost(query, row)
    setSubmissionStatus(postStatus)
  }

  return ( 
  <div className="contactUs">
    <h1>{title}</h1>
    <br></br>
    <h2>{textContent}</h2>
    <br></br>
    <Form className='contactUsForm'>
      <label htmlFor="personName">Enter Your Name</label>
      <input required="required" id="personName" type= "text" name='personName' onSubmit={(e)=>{e.preventDefault}}/>
      <label htmlFor="email">Your Email</label>
      <input required="required" id="email" type= "text" name='email' onSubmit={(e)=>{e.preventDefault}}/>
      <label htmlFor="message">Your Message</label>
      <input required="required" id="message" type="text" name='message' />
      <button className={hasSubmitted && submissionStatus ? "hidden" : "button"} type='submit' onClick={(e) => {handleSubmit(e)}}>Submit</button>
      <div className={hasSubmitted ? 'contactUsAlert' :'hidden'} style={{background: submissionStatus ? "green" : "red"}}>
        <h2>{submissionStatus ? submitMessages.success : submitMessages.error }</h2>
      </div>
    </Form>
  </div>
  );
}

export default ContactUs;