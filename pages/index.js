import Head from 'next/head'
import Image from 'next/image'
import Hero from './sections/Hero'
import Features from './sections/Features'
export default function Home() {
  return (
    <div>
      <Head>
          <title>revere labs</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Features/>
    </div>
  )
}
