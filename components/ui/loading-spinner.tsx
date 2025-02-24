import { LoaderCircle } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className='w-full'>
      <LoaderCircle className='mx-auto h-72 w-72 animate-spin text-gray-400/50' />
    </div>
  )
}

export default LoadingSpinner
