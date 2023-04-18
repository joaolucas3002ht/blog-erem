import { Carousel } from '@/components/Carousel';
import { CarouselPosts } from '@/components/CarouselPosts';
import { groq } from 'next-sanity';
import React from 'react';
import {
   IoAt,
   IoLogoFacebook,
   IoLogoInstagram,
   IoLogoWhatsapp,
   IoMapOutline,
} from 'react-icons/io5';

export default function Login() {
   const Groq = groq`*[_type=="post"][0...8]{
    mainImage,
    slug,
    publishedAt,
    title
 } | order(publishedAt desc)`;

   const Posts = '';

   return (
      <div className="w-full flex flex-col gap-[clamp(20px,4vw,32px)] max-w-3xl m-auto relative h-full px-[min(4%_,_2rem)] py-12">
         <h1 className="font-bold text-[clamp(1.875rem,8vw,45px)] text-center text-sky-700 font-mono">
            EREM Antonio Inacio
         </h1>

         <Carousel />

         {/* <div
            className={`w-[min(100%_,_45rem)] h-[min(56.25vw_,_27rem)] relative mx-auto rounded-2xl overflow-hidden bg-gray-500/90`}
         >
             <Image
                  src={urlFor(mainImage).url()}
                  className="min-h-full min-w-full object-cover object-center"
                  alt={''}
                  fill
               /> 
         </div> */}

         <section className=" flex flex-col gap-4">
            <h2 className="capitalize font-semibold text-3xl text-sky-700  font-mono">
               ultimas postagens
            </h2>
            {/* @ts-expect-error */}
            <CarouselPosts />
         </section>

         <section className=" flex flex-col gap-4">
            <h2 className="capitalize font-semibold text-3xl text-sky-700  font-mono">
               Endereço
            </h2>
            <p className="capitalize font-semibold text-lg dark:text-blue-50 flex flex-row gap-2 items-center">
               Rua Sebastiao da Rocha, S/N - Centro, Feira Nova - PE
               <a
                  href="https://goo.gl/maps/prb43rbZnaZry7uA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-sky-700 p-[6px] bg-slate-200/40 rounded shadow-md"
               >
                  <IoMapOutline />
               </a>
            </p>
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2122.0857111801342!2d-35.383052821856836!3d-7.9510486032343675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7aba53ae2e21179%3A0x51dab90f5e0c4d1b!2sEREM%20Ant%C3%B4nio%20In%C3%A1cio%20-%20Ensino%20M%C3%A9dio!5e0!3m2!1spt-BR!2sbr!4v1680979878257!5m2!1spt-BR!2sbr"
               width="500"
               height="300"
               className="w-[min(100%_,_500px)] mx-auto"
               referrerPolicy="no-referrer-when-downgrade"
               allowFullScreen={false}
               style={{ border: 0 }}
               loading="lazy"
            ></iframe>
         </section>
      </div>
   );
}
// https://www.google.com/maps/place/EREM+Ant%C3%B4nio+In%C3%A1cio+-+Ensino+M%C3%A9dio/@-7.9513719,-35.3828749,18z/data=!4m12!1m5!3m4!2zN8KwNTcnMDQuMiJTIDM1wrAyMic1NC4yIlc!8m2!3d-7.9511603!4d-35.3817347!3m5!1s0x7aba53ae2e21179:0x51dab90f5e0c4d1b!8m2!3d-7.9513766!4d-35.3819585!16s%2Fg%2F1txy2k7m
