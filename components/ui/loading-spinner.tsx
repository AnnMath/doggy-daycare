import { Dog, LoaderCircle } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className='text-primary flex h-screen w-full flex-col items-center justify-center'>
      <Dog className='h-24 w-24' />
      <LoaderCircle className='mx-auto h-72 w-72 animate-spin' />
      <p className='text-2xl'>Loading doggos...</p>
    </div>
  )
}

export default LoadingSpinner
