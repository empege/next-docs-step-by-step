import Aside from "../Aside"

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return (
    <div className='wrapper flex !flex-row'>
      <Aside page='Page 2' />
      <main>Page 2</main>
    </div>
  )
}

export default Page
