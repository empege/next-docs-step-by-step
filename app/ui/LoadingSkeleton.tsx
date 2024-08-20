import { ImSpinner3 } from "react-icons/im"

interface LoaderTest {
  text?: string
}

const LoadingSkeleton = ({ text }: LoaderTest) => {
  return (
    <div className='wrapper'>
      <h1>{text || "Loading..."}</h1>
      <ImSpinner3 className='text-4xl animate-spin-slow' />
    </div>
  )
}

export default LoadingSkeleton
