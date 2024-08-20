import React from "react"
import ImagePicker from "./ImagePicker"
import { addPost } from "../actions"
import SubmitBtn from "./SubmitBtn"

const Form = () => {
  return (
    <>
      <form action={addPost}>
        <label className='block mb-5' htmlFor='creatorName'>
          Vase ime:
          <br />
          <input
            type='text'
            name='creatorName'
            id='creatorName'
            className='rounded-lg text-black px-2 py-1 w-full'
            required
          />
        </label>
        <label className='block mb-5' htmlFor='postText'>
          Tekst posta:
          <br />
          <textarea
            rows={6}
            name='postText'
            id='postText'
            className='rounded-lg text-black px-2 py-1 w-full resize-none'
            required
          ></textarea>
        </label>
        <ImagePicker />
        <SubmitBtn />
      </form>
    </>
  )
}

export default Form
