import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { TypedObject } from 'sanity';
import urlFor from '../../../lib/urlFor';

interface PortableTextRenderProps {
   content: TypedObject | TypedObject[];
}

export default function PortableTextRender({
   content,
}: PortableTextRenderProps) {
   return (
      <PortableText
         value={content}
         components={{
            types: {
               image: ({ value }: any): any => {
                  return (
                     <div className="relative w-full max-h-[29rem] h-auto m-5 mx-auto flex justify-center ">
                        <Image
                           className="object-contain max-h-[29rem]  h-min w-fit object-center"
                           alt="Blog Post Image"
                           src={urlFor(value).url()}
                           width={750}
                           height={464}
                        />
                     </div>
                  );
               },
            },
            list: {
               bullet: ({ children }: any): any => (
                  <ul className=" py-3 ml-6 list-disc space-y-5 marker:text-lizard_green">
                     {children}
                  </ul>
               ),
               number: ({ children }: any): any => (
                  <ol className=" list-decimal  marker:text-lizard_green">
                     {children}
                  </ol>
               ),
            },
            block: {
               h2: ({ children }: any): any => (
                  <h2 className="text-[clamp(1.875rem_,_6vw,_2.625rem)] leading-snug pb-3 text-sky-700 font-primary font-medium break-words">
                     {children}
                  </h2>
               ),
               h3: ({ children }: any): any => (
                  <h3 className="text-[clamp(1.75rem_,_6vw,_2.375rem)] leading-snug pb-3 text-sky-700 font-primary font-medium break-words">
                     {children}
                  </h3>
               ),
               h4: ({ children }: any): any => (
                  <h4 className="text-[clamp(1.5rem_,_6vw,_2rem)] leading-snug pb-3 text-sky-700 font-primary font-medium break-words">
                     {children}
                  </h4>
               ),
               blockquote: ({ children }: any): any => (
                  <blockquote className="border-l-lizard_green pl-2 border-l-4  my-4 ">
                     {children}
                  </blockquote>
               ),
               normal: ({ children }: any): any => (
                  <p className="pb-[.375rem] text-base text-slate-50">{children}</p>
               ),
            },
            marks: {
               link: ({ children, value }: any) => {
                  const rel = !value.href.startsWith('/')
                     ? 'noreferrer noopener'
                     : undefined;
                  return (
                     <Link
                        href={value.href}
                        rel={rel}
                        className=" text-[#006BCC] cursor-pointer hover:text-blue-900  text-lizard_green"
                     >
                        {children}
                     </Link>
                  );
               },
            },
         }}
      />
   );
}
