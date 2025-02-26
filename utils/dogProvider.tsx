'use client'

import { createContext, useContext, useState } from 'react'
import { Dog } from '@/utils/interfaces'

interface DogContextType {
  dogs: Dog[]
  togglePresence: (id: number) => void
}

const DogContext = createContext<DogContextType | undefined>(undefined)

export const DogProvider = ({
  children,
  initialDogs,
}: {
  children: React.ReactNode
  initialDogs: Dog[]
}) => {
  const [dogs, setDogs] = useState(initialDogs)

  const togglePresence = (id: number) => {
    setDogs((prevDogs) =>
      prevDogs.map((dog, index) =>
        index === id ? { ...dog, present: !dog.present } : dog,
      ),
    )
  }

  return (
    <DogContext.Provider value={{ dogs, togglePresence }}>
      {children}
    </DogContext.Provider>
  )
}

export const useDogs = () => {
  const context = useContext(DogContext)
  if (!context) {
    throw new Error('useDogs must be used within a DogProvider')
  }
  return context
}
