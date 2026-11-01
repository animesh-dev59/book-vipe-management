import { IBook } from '@/types/bookType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooks = ({book}:{book:IBook}) => {
  return (
   <div className=' container mx-auto'>
     <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-gray-100 bg-white my-3 shadow-sm hover:shadow-md transition-shadow w-full max-w-auto">
      {/* Book Cover Container using Next.js Image */}
      <div className="relative flex justify-center items-center rounded-xl bg-gray-100 p-6 w-full sm:w-48 shrink-0 h-48">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-contain drop-shadow-md p-2"
        />
      </div>

      {/* Book Details Information */}
      <div className="flex flex-1 flex-col justify-between w-full">
        <div>
          <h2 className="text-xl font-bold text-gray-900 font-serif">
            {book.bookName}
          </h2>
          <p className="mt-1 text-sm font-medium text-gray-600">
            By : {book.author}
          </p>

          {/* Tags & Publishing Year */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-bold text-gray-800">Tag</span>
            {book.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600"
              >
                #{tag}
              </span>
            ))}
            <div className="ml-auto flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher & Pages */}
          <div className="mt-3 flex flex-wrap gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>Publisher: {book.publisher}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Page {book.totalPages}</span>
            </div>
          </div>
        </div>
                  
        {/* Badges & Button */}
        <div className="mt-4 border-t mb-3 border-gray-100 pt-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-500">
            Category: {book.category}
          </span>
          <span className="rounded-full bg-amber-50 px-4 py-1.5 text-xs font-medium text-amber-600">
            Rating: {book.rating}
          </span>
         <Link href={`/books/${book.bookId}`}>   
            <button
            className="rounded-full bg-emerald-500 px-5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-600 ml-auto"
          >
            View Details
          </button>
         </Link>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ListedBooks;