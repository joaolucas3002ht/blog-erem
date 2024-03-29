import React from 'react';

export function CardLoading() {
   return (
      <div className="h-[clamp(172px_,_33vw_,_270px)] w-[clamp(128px_,_29vw_,_294px)]  rounded-lg  relative  animate-pulse duration-500">
         <div className="w-full h-[clamp(86px_,_18.5vw_,_176px)] rounded-lg  bg-gray-400 dark:bg-gray-500/90 flex justify-center items-center relative" />
         <section className=" pt-2  h-min flex flex-col gap-1">
            <div className="h-[clamp(1.1875rem_,_2vw_,_1.5625rem)] w-full bg-gray-400 dark:bg-gray-500/90 rounded-full" />
            <div className="h-[clamp(1.1875rem_,_2vw_,_1.5625rem)] w-full bg-gray-400 dark:bg-gray-500/90 rounded-full " />
         </section>
         <div className=" w-full h-[clamp(.75rem_,_1.5vw_,_1rem)] rounded-xl absolute bottom-1 bg-gray-400 dark:bg-gray-500/90" />
      </div>
   );
}
