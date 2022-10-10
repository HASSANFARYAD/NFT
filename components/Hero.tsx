import Navbar from '../components/Navbar'

import { useWallet } from '../services/providers/MintbaseWalletContext'

import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  const { wallet, isConnected, details } = useWallet()
  return (
    <>
      <div
        className="w-full py-24 px-6 bg-cover bg-no-repeat bg-center relative z-10"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/closeup-golden-bitcoin-pink-blue-reflective-surface-histogram_1268-19911.jpg?w=740&t=st=1665382662~exp=1665383262~hmac=147e93be43c13d74c1bcdb8b69df185c932cebf6df4becfaa4c02f11f326b83d')",
        }}
      >
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-xl leading-tight md:text-3xl text-center text-gray-100 mb-3">
            Build everything you imagine
          </h1>
          <p className="text-md md:text-lg text-center text-white ">
            Cheap, scalable and flexible infrastructure for your NFT project
          </p>

          <a
            href="https://docs.mintbase.io/dev/getting-started"
            className="mt-6 inline-block bg-white text-black no-underline px-4 py-3 hover:shadow-2xl"
          >
            Learn how
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero
