import { ImSpinner3 } from "react-icons/im"

const LoadingSkeleton = () => {
  return (
    <div className='wrapper'>
      <h1>Loading...</h1>
      <ImSpinner3 className='text-4xl animate-spin-slow' />
    </div>
  )
}

export default LoadingSkeleton
