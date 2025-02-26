import DogsListWrapper from '@/components/dogs/dogs-list-wrapper'

const Dogs = () => {
  return (
    <article className='bg-background py-16'>
      <h1 className='mb-16 text-center text-5xl font-bold text-white uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]'>
        OUR DOGS
      </h1>
      <DogsListWrapper />
    </article>
  )
}

export default Dogs
