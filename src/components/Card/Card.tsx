import '../../../lib/dayjs';
import Image from 'next/image';
import urlFor from '../../../lib/urlFor';
import Link from 'next/link';
import { dateFormat } from '../../../utils/dateFormat';

interface CardProps {
   publishedAt: Date;
   title: string;
   slug: string;
   mainImage: any;
}

export function Card({ slug, publishedAt, title, mainImage }: CardProps) {
   const date = dateFormat(publishedAt);

   return (
      <Link
         href={`/post/${slug}`}
         className={`h-[clamp(172px_,_33vw_,_270px)] w-[clamp(128px_,_29vw_,_294px)]  rounded-lg font-sans relative cursor-pointer  block`}
      >
         <div className="w-full h-[clamp(86px_,_18.5vw_,_176px)] rounded-lg  overflow-hidden bg-gray-500/90 flex justify-center items-center space-x-2 relative">
            {mainImage ? (
               <Image
                  src={urlFor(mainImage)
                     .maxHeight(294)
                     .minHeight(270)
                     .minWidth(293)
                     .url()}
                  alt="ftvuuuuuuuuuuuuuuuuuuuuufghjbn"
                  className="min-h-full h-auto min-w-full w-auto object-cover object-center "
                  loading="lazy"
                  fill
               />
            ) : (
               <div></div>
            )}
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
