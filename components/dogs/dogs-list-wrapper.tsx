'use client'

import { useState } from 'react'
import SearchDogs from '../utils/search'
import FilterDogs from '../utils/filter'
import { Dog } from '@/utils/interfaces'
import DogsList from '.'

const DogsListWrapper = ({ dogs }: { dogs: Dog[] }) => {
  const [search, setSearch] = useState('')
  const [filterPresent, setFilterPresent] = useState<boolean | null>(null)
  return (
    <>
      <div className='mx-14 mb-8 flex justify-between text-gray-800 sm:mx-8'>
        <SearchDogs search={search} setSearch={setSearch} />
        <FilterDogs
          filterPresent={filterPresent}
          setFilterPresent={setFilterPresent}
        />
      </div>
      <DogsList dogs={dogs} search={search} filterPresent={filterPresent} />
    </>
  )
}

export default DogsListWrapper
