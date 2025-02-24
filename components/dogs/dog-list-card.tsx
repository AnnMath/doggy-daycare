import { Dog } from '@/utils/interfaces'
import { Mars, Venus } from 'lucide-react'
import Image from 'next/image'

const DogListCard = ({ dog }: { dog: Dog }) => {
  // remember to wrap in a link
  return (
    <section
      className={`font-inter ${dog.present === true ? 'border-success' : 'border-danger'} flex h-96 w-xs flex-col gap-2 border-8 bg-slate-50`}
    >
      <Image
        src={dog.img}
        alt=''
        height={200}
        width={200}
        className='h-64 w-88 object-cover'
      />
      <div className='flex flex-row justify-between px-2'>
        <div>
          <h2 className='flex items-center text-3xl font-bold uppercase'>
            {dog.name} {dog.sex === 'female' ? <Venus /> : <Mars />}
          </h2>
          <p className='capitalize'>{dog.breed}</p>
        </div>
        <h2 className='text-3xl font-bold'>{dog.age} y/o</h2>
      </div>
      <p className='mt-auto p-2'>
        OWNER: {dog.owner.name} {dog.owner.lastName}
      </p>
    </section>
  )
}

export default DogListCard
