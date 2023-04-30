import React from 'react'
import Image from 'next/image'
import Opensea from '/public/assets/icons/opensea.png'
import Logo from '/public/assets/icons/logow.png'
import EtherScan from '/public/assets/icons/etherscan.png'
import Twitter from '/public/assets/icons/twitterw.png'
import Discord from '/public/assets/icons/dicordw.png'

function Header() {

  return (
    <div className='absolute top-0 flex items-center justify-between w-full h-20 p-5'>
    <div className='flex items-center justify-center mt-12'>
    <Image src={Logo} width={300} height={300} alt={'Opensea'}/>
    </div>

    <div className='flex items-center justify-center gap-2'>
    <a className='social' href='https://opensea.io/collection/stonedrock' target={'_blank'} rel='noreferrer'>
    <Image src={Opensea} width={30} height={30} alt={'Opensea'}/>
    </a>

    <a className='social' href='https://etherscan.io/address/0x824ce596d48ba8f28b588d815e2a15ba5651fcac' target={'_blank'} rel='noreferrer'>
    <Image src={EtherScan} width={30} height={30} alt={'EtherScan'}/>
    </a>
    </div>
    </div>
  )
}

export default Header