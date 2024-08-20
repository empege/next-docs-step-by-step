"use client"
import { deletePost } from "../actions"

const SubmitBtn = ({ id }) => {
  const handleDelete = () => {
    deletePost({ id: id })
  }
  return (
    <button
      onClick={handleDelete}
      className='absolute top-[100%] hidden group-hover:block right-0 px-2 py-1 bg-[#404040] text-[0.9rem]'
    >
      ❌
    </button>
  )
}

export default SubmitBtn
