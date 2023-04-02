'use client';
import { SearchHeader } from './SearchHeader';

export  function Header() {
   // await fetch('').catch((e) => console.error(e));

   return (
      <>
         <section className="h-[clamp(3.5rem_,_10vw_,_4.5rem)] w-full relative">
            <div className="absolute grid grid-rows-1 grid-cols-[_auto_,_12%_,_12%_,_12%_] left-0 right-0 w-full h-full">
               <div className="h-full  bg-blue-800"></div>
               <div className="h-full  bg-green-800"></div>
               <div className="h-full  bg-red-700 "></div>
               <div className="h-full  bg-yellow-500"></div>
            </div>
         </section>
         <header className="h-[clamp(3.5rem_,_10vw_,_4.5rem)] w-full bg-black bg-opacity-10 dark:bg-opacity-25 shadow-md backdrop-blur-[1px] fixed top-0 left-0 z-10 flex items-center justify-center">
            <div className="max-w-7xl w-full h-full flex items-center justify-between px-[4%]">
               <div className="">LOGO</div>
               <SearchHeader />
               <div className="">hh</div>
            </div>
         </header>
      </>
   );
}
