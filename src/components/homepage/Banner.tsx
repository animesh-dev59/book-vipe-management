// import Image from 'next/image';
// import React from 'react';
// import BannerLogo from '@/assets/hero_img.jpg';
// import { Bentham } from 'next/font/google';

// const Banner = () => {
//   return (
  
//       <div className='grid grid-cols-2 gap-4 items-center bg-slate-200 p-9 container mx-auto my-3 rounded-3xl'>
//       <div className='text-center'>
//          <h2 className='text-5xl font-bold my-3'>Books to freshen up your bookshelf</h2>
//          <button className='btn  btn-success '>View The List</button>
//       </div>
//       <div>
//         <Image src={BannerLogo} alt='BannerLogo'/>
//       </div>
//     </div>

//   );
// };

// export default Banner;
import Image from 'next/image';
import React from 'react';
import BannerLogo from '@/assets/hero_img.jpg';

const Banner = () => {
  return (
    <section className="container mx-auto px-4 my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 p-8 sm:p-12 lg:p-16 rounded-3xl shadow-2xl border border-slate-800 text-white">
        
        {/* Left Content Area */}
        <div className="text-center lg:text-left space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Featured Collection
          </span>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Books to freshen up your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">bookshelf</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-lg mx-auto lg:mx-0">
            Explore our handpicked selection of bestselling books, timeless classics, and new arrivals to elevate your reading experience.
          </p>

          <div>
            <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 active:scale-95">
              View The List
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-md h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
            <Image 
              src={BannerLogo} 
              alt='Banner Logo'
              fill
              priority
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;