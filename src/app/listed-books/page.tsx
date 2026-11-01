'use client'
import { BooksContext } from '@/context/BooksContext';
import React, { useContext } from 'react';

const ListedPage = () => { 
  const {readBooks,wishlist} = useContext(BooksContext);
  console.log(readBooks,'readbooks');
  console.log(wishlist,'wishList books');
  return (
    <div>
      <h3 className='text-4xl text-center py-17 rounded-4xl container mx-auto bg-red-500 my-4'>listed Pages all for a  dynamick pages</h3>
    </div>
  );
};

export default ListedPage;