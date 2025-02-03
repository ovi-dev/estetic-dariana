import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='container text-center mx-auto py-8 '>
       <h1 className=' text-lg font-semibold mb-4'> Estetica Datiz</h1>

      <div className=' flex justify-center mt-2 space-x-4'>

      <Link className='m-2 p-2 rounded-3xl transition-colors hover:bg-blue-600 hover:text-white'
      href={'https://www.facebook.com/darianaortiz22'}>
      <FaFacebook className=' size-[30px]'/>
      </Link>
      <Link className='m-2 p-2 rounded-3xl transition-colors hover:bg-red-400 hover:text-white'
      href={'https://www.instagram.com/estetica_datiz/?igsh=MXg0emdoZGhpcTQzcA%3D%3D#'}>
      <IoLogoInstagram className='size-[30px]'
      
      />
      </Link>
      <Link className='m-2 p-2 rounded-xl transition-colors hover:bg-black hover:text-white'
      href={'https://www.tiktok.com/@estetica_datiz'}>
      <AiFillTikTok className='size-[30px]'
      />
      </Link>
      </div>


    </footer>
  )
}

export default Footer



