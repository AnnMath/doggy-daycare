'use client'
import { Dog } from '@/utils/interfaces'
import Image from 'next/image'
import ToggleSwitch from '@/components/ui/toggle-switch'
import Description from '../ui/description'
import Link from 'next/link'
import {
  ChevronLast,
  ChevronLeft,
  ChevronFirst,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react'
import { useDogs } from '@/utils/dogProvider'
import { useRouter } from 'next/navigation'

const DogDetails = ({
  label,
  value,
}: {
  label: string
  value: string | number
}) => (
  <div>
    <p className='font-semibold'>{label}:</p>
    <p className={`${label !== 'Email' ? 'capitalize' : ''}`}>{value}</p>
  </div>
)

const NavigationLink = ({
  href,
  disabled,
  icon: Icon,
}: {
  href: string
  disabled: boolean
  icon: React.ElementType
}) => (
  <Link
    href={href}
    className={disabled ? 'pointer-events-none text-gray-400' : ''}
    aria-disabled={disabled}
    tabIndex={disabled ? -1 : undefined}
  >
    <Icon />
  </Link>
)

const DogCard = ({ currentDog, id }: { currentDog: Dog; id: number }) => {
  const { dogs, togglePresence } = useDogs()
  const firstDog = id === 0
  const lastDog = id === dogs.length - 1

  const router = useRouter()

  return (
    <article className='relative mx-auto flex h-screen max-w-md flex-col bg-white'>
      <button onClick={() => router.back()}>
        <ArrowLeft className='sm absolute top-4 left-4 h-6 w-6 rounded-full bg-gray-700/50 p-1 text-white/70' />
      </button>
      <Image
        src={currentDog.img}
        alt=''
        height={300}
        width={300}
        className='mx-auto h-100 w-md object-cover'
        priority
      />
      <div className='card-header bg-primary flex justify-between px-3 py-4 text-white'>
        <h1 className='text-4xl font-bold uppercase'>{currentDog.name}</h1>
        <div>
          <p className='mb-0.5 self-center text-xs font-light'>Is present</p>
          <ToggleSwitch
            checked={dogs[id].present}
            onToggle={() => {
              togglePresence(id)
            }}
          />
        </div>
      </div>
      <section className='grid grid-cols-2 gap-y-3 p-3'>
        <DogDetails label='Name' value={currentDog.name} />
        <DogDetails
          label='Owner'
          value={`${currentDog.owner?.name} ${currentDog.owner?.lastName}`}
        />
        <DogDetails label='Breed' value={currentDog.breed} />
        <DogDetails label='Phone' value={currentDog.owner?.phoneNumber} />
        <DogDetails label='Age' value={currentDog.age} />
        <DogDetails label='Email' value='iheartdogs@doggos.com' />
      </section>
      <Description />
      <div className='mt-auto grid grid-cols-5 justify-items-center pb-3'>
        <NavigationLink href='/dog/0' disabled={firstDog} icon={ChevronFirst} />
        <NavigationLink
          href={`/dog/${id - 1}`}
          disabled={firstDog}
          icon={ChevronLeft}
        />
        <p>
          {id + 1} of {dogs.length}
        </p>
        <NavigationLink
          href={`/dog/${id + 1}`}
          disabled={lastDog}
          icon={ChevronRight}
        />
        <NavigationLink
          href={`/dog/${dogs.length - 1}`}
          disabled={lastDog}
          icon={ChevronLast}
        />
      </div>
    </article>
  )
}
export default DogCard
