import DogCard from '@/components/dogs/dog-card'
import { fetchDogs } from '@/utils/api'

const DogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const allDogs = await fetchDogs()
  if (!allDogs) {
    return <h1>Sorry, something went wrong</h1>
  }
  const dogId = parseInt(id)
  const currentDog = allDogs[dogId]

  return <DogCard currentDog={currentDog} allDogs={allDogs} id={dogId} />
}

export default DogPage
