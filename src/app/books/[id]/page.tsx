import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/bookType';
import Image from 'next/image';
import React from 'react';
 
interface IBookDetailsPagesProps { 
  params: Promise<{ 
    id:string
  }>;
}   
const getBooks = async (): Promise<IBook[]> => {
 try{ 
   const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booksData.json`,)
  const data = await response.json(); 
  return data;
 }catch(error){ 
  console.error('Enter fetching book data:',error)
  return []
 }
}; 


const BookDetailsPages = async({params}:IBookDetailsPagesProps) => {
 console.log(params,'params is a beuityfull');
  const { id } = await params;  
  const booksData = await getBooks();
  // console.log(booksData,'booksData');
  // console.log(id,'id is a not best.');
  // const post = await (id) 
  const book = booksData.find((book:IBook) => String(book.bookId)  === (id)) as IBook;
{/** 
   const book = booksData.find((book:IBook)=>string(book.bookId === string(id)))
   const book = booksData.find((book:IBook)=>string( book.bookId === Number(id)))
   const book = booksData.find((book:IBook)=>string( Number(book.bookId) === Number(id)))
   const book = booksData.find((book:IBook)=>string( String(book.bookId) === string(id)))

  */}   
   console.log(book,'book is a best time of a  father of your name schools');
  return(
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#F3F3F3] p-8 sm:p-12 rounded-2xl border border-slate-200">

  {/* Left Side: Image Container */}
  <div className="relative h-[650px] w-full max-w-[550px] mx-auto flex items-center justify-center bg-white rounded-xl shadow-md p-6">
    <Image
      src={book.image}
      alt={book.bookName}
      fill
      priority
      className="object-contain drop-shadow-xl p-4"
    />
  </div>

  {/* Right Side: Details Content */}
  <div className="flex flex-col space-y-4">
    
    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
      {book.bookName}
    </h1>

    <p className="text-sm sm:text-base font-medium text-slate-600 border-b border-slate-300 pb-4">
      By : <span className="text-slate-900 font-semibold">{book.author}</span>
    </p>

    <p className="text-sm font-medium text-slate-800 pt-1">
      {book.category}
    </p>

    <div className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
      <span className="font-bold text-slate-900">Review : </span>
      {book.review}
    </div>

    <div className="flex items-center gap-3 pt-3 pb-2 border-b border-slate-300">
      <span className="text-xs font-bold text-slate-900">Tag</span>
      <div className="flex flex-wrap gap-2">
        {book.tags?.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>

    {/* Extra Metadata (Pages, Publisher, Year, Rating) */}
    <div className="grid grid-cols-2 gap-y-3 pt-2 text-xs sm:text-sm text-slate-600">
      <div>Number of Pages:</div>
      <div className="font-semibold text-slate-900">{book.totalPages}</div>

      <div>Publisher:</div>
      <div className="font-semibold text-slate-900">{book.publisher}</div>

      <div>Year of Publishing:</div>
      <div className="font-semibold text-slate-900">{book.yearOfPublishing}</div>

      <div>Rating:</div>
      <div className="font-semibold text-slate-900">{book.rating}</div>
    </div>

    {/* Action Buttons (Read & Wishlist) */}
    <div className="flex items-center gap-4 pt-6">
       <ReadButton book={book}/> 
         
      <WishListButton book={book}/>
      
      
    </div>

  </div>

</div>

     
  );
};

export default BookDetailsPages;