import { Dog } from './interfaces'

export const fetchDogs = async (): Promise<Dog[]> => {
  // add some error handling
  const URL = 'https://majazocom.github.io/Data/dogs.json'

  const response = await fetch(URL)
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`)
  }
  const dogs = await response.json()
  return dogs
}
