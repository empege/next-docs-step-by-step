import Aside from "../Aside"

const Page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (
    <div className='wrapper flex !flex-row'>
      <Aside page='Page 1' />
      <main>Page 1</main>
    </div>
  )
}

export default Page
