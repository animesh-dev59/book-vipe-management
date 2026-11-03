import React from 'react';
import Image from 'next/image';
import { IBook } from '@/types/bookType';
import Link from 'next/link';

const BookCard = ({book}:{book:IBook}) => {
  return (
     <article
            key={book.bookId}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
          >
            {/* Book Banner/Image */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-800">
              <Image
                src={book.image}
                alt={book.bookName}
                fill
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-400 backdrop-blur-md border border-cyan-500/30">
                {book.category}
              </span>
            </div>

            {/* Content Container */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {book.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-md bg-cyan-950/60 px-2 py-0.5 text-xs font-medium text-cyan-300 border border-cyan-800/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Book Title */}
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400 line-clamp-1">
                  {book.bookName}
                </h3>

                {/* Author Name */}
                <p className="mt-1 text-sm font-medium text-slate-400">
                  By <span className="text-slate-200">{book.author}</span>
                </p>

                {/* Review / Description excerpt */}
                <p className="mt-3 text-xs leading-relaxed text-slate-400 line-clamp-2">
                  {book.review}
                </p>
              </div>

              {/* Metadata Footer */}
              <div className="mt-6 border-t border-slate-800/80 pt-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1 text-amber-400 font-semibold">
                    ⭐ <span>{book.rating.toFixed(1)}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    📖 <span>{book.totalPages} Pages</span>
                  </div>

                  <div className="flex items-center gap-1">
                    🗓️ <span>{book.yearOfPublishing}</span>
                  </div>
                </div>

                {/* Details Button */}
                <Link href={`/books/${book.bookId}`}> 
                <button className="mt-4 w-full rounded-xl  from-cyan-500 to-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/25 active:scale-95">
                  View Book Details
                </button> 
                </Link>
              </div>
            </div>
          </article>
  );
};

export default BookCard;