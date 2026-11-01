'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}:{book:IBook}) => { 
  const {wishlist , setWishList} = useContext(BooksContext); 
  const handleWishListButton = ()=> { 
    console.log('wishlist is a done ');
     setWishList([...wishlist,book]);
    toast.success(`wish list book :"${book.bookName}"`);
  }
  return (<button 
    onClick={()=>handleWishListButton()} 
   className="rounded-lg bg-[#59C6D2] hover:bg-[#4ab5c1] px-6 py-2.5 text-xs font-semibold text-white shadow-sm transition-all">
          Wishlist
        </button>
           
  );
};

export default WishListButton;