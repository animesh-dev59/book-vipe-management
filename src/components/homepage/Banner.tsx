import Image from 'next/image';
import React from 'react';
import BannerLogo from '@/assets/hero_img.jpg';
import { Bentham } from 'next/font/google';

const Banner = () => {
  return (
  
      <div className='grid grid-cols-2 gap-4 items-center bg-slate-200 p-9 container mx-auto my-3 rounded-3xl'>
      <div className='text-center'>
         <h2 className='text-5xl font-bold my-3'>Books to freshen up your bookshelf</h2>
         <button className='btn  btn-success '>View The List</button>
      </div>
      <div>
        <Image src={BannerLogo} alt='BannerLogo'/>
      </div>
    </div>

  );
};

export default Banner;