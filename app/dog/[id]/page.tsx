'use client'

import DogCard from '@/components/dogs/dog-card'
import { useDogs } from '@/utils/dogProvider'
import { useParams } from 'next/navigation'

const DogPage = () => {
  const { id } = useParams()

  const { dogs } = useDogs()
  if (!dogs) {
    return <h1>Sorry, something went wrong</h1>
  }
  const dogId = Number(id)
  const currentDog = dogs[dogId]

  return <DogCard currentDog={currentDog} id={dogId} />
}

export default DogPage
