'use client'

import DogsList from '@/components/dogs'
import LoadingSpinner from '@/components/ui/loading-spinner'
import { fetchDogs } from '@/utils/api'
import { Dog } from '@/utils/interfaces'
import { Filter, Search } from 'lucide-react'
import { useState, useEffect } from 'react'

const Dogs = () => {
  const [dogs, setDogs] = useState<Dog[]>([])
  const [search, setSearch] = useState<string>('')
  const [filterPresent, setFilterPresent] = useState<boolean | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getDogs = async () => {
      try {
        const data = await fetchDogs()
        setDogs(data)
      } catch (error) {
        console.error('Could not fetch dogs:', error)
      } finally {
        setLoading(false)
      }
    }
    getDogs()
  }, [])

  if (loading) return <LoadingSpinner />
  return (
    <article className='bg-background py-16'>
      <h1 className='mb-16 text-center text-5xl font-bold text-white uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]'>
        OUR DOGS
      </h1>
      <div className='mx-14 mb-8 flex justify-between text-gray-800 sm:mx-8'>
        <div className='bg-primary flex items-center rounded-md text-white'>
          <Search className='h-[1.5em] p-1 text-white' />
          <p className='text-xs'>Search</p>
          <input
            type='text'
            placeholder='Name or breed'
            className='bg-primary w-30 rounded-md p-2 text-xs text-white'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className='bg-primary flex items-center rounded-md px-1 text-xs text-white'>
          <Filter className='h-[1.5em] p-1 text-white' />
          <select
            className=''
            value={
              filterPresent === null
                ? 'all'
                : filterPresent
                  ? 'present'
                  : 'not-present'
            }
            onChange={(e) => {
              const value = e.target.value
              setFilterPresent(value === 'all' ? null : value === 'present')
            }}
          >
            <option value='all'>All</option>
            <option value='present'>Present</option>
            <option value='not-present'>Not Present</option>
          </select>
        </div>
      </div>

      <DogsList dogs={dogs} search={search} filterPresent={filterPresent} />
    </article>
  )
}

export default Dogs
