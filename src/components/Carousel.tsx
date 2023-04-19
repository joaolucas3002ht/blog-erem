'use client';

import Image from 'next/image';
import { useState } from 'react';
// import { useCarousel } from 'use-carousel-hook' ;
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface ColorProps {
   src: string;
}

// { backgroundColor: 'bg-slate-700/80' },
// { backgroundColor: 'bg-purple-700/80' },

export function Carousel() {
   const ClassBg = [
      {
         src: 'https://picsum.photos/640',
      },
      {
         src: 'https://picsum.photos/624',
      },
      {
         src: 'https://picsum.photos/720',
      },
      {
         src: 'https://picsum.photos/756',
      },
      {
         src: 'https://picsum.photos/656',
      },
      {
         src: 'https://picsum.photos/560',
      },
   ];

   const [Previous, setPrevious] = useState<ColorProps[]>([
      ClassBg[0],
      ClassBg[1],
      ClassBg[2],
   ]);
   const [Number, setNumber] = useState<number>(1);
   const [togglePrevious, setTogglePrevious] = useState<boolean>(false);
   const [toggleNext, setToggleNext] = useState<boolean>(false);
   const [toggle, setToggle] = useState<string>('0');

   function CarouselNext(ArrayInicial: ColorProps[], index: number) {
      const ArrayIndex = ArrayInicial.length - 1;

      const Priscipar = index + 1 <= ArrayIndex ? index + 1 : 0;

      const Next = Priscipar + 1 <= ArrayIndex ? Priscipar + 1 : 0;

      setToggle('-100%');
      setToggleNext(true);

      setTimeout(() => {
         setPrevious([
            ArrayInicial[index],
            ArrayInicial[Priscipar],
            ArrayInicial[Next],
         ]);
         setNumber(Priscipar);
         setToggleNext(false);
      }, 400);
   }

   function CarouselPrevious(ArrayInicial: ColorProps[], index: number) {
      const ArrayIndex = ArrayInicial.length - 1;

      const Priscipar = index - 1 >= 0 ? index - 1 : ArrayIndex;

      const Previous = Priscipar - 1 >= 0 ? Priscipar - 1 : ArrayIndex;

      setToggle('100%');
      setTogglePrevious(true);

      setTimeout(() => {
         setPrevious([
            ArrayInicial[Previous],
            ArrayInicial[Priscipar],
            ArrayInicial[index],
         ]);
         setNumber(Priscipar);
         setTogglePrevious(false);
      }, 400);
   }

   return (
      <div className="relative w-[min(100%_,_52rem)] h-[min(56.25vw_,_29.25rem)] mx-auto ">
         <section className="w-[100%] h-[min(56.25vw_,_29.25rem)]  right-1/2 translate-x-1/2 mx-auto rounded-2xl bg-gray-500/90  flex flex-row items-center scroll-m-0 scrollbar-none relative overflow-hidden">
            <div
               className={`min-w-full h-full -left-[100%] absolute top-0  transition-all z-10`}
               style={{
                  left: `${togglePrevious ? '0' : '-100%'}`,
                  transitionDuration: `${togglePrevious ? '300ms' : '0ms'}`,
               }}
            >
               <Image
                  src={Previous[0].src}
                  alt={''}
                  fill
                  className="object-cover min-w-full object-center"
               />
            </div>
            <div
               className={`min-w-full h-full absolute top-0  duration-300 transition-all`}
               style={{
                  left: `${togglePrevious ? toggle : '0'}`,
                  transitionDuration: `${togglePrevious ? '300ms' : '0ms'}`,
               }}
            >
               <Image
                  src={Previous[1].src}
                  alt={''}
                  fill
                  className="object-cover min-w-full object-center"
               />
            </div>
            <div
               className={`min-w-full h-full left-[100%] absolute top-0 z-10`}
               style={{
                  left: `${toggleNext ? '0' : '100%'}`,
                  transitionDuration: `${toggleNext ? '300ms' : '0ms'}`,
               }}
            >
               <Image
                  src={Previous[2].src}
                  alt={''}
                  fill
                  className="object-cover min-w-full object-center"
               />
            </div>
         </section>

         <button
            className="p-1 bg-gray-200/60 rounded-full text-[clamp(1rem_,_3vw_,_1.875rem)] absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
            onClick={() => CarouselPrevious(ClassBg, Number)}
         >
            <BiChevronLeft />
         </button>

         <button
            className="p-1 bg-gray-200/60 rounded-full text-[clamp(1rem_,_3vw_,_1.875rem)] absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
            onClick={() => CarouselNext(ClassBg, Number)}
         >
            <BiChevronRight />
         </button>
      </div>
   );
}

