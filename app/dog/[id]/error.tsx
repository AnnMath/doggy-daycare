'use client' // Error boundaries must be Client Components

import { Dog } from 'lucide-react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const router = useRouter()

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-4'>
      <Dog className='h-24 w-24' />
      <h2 className='text-4xl'>BORK! Something went wrong!</h2>
      <button
        className='bg-primary rounded-md p-2 text-white'
        onClick={() => router.back()}
      >
        Go back
      </button>
    </div>
  )
}
