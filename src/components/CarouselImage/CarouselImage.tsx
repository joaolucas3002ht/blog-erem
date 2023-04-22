'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface ColorProp {
   CarouselImage: CarouselImagePros[];
}

interface CarouselImagePros {
   src: string;
   alt: string;
}

export function CarouselImage({ CarouselImage }: ColorProp) {
   const InitialValue = CarouselImage.length - 1;

   const [Previous, setPrevious] = useState<CarouselImagePros[]>([
      CarouselImage[InitialValue - 1],
      CarouselImage[InitialValue],
      CarouselImage[0],
   ]);

   const [Number, setNumber] = useState<number>(InitialValue);
   const [togglePrevious, setTogglePrevious] = useState<string>('-100%');
   const [toggleNext, setToggleNext] = useState<string>('100%');
   const [toggleMain, setToggleMain] = useState<string>('0');
   const [toggle, setToggle] = useState<boolean>(false);
   const [TimerValue, setTimerValue] = useState<number>(1000);

   function CarouselNext(
      ArrayInicial: CarouselImagePros[],
      index: number,
      timerValue: number,
   ) {
      const ArrayIndex = ArrayInicial.length - 1;

      const Main = index + 1 <= ArrayIndex ? index + 1 : 0;

      const Next = Main + 1 <= ArrayIndex ? Main + 1 : 0;

      setTimerValue(timerValue);
      setToggle(true);
      setTogglePrevious('-100%');
      setToggleMain('-100%');
      setToggleNext('0');

      setTimeout(() => {
         setPrevious([
            ArrayInicial[index],
            ArrayInicial[Main],
            ArrayInicial[Next],
         ]);
         setNumber(Main);
         setToggle(false);
      }, timerValue + 100);
   }

   function CarouselPrevious(
      ArrayInicial: CarouselImagePros[],
      index: number,
      timerValue: number,
   ) {
      const ArrayIndex = ArrayInicial.length - 1;

      const Main = index - 1 >= 0 ? index - 1 : ArrayIndex;

      const Previous = Main - 1 >= 0 ? Main - 1 : ArrayIndex;

      setTimerValue(timerValue);
      setToggle(true);

      setTogglePrevious('0');
      setToggleMain('100%');
      setToggleNext('100%');

      setTimeout(() => {
         setPrevious([
            ArrayInicial[Previous],
            ArrayInicial[Main],
            ArrayInicial[index],
         ]);
         setNumber(Main);
         setToggle(false);
      }, timerValue + 100);
   }

   // height={468}
   // width={832} Jl37627457

   return (
      <div className="relative w-[min(100%_,_52rem)] h-[min(56.25vw_,_29.25rem)] mx-auto ">
         <section className="w-[100%] h-[min(56.25vw_,_29.25rem)]  right-1/2 translate-x-1/2 mx-auto rounded-2xl bg-gray-500/90  flex flex-row items-center scroll-m-0 scrollbar-none relative overflow-hidden">
            {CarouselImage.length > 3 ? (
               <>
                  <div
                     className={`min-w-full h-full -left-[100%] absolute top-0  transition-all z-10 overflow-hidden`}
                     style={{
                        left: `${toggle ? togglePrevious : '-100%'}`,
                        transitionDuration: `${
                           toggle ? `${TimerValue}ms` : '0ms'
                        }`,
                     }}
                  >
                     <Image
                        src={Previous[0].src}
                        alt={Previous[0].alt}
                        fill
                        className="object-cover min-h-full min-w-full object-center"
                     />
                  </div>
                  <div
                     className={`min-w-full h-full absolute top-0  duration-300 transition-all  overflow-hidden`}
                     style={{
                        left: `${toggle ? toggleMain : '0'}`,
                        transitionDuration: `${
                           toggle ? `${TimerValue}ms` : '0ms'
                        }`,
                     }}
                  >
                     <Image
                        src={Previous[1].src}
                        alt={Previous[1].alt}
                        fill
                        className="object-cover min-h-full min-w-full object-center"
                     />
                  </div>
                  <div
                     className={`min-w-full h-full left-[100%] absolute top-0 z-10  overflow-hidden`}
                     style={{
                        left: `${toggle ? toggleNext : '100%'}`,
                        transitionDuration: `${
                           toggle ? `${TimerValue}ms` : '0ms'
                        }`,
                     }}
                  >
                     <Image
                        src={Previous[2].src}
                        alt={Previous[2].alt}
                        fill
                        className="object-cover min-h-full min-w-full object-center"
                     />
                  </div>
               </>
            ) : (
               <div className="h-full w-full text-[clamp(1rem_,_6vw_,_3rem)] flex justify-center items-center capitalize font-semibold dark:text-gray-900 ">
                  sem imagens identificadas
               </div>
            )}
         </section>

         <button
            className="p-1 bg-gray-300/60 rounded-full text-[clamp(1.5rem_,_3vw_,_2rem)] absolute top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 shadow-md"
            onClick={() =>
               toggle ? '' : CarouselPrevious(CarouselImage, Number, 500)
            }
         >
            <BiChevronLeft />
         </button>

         <button
            className="p-1 bg-gray-300/60 rounded-full text-[clamp(1.5rem_,_3vw_,_2rem)] absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 shadow-md"
            onClick={() =>
               toggle ? '' : CarouselNext(CarouselImage, Number, 500)
            }
         >
            <BiChevronRight />
         </button>
      </div>
   );
}
