import { Dog } from '@/utils/interfaces'
import DogListCard from './dog-list-card'

const DogsList = async ({ dogs }: { dogs: Promise<Dog[]> }) => {
  const allDogs = await dogs
  return (
    <div className='flex flex-wrap justify-around gap-4'>
      {allDogs.map((dog, index) => (
        <DogListCard key={index} dog={dog} />
      ))}
    </div>
  )
}

export default DogsList
