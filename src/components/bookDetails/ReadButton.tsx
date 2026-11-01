'use client'
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/bookType';
import React, { useContext } from 'react';
// import { toast } from 'react-toastify';

const ReadButton = ({book}:{book:IBook}) => { 
   
  const {readBooks,setReadBooks} = useContext(BooksContext); 

  // console.log(Books,'BooksProvider is a not best to my help you');
  const handleReadBook = ()=>{ 
    // console.log('Loading ... ');
    setReadBooks([...readBooks,book]);
    alert(`book Is "${book.bookName}"`);

  }
  return (<button   
    onClick={()=>handleReadBook()}
   className="rounded-lg border border-slate-400 px-8 py-2.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 transition-all">
        Read
      </button>
  );
};

export default ReadButton;