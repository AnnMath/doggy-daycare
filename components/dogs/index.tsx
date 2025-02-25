'use client'

import { Dog } from '@/utils/interfaces'
import DogListCard from './dog-list-card'
import Link from 'next/link'

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
        filteredDogs.map((dog, index) => (
          <Link href={`/dog/${index}`} key={index}>
            <DogListCard dog={dog} />
          </Link>
        ))
      ) : (
        <p className='text-center text-white'>No dogs found.</p>
      )}
    </div>
  )
}

export default DogsList
