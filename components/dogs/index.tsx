import { Dog } from '@/utils/interfaces'
import DogListCard from './dog-list-card'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Dog as DogIcon } from 'lucide-react'

const DogsList = ({
  dogs,
  search,
  filterPresent,
  page,
  pageSize,
  updatePage,
}: {
  dogs: Dog[]
  search: string
  filterPresent: boolean | null
  page: number
  pageSize: number
  updatePage: (page: number) => void
}) => {
  const filteredDogs = dogs.filter((dog) => {
    const matchesSearch =
      dog.name.toLowerCase().includes(search.toLowerCase()) ||
      dog.breed.toLowerCase().includes(search.toLowerCase())

    const matchesFilter =
      filterPresent === null || dog.present === filterPresent

    return matchesSearch && matchesFilter
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredDogs.length / pageSize)
  const currentPage = Math.max(1, Math.min(page, totalPages))

  // Slice dogs for the current page
  const paginatedDogs = filteredDogs.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )

  return (
    <>
      <div className='mx-auto grid grid-cols-1 justify-items-center gap-y-12 sm:grid-cols-2 md:grid-cols-2 lg:w-3/4 lg:grid-cols-2 xl:grid-cols-3'>
        {paginatedDogs.length > 0 ? (
          paginatedDogs.map((dog) => {
            const originalIndex = dogs.findIndex((d) => d === dog)

            return (
              <Link href={`/dog/${originalIndex}`} key={originalIndex}>
                <DogListCard dog={dog} />
              </Link>
            )
          })
        ) : (
          <div className='col-span-full flex w-full flex-col items-center'>
            <DogIcon className='h-16 w-16' />
            <p className=''>No dogs found.</p>
          </div>
        )}
      </div>
      {totalPages > 1 && (
        <div className='mt-6 flex items-center justify-center gap-4'>
          <button
            onClick={() => updatePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft
              className={`${currentPage === 1 ? 'text-gray-500' : ''}`}
            />
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => updatePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight
              className={`${currentPage === totalPages ? 'text-gray-500' : ''}`}
            />
          </button>
        </div>
      )}
    </>
  )
}

export default DogsList
