'use client'
import { IBook } from '@/types/bookType';
import React, { createContext, ReactNode, SetStateAction, useState } from 'react';
 interface IBooksContext { 
  readBooks : IBook[],
  setReadBooks:React.Dispatch<SetStateAction<IBook[]>>,
  wishlist : IBook[],
  setWishList:React.Dispatch<SetStateAction<IBook[]>>,
}
export const BooksContext = createContext<IBooksContext>({
  readBooks: [],
  setReadBooks: ()=>{},
  wishlist:[],
  setWishList: () => {}
}); 

const BooksProvider = ({children}:{children:ReactNode}) => { 
  const [readBooks , setReadBooks] = useState<IBook[]>([]);
  const [wishlist,setWishList] = useState<IBook[]>([]);
  const shreeData = { 
    readBooks,setReadBooks,wishlist,setWishList
  }
  return (<BooksContext.Provider value={shreeData}> {children}</BooksContext.Provider>
  );
};

export default BooksProvider;