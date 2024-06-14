import React from 'react'
import { getFormData } from '../actions'

const Form = () => {
  return (
    <div className='wrapper'>
      <h1>Form</h1>
      // Ova forma se salje (POST) na /api/form <br />
      Za sad se nista ne desava... vidi action/onSubmit
      <form action='/api/form' className='mt-4'>
        <div className=''>
          <label htmlFor='name'>Ime:</label>
          <br />
          <input
            type='text'
            id='name'
            className='rounded-lg text-black px-2 py-1'
          />
        </div>
        <br />
        <div className=''>
          <label htmlFor='message'>Poruka:</label>
          <br />
          <input
            type='text'
            id='message'
            className='rounded-lg text-black px-2 py-1'
          />
        </div>
      </form>
      <br />
      <br />
      <h1>Forma sa Server Action u action</h1>
      <form action={getFormData}>
        <div className=''>
          <label htmlFor='serverActionName'>Server action name:</label>
          <br />
          <input
            type='text'
            id='serverActionName'
            className='rounded-lg text-black px-2 py-1'
          />
        </div>
      </form>
    </div>
  )
}

export default Form
