import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header';
import Mint from '../components/Mint';
import { useEffect, useState } from 'react';
import { isMobileViewHook } from '../CustomHooks/isMobileViewHook';



export default function Home() {


  const [isVaultPageImageMobileVisible, setVaultPageImageMobileVisible] = useState(false)
  const [isMobileVideo, setIsMobileVideo] = useState(false)

  console.log("isVaultPageImageMobileVisible ", isVaultPageImageMobileVisible)


// jab yh =>  isVaultPageImageMobileVisible
// true hogi, iska matlab mbl p khuli v hai web, tw alag classes ya jsx laga do conditionally

  useEffect(() => {
    isMobileViewHook(setVaultPageImageMobileVisible, 426)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  
  useEffect(() => {
    isMobileViewHook(setIsMobileVideo, 551);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen justify-center items-center sm:bg-slate-800 md:bg-black ${!isVaultPageImageMobileVisible ? `bg-[url("/assets/background.gif")]` : "bg-simple-color"} bg-center bg-cover`}>
      <Head>
        <title>Stoned Rock NFT</title>
        <meta name="description" content="5000 3D Stoned Rock NFT's" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className='w-full px-5 mt-12'>
      <Mint/>
      </section>      
    </div>
  )
}
