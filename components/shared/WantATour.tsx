import Image from 'next/image'
import wantToTour from '@/public/images/wantatourbg.png'
import Link from 'next/link'
import { BackIcon } from '../icons'

const WantATour = () => {
  return (
    <section className='mx-auto w-full max-w-7xl px-5 py-24 sm:px-10'>
      <div className='relative flex h-[519px] flex-col items-center justify-center rounded-3xl border px-10 py-16'>
        <div className='absolute left-0 top-0 z-0 h-full w-full rounded-3xl bg-gradient-to-b from-dark/50 to-dark/90' />
        <Image
          src={wantToTour}
          alt='Want to tour?'
          className='absolute right-0 top-0 -z-10 h-full w-full rounded-3xl object-cover'
        />
        <div className='z-10 flex w-max flex-col items-center justify-center px-5 text-white'>
          <h2 className='mb-4 text-3xl font-bold sm:text-6xl md:text-7xl'>
            Want to tour?
          </h2>
          <p className='mb-8 max-w-xs text-center text-base md:max-w-lg md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <Link
            href='/contact'
            className='rounded-lg border border-dark bg-dark px-4 py-2 font-semibold text-white transition-all duration-200 ease-in-out hover:bg-light hover:text-dark'
          >
            Get in touch
            <BackIcon className='ml-2 inline-block rotate-180 transform' />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WantATour
