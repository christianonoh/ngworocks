import Footer from '@/components/footer'
import Header from '@/components/header'
import WantATour from '@/components/shared/WantATour'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Header isDraftMode={false} />
      <main className='relative -mb-24 flex h-screen items-center justify-center lg:max-h-[767px]'>
        <div className='relative flex flex-col items-center'>
          <h1 className='text-warning text-3xl'> Page not found</h1>
          <p className='text-accent-dark/40 text-center text-[12rem] font-bold'>
            404
          </p>
          <Link
            href='/blog'
            className='w-max rounded-full border border-dark px-12 py-2 font-semibold'
          >
            Return to homepage
          </Link>

          <Image
            src='/images/birds.svg'
            width={80}
            height={80}
            alt='Not found'
            className='absolute -right-20 -top-full lg:-top-20 '
          />
        </div>
        <Image
          src='/images/404.svg'
          className='absolute left-0 top-20'
          width={400}
          height={400}
          alt='Not found'
        />
      </main>
      <WantATour />
      <Footer />
    </>
  )
}
