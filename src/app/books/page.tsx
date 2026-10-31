// import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation';
// import React from 'react';
//   const getBooks = async () => { 
//     const response = await fetch('http://localhost:3000/booksData.json');
//     const data = await response.json();
//     return data;
//   } 
//   export interface IBook {
//   bookId: number;
//   bookName: string;
//   author: string;
//   image: string;
//   review: string;
//   totalPages: number;
//   rating: number;
//   category: string;
//   tags: string[];
//   publisher: string;
//   yearOfPublishing: number;
// }

// const Books = async() => { 
// const booksData = await getBooks();
// console.log(booksData,'booksData');
//   return (  <div>
//       <h3 className="py-8 bg-slate-400">Books Pages  </h3> 
//       { 
//         booksData.map((book:IBook,ind:number)=>{ 
//           return <div key={ind} book={book}> 
//           <h3>{book.bookName}</h3>
//            <h6 className='text-bold py-2 text-red-900'>{book.author}</h6> </div>
//         })
//       }
//     </div>
//   );
// };

// export default Books; 

import React from 'react';
// import Image from 'next/image';
// import { Star, BookOpen, Calendar, Tag } from 'lucide-react'; // optional icon framework or custom HTML SVG
import { IBook } from '@/types/bookType';
import BookCard from '@/components/shared/BookCard';



const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch('http://localhost:3000/booksData.json', {
    cache: 'no-store', // প্রয়োজন অনুযায়ী revalidate বা cache নির্ধারণ করতে পারেন
  });
  if (!response.ok) {
    throw new Error('Failed to fetch books data');
  }
  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100 sm:px-6 lg:px-8 container mx-auto my-4 rounded-4xl">
      {/* Page Header */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 sm:text-5xl">
          All Available Books
        </h1>
        <p className="mt-3 text-base text-slate-400 sm:text-lg">
          Explore our handpicked library collection with ratings, tags, and rich reviews.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book:IBook) => (
         <BookCard book={book} key={book.bookId}/>
        ))}
      </div>
    </section>
  );
};

export default Books;