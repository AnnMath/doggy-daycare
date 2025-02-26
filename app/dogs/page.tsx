import { fetchDogs } from '@/utils/api'
import DogsListWrapper from '@/components/dogs/dogs-list-wrapper'
import { Suspense } from 'react'
import LoadingSpinner from '@/components/ui/loading-spinner'

const Dogs = async () => {
  const dogs = await fetchDogs()

  return (
    <article className='bg-background py-16'>
      <h1 className='mb-16 text-center text-5xl font-bold text-white uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]'>
        OUR DOGS
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <DogsListWrapper dogs={dogs} />
      </Suspense>
    </article>
  )
}

export default Dogs
