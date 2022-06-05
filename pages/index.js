import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div  className="min-h-screen overflow-hidden">
      <Head>
        <title>Shreenidhi Batavi</title>
        <meta name="Shreenidhi Batavi" content="Full stack Developer" />
      </Head>
     <Navbar/>
     <Hero/>
     
    </div>
  )
}
