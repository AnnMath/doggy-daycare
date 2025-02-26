'use client'

import SearchDogs from '../utils/search'
import FilterDogs from '../utils/filter'
import DogsList from '.'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDogs } from '@/utils/dogProvider'

const DogsListWrapper = () => {
  const { dogs } = useDogs()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const search = searchParams.get('search') || ''
  const filterPresent = searchParams.get('present')
  const page = Number(searchParams.get('page')) || 1
  const pageSize = 6

  // Convert filterPresent to boolean/null
  const filterValue =
    filterPresent === 'true' ? true : filterPresent === 'false' ? false : null

  const updateSearchParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())

    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <>
      <div className='mx-14 mb-8 flex justify-between text-gray-800 sm:mx-8'>
        <SearchDogs
          search={search}
          setSearch={(value) => updateSearchParams('search', value)}
        />
        <FilterDogs
          filterPresent={filterValue}
          setFilterPresent={(value) =>
            updateSearchParams(
              'present',
              value === null ? null : value.toString(),
            )
          }
        />
      </div>
      <DogsList
        dogs={dogs}
        search={search}
        filterPresent={filterValue}
        page={page}
        pageSize={pageSize}
        updatePage={(newPage) => updateSearchParams('page', newPage.toString())}
      />
    </>
  )
}

export default DogsListWrapper
