'use client'

import { useEffect, useState } from 'react'
import { DogProvider } from '@/utils/dogProvider'
import { fetchDogs } from '@/utils/api'
import { Dog } from '@/utils/interfaces'
import LoadingSpinner from '@/components/ui/loading-spinner'

const DogProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [dogs, setDogs] = useState<Dog[] | null>(null)
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const getDogs = async () => {
      try {
        const fetchedDogs = await fetchDogs()
        setDogs(fetchedDogs)
      } catch (error) {
        console.log('error', error)
      } finally {
        setloading(false)
      }
    }
    getDogs()
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!dogs) return <p>Could not load dogs</p>

  return <DogProvider initialDogs={dogs}>{children}</DogProvider>
}

export default DogProviderWrapper
