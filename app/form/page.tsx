import AddOrRemoveCookies from "./AddOrRemoveCookies"

// Moze odvojen fajl ili moze i ovako
async function getFormData(formData: FormData) {
  "use server"
  //Stavi da bude formData: formData, ali vidi kako radi
  console.log(formData)
  console.log("Input ponaosob: ", formData.get("serverActionName"))
}

const Form = async () => {
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
            name='serverActionName'
            id='serverActionName'
            className='rounded-lg text-black px-2 py-1'
          />
        </div>
      </form>
      <br />
      <br />
      <AddOrRemoveCookies />
      {/* <h1>Add or Remove Cookie</h1>
      <form>
        <div className=''>
          <label htmlFor='cookie'>Cookie to add or delete:</label>
          <br />
          <input
            type='text'
            name='cookie'
            id='cookie'
            className='rounded-lg text-black px-2 py-1'
          />
          <div className='flex justify-center gap-8 mt-4'>
            <Button callback={addCookie}>Add</Button>
            <Button callback={deleteCookie}>Delete</Button>
          </div>
        </div>
      </form> */}
    </div>
  )
}

export default Form
