// 'use client'
// import ListedBooks from '@/components/ListedBooks/ListedBooks';
// // import BookCard from '@/components/shared/BookCard';
// import { BooksContext } from '@/context/BooksContext';
// import { IBook } from '@/types/bookType';
// import React, { useContext, useState } from 'react';

// const ListedPage = () => { 
//   const {readBooks,wishlist} = useContext(BooksContext); 
//   const [sortBy , setSortBy] = useState<'rating' | 'pages' | 'year'>('rating'); 
//   const sortBooks = ((books:IBook[])=>{  
//     const sortedBooks = [...books]; 
//     if(sortBy === 'rating'){ 
//       sortedBooks.sort((a,b) => b.rating - a.rating)
//     } else if( sortBy === 'pages') { 
//        sortedBooks.sort((a,b)=> b.totalPages - a.totalPages)
//     } else if( sortBy ==='year') { 
//        sortedBooks.sort((a,b)=> b.yearOfPublishing - a.yearOfPublishing);
//     }

//   })
//   const sortedReadBooks =     sortBooks(readBooks);
//   const sortedWishlistBooks =  sortBooks(wishlist)
//   // console.log(readBooks,'readbooks');
//   // console.log(wishlist,'wishList books');
//   return ( <div className='container mx-auto py-12'> 
//    <h2 className='text-4xl rounded-4xl font-bold text-center bg-amber-200 py-16 '>Listed Books</h2>


//      <div className='text-center my-3'>  
//       <select   
//       value={'SortBy'}
//       onChange={(e)=>setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
//        defaultValue="Pick a Runtime" 
//        className="select select-success">
//   <option disabled={true}>Sort By</option>
//   <option value={'rating'}>Rating</option>
//   <option value={'pages'}>Number of Pages</option>
//   <option value={'year'}>Publisher Yerar</option>
// </select>
//      </div>
//    {/* name of each tab group should be unique */}
// <div className="tabs tabs-lift">
//   <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
//   <div className="tab-content bg-base-100 border-base-300 p-6">
//     {
//       sortedReadBooks.length > 0 ?( sortedReadBooks.map((book:IBook)=>{ 
//         return( <ListedBooks key={book.bookId} book={book} />)
//       }) ) : <p className='text-center text-lg font-semibold'>No readBooks found</p>
//     }
//   </div>

//   <input type="radio" name="my_tabs_3" className="tab" aria-label={` WishList Books (${wishlist.length})`} defaultChecked />
//   <div className="tab-content bg-base-100 border-base-300 p-6"> {
// sortedWishlistBooks.length > 0 ? sortedWishlistBooks.map((book:IBook)=>{ 
//         return( <ListedBooks key={book.bookId} book={book}/>)
//       }): <p className='text-center text-lg font-semibold'>No wishListBooks found</p>
//     }</div>
// </div>
//   </div>
//   );
// };

// export default ListedPage;  



'use client';
import ListedBooks from '@/components/ListedBooks/ListedBooks';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import React, { useContext, useState } from 'react';

const ListedPage = () => { 
  const { readBooks = [], wishlist = [] } = useContext(BooksContext); 
  const [sortBy, setSortBy] = useState<'rating' | 'pages' | 'year'>('rating'); 

  const sortBooks = (books: IBook[] = []) => {  
    const sortedBooks = [...books]; 
    if (sortBy === 'rating') { 
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'pages') { 
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === 'year') { 
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks; // ১. return যুক্ত করা হয়েছে
  };

  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlistBooks = sortBooks(wishlist);

  return ( 
    <div className='container mx-auto py-12'> 
      <h2 className='text-4xl rounded-4xl font-bold text-center bg-amber-200 py-16'>Listed Books</h2>

      <div className='text-center my-3'>   
        <select   
          value={sortBy} // ২. value ঠিক করা হয়েছে
          onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
          className="select select-success"
        >
          <option value="rating" disabled>Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Publisher Year</option>
        </select>
      </div>

      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readBooks.length})`} />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: IBook) => <ListedBooks key={book.bookId} book={book} />)
          ) : (
            <p className='text-center text-lg font-semibold'>No read books found</p>
          )}
        </div>

        <input type="radio" name="my_tabs_3" className="tab" aria-label={`Wishlist Books (${wishlist.length})`} defaultChecked />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlistBooks.length > 0 ? (
            sortedWishlistBooks.map((book: IBook) => <ListedBooks key={book.bookId} book={book} />)
          ) : (
            <p className='text-center text-lg font-semibold'>No wishlist books found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedPage;