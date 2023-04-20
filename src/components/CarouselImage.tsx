'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface ColorProps {
   src: string;
}

export function CarouselImage() {
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

