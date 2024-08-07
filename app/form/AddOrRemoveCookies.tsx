import { addCookie, deleteCookie } from "../actions"
import { cookies } from "next/headers"
import Cookie from "./Cookie"

const AddOrRemoveCookies = () => {
  const cookieStore = cookies()
  console.log("cookieStore: ", cookieStore.getAll())
  return (
    <>
      <h1>Add or Remove Cookie</h1>
      <form action={addCookie}>
        <div className=''>
          <label htmlFor='cookieName'>Cookie to add (Name):</label>
          <br />
          <input
            type='text'
            name='cookieName'
            id='cookieName'
            className='rounded-lg text-black px-2 py-1'
          />
          <br />
          <br />
          <label htmlFor='cookieValue'>Cookie to add (Value):</label>
          <br />
          <input
            type='text'
            name='cookieValue'
            id='cookieValue'
            className='rounded-lg text-black px-2 py-1'
          />
          <div className='flex justify-center gap-8 mt-4'>
            <button className='button active'>Add Cookie</button>
          </div>
        </div>
      </form>
      <br />
      <h2>Cookies:</h2>
      <div>
        {cookieStore.getAll().map((cookie) => (
          <Cookie cookie={cookie} key={cookie.name} />
        ))}
      </div>
    </>
  )
}

export default AddOrRemoveCookies
