import dayjs from 'dayjs';
import '../../lib/dayjs';
import Image from 'next/image';
import urlFor from '../../lib/urlFor';
import Link from 'next/link';
import { dateFormat } from '../../utils/dateFormat';

interface CardProps {
   publishedAt: Date;
   title: string;
   slug: string;
   mainImage: any;
}

export function Card({ slug, publishedAt, title, mainImage }: CardProps) {
   const date = dateFormat(publishedAt);

   //group

   // group-hover:scale-105

   console.log({ slug, publishedAt, title, mainImage });
   

   return (
      <Link
         href={`/post/${slug}`}
         className="h-[clamp(172px_,_33vw_,_270px)] w-[clamp(128px_,_29vw_,_294px)]  rounded-lg font-sans relative cursor-pointer"
      >
         <div className="w-full h-[clamp(86px_,_18.5vw_,_176px)] rounded-lg  overflow-hidden bg-gray-500 flex justify-center items-center space-x-2 relative">
            {mainImage && <Image
               src={urlFor(mainImage)
                  .maxHeight(294)
                  .minHeight(270)
                  .minWidth(293)
                  .url()}
               alt="ftvuuuuuuuuuuuuuuuuuuuuufghjbn"
               className="min-h-full h-auto min-w-full w-auto object-cover object-center "
               loading="lazy"
               fill
            />}
         </div>
         <h2 className="text-[clamp(.875rem_,_2vw_,_1.125rem)] pt-2 px-2 text-black dark:text-gray-100 font-semibold h-min max-h-14  text-ellipsis overflow-hidden break-all line-clamp-2 capitalize">
            {title}
         </h2>
         <h3 className="font-normal text-[clamp(.625rem_,_1.5vw_,_.875rem)] text-gray-600  dark:text-gray-400 absolute bottom-1 px-2">
            {date}
         </h3>
      </Link>
   );
}

// export function Card({ src }: { src: string }) {
//    return (
//       <a
//          href="#"
//          className=" h-[clamp(18rem,30vw,22rem)] bg-gray-800 w-[clamp(15rem,25vw,18.25rem)] overflow-hidden font-sans shadow-md"
//       >
//          <div className="w-full h-[50%] shadow-sm overflow-hidden bg-gray-800 flex justify-center items-center">
//             {
//                <img
//                   src={src}
//                   alt="ftvuuuuuuuuuuuuuuuuuuuuufghjbn "
//                   className="w-full object-cover object-center flex justify-center items-center"
//                   loading="lazy"
//                />
//             }
//          </div>
//          <section className="flex  gap-3 flex-col pt-4 px-4">
//             <h3 className="font-medium text-sm text-slate-700">
//                24 de Abril de 2022
//             </h3>
//             <h2 className="text-xl font-semibold  h-min  text-ellipsis overflow-hidden break-all line-clamp-3">
//             https://picsum.photos/300 Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum
//                dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem
//                ipsum
//             </h2>
//          </section>
//       </a>
//    );
// }

// export function CardData({ src }: { src: string }) {
//    return (
//       <a
//          href="#"
//          className=" h-[clamp(19rem,30vw,23rem)] bg-gray-800 w-[clamp(15rem,25vw,18.25rem)] overflow-hidden font-sans rounded-lg shadow-md"
//       >
//          <div className="w-full h-[45%] shadow-sm overflow-hidden bg-gray-800 flex justify-center items-center rounded-lg">
//             {
//                <img
//                   src={src}
//                   alt="ftvuuuuuuuuuuuuuuuuuuuuufghjbn "
//                   className="w-full object-cover object-center flex justify-center items-center"
//                   loading="lazy"
//                />
//             }
//          </div>
//          <section className="flex  gap-3 flex-col pt-5 px-4">
//             <h3 className="font-medium text-sm text-slate-700">
//                24 de Abril de 2022
//             </h3>
//             <h2 className="text-xl font-semibold  h-min  text-ellipsis overflow-hidden break-all line-clamp-3">
//                Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum
//                dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem
//                ipsum
//             </h2>
//          </section>
//       </a>
//    );
// }

// export function Card2({ src }: { src: string }) {
//    return (
//       <a
//          href="#"
//          className="h-80 w-64  bg-gray-800 rounded-xl overflow-hidden font-sans shadow-lg"
//       >
//          <div className="w-full h-2/5 shadow-sm overflow-hidden bg-gray-800 flex justify-center items-center">
//             {
//                <img
//                   src={src}
//                   alt="ftvuuuuuuuuuuuuuuuuuuuuufghjbn "
//                   className="w-full object-cover object-center flex justify-center items-center"
//                   loading="lazy"
//                />
//             }
//          </div>
//          <section className="flex items-center gap-1 flex-col pt-3 px-4">
//             <h2 className="text-xl font-semibold  h-min max-h-14  text-ellipsis overflow-hidden break-all line-clamp-2">
//                Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum
//                dolor
//             </h2>
//             <h3 className="font-medium text-sm text-slate-700">
//                24 de Abril de 2022
//             </h3>
//             <p className="text-center text-sm font-normal w-full max-h-32  text-ellipsis break-all line-clamp-4">
//                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
//                consectetur minus nesciunt provident esse, necessitatibus quos
//                minima, in accusantium non aliquam officia. Libero placeat cum
//                voluptas, explicabo fugit ipsa animi?
//             </p>
//          </section>
//       </a>
//    );
// }

// export function CardImg2({ src }: { src: string }) {
//    return (
//       <a
//          href="#"
//          className="h-80 w-64 bg-gray-800 rounded-xl overflow-hidden font-sans shadow-lg"
//       >
//          <div className="w-full h-1/2 shadow-sm overflow-hidden bg-gray-800 flex justify-center items-center">
//             {
//                <img
//                   src={src}
//                   alt="ftvuuuuuuuuuuuuuuuuuuuuufghjbn "
//                   className="w-full object-cover object-center flex justify-center items-center"
//                   loading="lazy"
//                />
//             }
//          </div>
//          <section className="flex items-center gap-1 flex-col pt-3 px-4">
//             <h2 className="text-xl font-semibold text-gray-50 h-min max-h-14  text-ellipsis overflow-hidden break-all line-clamp-2">
//                Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolorLorem ipsum
//                dolor
//             </h2>
//             <h3 className="font-medium text-sm text-gray-600">
//                24 de Abril de 2022
//             </h3>
//             <p className="text-center text-sm font-normal w-full max-h-32 text-gray-50 text-ellipsis break-all line-clamp-2">
//                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
//                consectetur minus nesciunt provident esse, necessitatibus quos
//                minima, in accusantium non aliquam officia. Libero placeat cum
//                voluptas, explicabo fugit ipsa animi?
//             </p>
//          </section>
//       </a>
//    );
// }
