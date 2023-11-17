import Image from 'next/image'
import Hero from './components/Home/Hero'
import Features from './components/Home/Features'
import Works from './components/Home/Works'
import Explore from './components/Home/Explore'
import Organ from './components/Home/Organisation'

export default function Home() {
  return (
    <main className="">
     <Hero />
     <Organ />
     <Features />
     <Works />
     <Explore />
    </main>
  )
}
