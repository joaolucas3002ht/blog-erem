
'use client';

import { ComponentProps, useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

interface ColorProp {
   CarouselImage: CarouselImagePros[];
}

interface CarouselImagePros {
   src: string;
   alt: string;
}

export function CarouselImage({ CarouselImage }: ColorProp) {

   const PrevArrow = ({className = '', ...props}:ComponentProps<"button">) => (
      <button className={`relative z-10 before:content-none before:hidden ${className}`} {...props}>
         <BiChevronLeft className='absolute top-1/2 -translate-y-1/2 left-4 z-0 h-8 w-8 text-slate-900 bg-slate-100/70 hover:bg-slate-100/90 rounded-full text-[clamp(1.5rem_,_3vw_,_2rem)] shadow-md'/>
      </button>
      )

   const NextArrow = ({className = '', ...props}:ComponentProps<"button">) => (
      <button className={`relative z-10 before:content-none before:hidden ${className}`} {...props}>
         <BiChevronRight className='absolute top-1/2 -translate-y-1/2 -left-7 z-0 h-8 w-8 text-slate-900 bg-slate-100/70 hover:bg-slate-100/90 rounded-full text-[clamp(1.5rem_,_3vw_,_2rem)] shadow-md'/>
      </button>
      )

   const settings = {
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4500,
      pauseOnDotsHover: true,
      nextArrow: (<NextArrow />),
      prevArrow: (<PrevArrow />),
      };

   return (
      <div className="relative w-full h-fit aspect-video mx-auto">
         <section className="aspect-video">
            <Slider
               {...settings}
               pauseOnHover
               infinite
               slidesPerRow={1}
               slidesToScroll={1}
               autoplay
               cssEase="linear"
            >
               {CarouselImage.length > 0 ? (
                  CarouselImage?.map((car, id) => (
                     <div
                        className={`min-h-full h-full aspect-video overflow-hidden rounded-2xl bg-gray-500/90`}
                        key={id}
                     >
                        <img src={car.src} alt={car.alt} title={car?.alt} className=" w-full h-full aspect-video object-cover object-center"/>
                     </div>
                  ))
               ) : (
                  [0,0,0,0].map((e,id)=>
                     <div
                  key={id}
               >
                  <div
                  className={`h-full aspect-video overflow-hidden rounded-2xl bg-gray-500/90 flex items-center justify-center `}
                  key={id}
               >
                  sem imagens identificadas</div></div>)

               )}
            </Slider>
         </section>

         {/* <div
               className={`min-w-full h-full -left-[100%] absolute top-0  transition-all z-10 overflow-hidden`}
               style={{
                  left: `${toggle ? togglePrevious : '-100%'}`,
                  transitionDuration: `${
                     toggle ? `${TimerValue}ms` : '0ms'
                  }`,
               }}
            >
               {Carousel[0].src ? (
                  <Image
                     src={Carousel[0].src}
                     alt={Carousel[0].alt}
                     fill
                     className="object-cover min-h-full min-w-full object-center"
                  />
               ) : (
                  <></>
               )}
            </div> */}

         {/* <div
            className={`min-w-full h-full left-[100%] absolute top-0 z-10  overflow-hidden`}
            style={{
               left: `${toggle ? toggleNext : '100%'}`,
               transitionDuration: `${
                  toggle ? `${TimerValue}ms` : '0ms'
               }`,
            }}
         >
            {Carousel[2].src ? (
               <Image
                  src={Carousel[2].src}
                  alt={Carousel[2].alt}
                  fill
                  className="object-cover min-h-full min-w-full object-center"
               />
            ) : (
               <></>
            )}
         </div> */}
      </div>
   );
}

// 'use client';

// import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
// import Image from 'next/image';
// import { useCallback, useEffect, useState } from 'react';
// import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

// interface ColorProp {
//    CarouselImage: CarouselImagePros[];
// }

// interface CarouselImagePros {
//    src: string;
//    alt: string;
// }

// export function CarouselImage({ CarouselImage }: ColorProp) {
//    const InitialValue = CarouselImage.length - 1;
//    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

//    const [Carousel, setCarousel] = useState<CarouselImagePros[]>([
//       CarouselImage[InitialValue - 1 >= 0 ? InitialValue - 1 : 0],
//       CarouselImage[InitialValue],
//       CarouselImage[0],
//    ]);

//    const [Number, setNumber] = useState<number>(InitialValue);
//    const [togglePrevious, setTogglePrevious] = useState<string>('-100%');
//    const [toggleNext, setToggleNext] = useState<string>('100%');
//    const [toggleMain, setToggleMain] = useState<string>('0');
//    const [toggle, setToggle] = useState<boolean>(false);
//    const [TimerValue, setTimerValue] = useState<number>(1000);

//    function editValueCarousel(
//       ArrayInitial: CarouselImagePros[],
//       timerValue: number,
//       Previous: number,
//       Main: number,
//       Next: number,
//    ) {
//       // setTimerValue(timerValue);
//       // setToggle(true);
//       const reset = { src: '', alt: '' };

//       setTimeout(
//          () => setCarousel([reset, ArrayInitial[Main], reset]),
//          timerValue + 98,
//       );
//       setTimeout(() => {
//          setCarousel([
//             ArrayInitial[Previous],
//             ArrayInitial[Main],
//             ArrayInitial[Next],
//          ]);
//          // setNumber(Main);
//          // setToggle(false);
//       }, timerValue + 100);
//    }

//    function CarouselNext(
//       ArrayInitial: CarouselImagePros[],
//       index: number,
//       timerValue: number,
//    ) {
//       const ArrayIndex = ArrayInitial.length - 1;

//       const Main = index + 1 <= ArrayIndex ? index + 1 : 0;

//       const Next = Main + 1 <= ArrayIndex ? Main + 1 : 0;

//       // setTogglePrevious('-100%');
//       // setToggleMain('-100%');
//       // setToggleNext('0');

//       editValueCarousel(ArrayInitial, timerValue, index, Main, Next);
//    }

//    function CarouselPrevious(
//       ArrayInitial: CarouselImagePros[],
//       index: number,
//       timerValue: number,
//    ) {
//       const ArrayIndex = ArrayInitial.length - 1;

//       const Main = index - 1 >= 0 ? index - 1 : ArrayIndex;

//       const Previous = Main - 1 >= 0 ? Main - 1 : ArrayIndex;

//       // setTogglePrevious('0');
//       // setToggleMain('100%');
//       // setToggleNext('100%');

//       editValueCarousel(ArrayInitial, timerValue, Previous, Main, index);
//    }

//    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
//    const [selectedIndex, setSelectedIndex] = useState(0);
//    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

//    const scrollPrev = useCallback(
//       () => emblaApi && emblaApi?.scrollPrev?.(),
//       [emblaApi],
//    );

//    const scrollNext = useCallback(
//       () => emblaApi && emblaApi?.scrollNext?.(),
//       [emblaApi],
//    );

//    const scrollTo = useCallback(
//       (index: number) => emblaApi && emblaApi?.scrollTo?.(index),
//       [emblaApi],
//    );

//    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
//       setScrollSnaps(emblaApi.scrollSnapList());
//    }, []);

//    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
//       setSelectedIndex(emblaApi.selectedScrollSnap());
//       setPrevBtnDisabled(!emblaApi.canScrollPrev());
//       setNextBtnDisabled(!emblaApi.canScrollNext());
//    }, []);

//    useEffect(() => {
//       if (!emblaApi) return;

//       onInit(emblaApi);
//       onSelect(emblaApi);
//       emblaApi.on('reInit', onInit);
//       emblaApi.on('reInit', onSelect);
//       emblaApi.on('select', onSelect);
//    }, [emblaApi, onInit, onSelect]);

//    return (
//       <div className="p-6 w-[min(100%_,_52rem)]">
//          <div className="relative h-auto">
//             <section
//                ref={emblaRef}
//                className=" flex"
//                style={{
//                   touchAction: 'pan-y',
//                   backfaceVisibility: 'hidden',
//                   marginLeft: 'calc(1rem * -1)',
//                }}
//             >
//                {CarouselImage?.map((Cal, i) => (
//                   <div
//                      key={i}
//                      className={` rounded-2xl bg-gray-500/90`}
//                      style={{ flex: '0 0 100%' }}
//                   >
//                      {Cal.src && (
//                         <Image
//                            src={Cal.src}
//                            alt={Cal.alt}
//                            fill
//                            className="object-cover  aspect-video h-[19rem] block object-center"
//                         />
//                      )}
//                   </div>
//                ))}
//                {/* : ( */}
//                {/* <div className="h-full w-full text-[clamp(1rem_,_6vw_,_3rem)] flex justify-center items-center capitalize font-semibold dark:text-gray-900 ">
//                      sem imagens identificadas
//                   </div>
//                )} */}
//             </section>
//          </div>
//          <button
//             className="p-1 bg-gray-300/60 cursor-pointer rounded-full text-[clamp(1.5rem_,_3vw_,_2rem)] absolute top-1/2 left-0 -translate-x-1/3 -translate-y-1/2 shadow-md"
//             onClick={scrollPrev}
//             disabled={prevBtnDisabled}
//             aria-label="botão de retroceder imagem do carrossel"
//          >
//             <BiChevronLeft />
//          </button>
//          <button
//             className="p-1 bg-gray-300/60 cursor-pointer rounded-full text-[clamp(1.5rem_,_3vw_,_2rem)] absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 shadow-md"
//             onClick={scrollNext}
//             disabled={nextBtnDisabled}
//             aria-label="botão de avançar imagem do carrossel"
//          >
//             <BiChevronRight />
//          </button>
//       </div>
//    );
// }


/// Alguns dos nossos estudantes e educadores

/// Visita pedagógica ao Museu do Cordel

/// Professores

/// Aniversário da escola Há mais de 50 anos transmitindo conhecimento ajudando. na construção do cidadão

/// Nossa fachada Agora EREM Antônio Inácio
