import Image from 'next/image'
import Link from 'next/link'

const Splash = () => {
  return (
    <main className=''>
      <article className='bg-background flex h-screen flex-col items-center justify-between px-16'>
        <h1 className='mt-24 text-center text-5xl font-bold text-white uppercase [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)]'>
          Welcome to doggy daycare
        </h1>
        <button className='bg-primary cursor-pointer rounded-sm p-2 text-2xl font-bold text-white uppercase shadow-lg'>
          <Link href='/dogs'>Our dogs</Link>
        </button>
        <Image src='/doggy.png' alt='' height={530} width={354} priority />
      </article>
    </main>
  )
}

export default Splash