// interface ElementCarocelProps {
//    backgroundColor: string;
// }

// function ElementCarocel({
//    backgroundColor = 'bg-white',
// }: {
//    backgroundColor: string;
// }) {
//    return (
//       <div className={`min-w-full h-full relative ${backgroundColor}`}></div>
//    );
// }

//       <div id="default-carousel" className="relative w-full bg-slate-700" data-carousel="slide">
//     <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="https://picsum.photos/200/300" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-red-700/80" alt="..." />
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="https://picsum.photos/200/300" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-green-700/80" alt="..." />
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="https://picsum.photos/200/300" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-yellow-700/80" alt="..." />
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="https://picsum.photos/200/300" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-slate-700/80" alt="..." />
//         </div>

//         <div className="hidden duration-700 ease-in-out" data-carousel-item>
//             <img src="https://picsum.photos/200/300" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-purple-700/80" alt="..." />
//         </div>
//     </div>

//     <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//         <button type="button" className="w-3 h-3 rounded-full bg-slate-300/80" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-slate-300/80" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-slate-300/80" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-slate-300/80" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
//         <button type="button" className="w-3 h-3 rounded-full bg-slate-300/80" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
//     </div>
//     <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
//             <span className="sr-only">Previous</span>
//         </span>
//     </button>
//     <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//         <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//             <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
//             <span className="sr-only">Next</span>
//         </span>
//     </button>
// </div>

// <div
//    id="controls-carousel"
//    className="relative overflow-hidden  w-full bg-zinc-400"
//    //  data-carousel="static"
// >
//    {/* <!-- Carousel wrapper --> */}
//    <div className="relative h-56  rounded-lg md:h-96 grid grid-cols-5 w-[500%]">
//       {/* <!-- Item 1 --> */}
//       <div
//          className=" duration-700 ease-in-out w-full min-h-full h-full bg-red-700/80"
//          //  data-carousel-item
//       >
//          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
//       </div>
//       {/* <!-- Item 2 --> */}
//       <div
//          className=" duration-700 ease-in-out w-full min-h-full h-full bg-green-700/80"
//          //  data-carousel-item="active"
//       >
//          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
//       </div>
//       {/* <!-- Item 3 --> */}
//       <div
//          className=" duration-700 ease-in-out w-full min-h-full h-full bg-yellow-700/80"
//          //  data-carousel-item
//       >
//          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
//       </div>
//       {/* <!-- Item 4 --> */}
//       <div
//          className=" duration-700 ease-in-out w-full min-h-full h-full bg-slate-700/80"
//          //  data-carousel-item
//       >
//          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
//       </div>
//       {/* <!-- Item 5 --> */}
//       <div
//          className=" duration-700 ease-in-out w-full min-h-full h-full bg-purple-700/80"
//          //  data-carousel-item
//       >
//          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 " />
//       </div>
//    </div>
//    {/* <!-- Slider controls --> */}
//    <button
//       type="button"
//       className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       data-carousel-prev
//    >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//          <svg
//             aria-hidden="true"
//             className="w-6 h-6 text-white dark:text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//          >
//             <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                stroke-width="2"
//                d="M15 19l-7-7 7-7"
//             ></path>
//          </svg>
//          <span className="sr-only">Previous</span>
//       </span>
//    </button>
//    <button
//       type="button"
//       className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//       data-carousel-next
//    >
//       <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//          <svg
//             aria-hidden="true"
//             className="w-6 h-6 text-white dark:text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//          >
//             <path
//                stroke-linecap="round"
//                stroke-linejoin="round"
//                stroke-width="2"
//                d="M9 5l7 7-7 7"
//             ></path>
//          </svg>
//          <span className="sr-only">Next</span>
//       </span>
//    </button>
// </div>
