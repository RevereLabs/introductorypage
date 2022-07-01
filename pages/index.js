import Head from 'next/head'
import Image from 'next/image'
import Hero from './sections/Hero'
import Features from './sections/Features'
import Social from './sections/Social'
import CTA from './sections/CTA'
import Process from './sections/Process'

export default function Home() {
  return (
    <div>
      <Head>
          <title>revere labs</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Process/>
      <Features/>
      <Social/>
      <CTA/>
    </div>
  )
}
