'use client'

import { Dog } from '@/utils/interfaces'
import DogListCard from './dog-list-card'
import Link from 'next/link'
import { Dog as DogIcon } from 'lucide-react'

const DogsList = ({
  dogs,
  search,
  filterPresent,
}: {
  dogs: Dog[]
  search: string
  filterPresent: boolean | null
}) => {
  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch =
      dog.name.toLowerCase().includes(search.toLowerCase()) ||
      dog.breed.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filterPresent === null || dog.present === filterPresent

    return matchesSearch && matchesFilter
  })
  return (
    <div className='flex flex-wrap justify-around gap-4'>
      {filteredDogs.length > 0 ? (
        filteredDogs.map((dog) => {
          const originalIndex = dogs.findIndex((d) => d === dog)

          return (
            <Link href={`/dog/${originalIndex}`} key={originalIndex}>
              <DogListCard dog={dog} />
            </Link>
          )
        })
      ) : (
        <div className='flex flex-col items-center'>
          <DogIcon className='h-16 w-16' />
          <p className=''>No dogs found.</p>
        </div>
      )}
    </div>
  )
}

export default DogsList
