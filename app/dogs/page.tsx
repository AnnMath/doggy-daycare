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
      <div className='mx-14 mb-8 flex justify-between text-white sm:mx-8'>
        {/* bg-primary flex items-center rounded-md p-2 */}
        <Search className='h-[1em]' />
        <input
          type='text'
          placeholder='Search by name or breed'
          className='rounded-md p-2 text-black'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className='rounded-md p-2 text-black'
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
          <option value='present'>Present Only</option>
          <option value='not-present'>Not Present Only</option>
        </select>
      </div>

      <DogsList dogs={dogs} search={search} filterPresent={filterPresent} />
    </article>
  )
}

export default Dogs
