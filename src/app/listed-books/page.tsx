'use client'
import ListedBooks from '@/components/ListedBooks/ListedBooks';
// import BookCard from '@/components/shared/BookCard';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';

const ListedPage = () => { 
  const {readBooks,wishlist} = useContext(BooksContext);
  // console.log(readBooks,'readbooks');
  // console.log(wishlist,'wishList books');
  return ( <div className='container mx-auto py-12'> 
   <h2 className='text-4xl rounded-4xl font-bold text-center bg-amber-200 py-16 '>Listed Books</h2>
   {/* name of each tab group should be unique */}
<div className="tabs tabs-lift">
  <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
  <div className="tab-content bg-base-100 border-base-300 p-6">
    {
      readBooks.length > 0 ?( readBooks.map((book:IBook)=>{ 
        return( <ListedBooks key={book.bookId} book={book} />)
      }) ) : <p className='text-center text-lg font-semibold'>No readBooks found</p>
    }
  </div>

  <input type="radio" name="my_tabs_3" className="tab" aria-label={` WishList Books (${wishlist.length})`} defaultChecked />
  <div className="tab-content bg-base-100 border-base-300 p-6"> {
      wishlist.length > 0 ? wishlist.map((book:IBook)=>{ 
        return( <ListedBooks key={book.bookId} book={book}/>)
      }): <p className='text-center text-lg font-semibold'>No wishListBooks found</p>
    }</div>
</div>
  </div>
  );
};

export default ListedPage;