import { FetchPosts } from '@/components/Home/FetchPosts';
import { FetchCarouselImage } from '@/components/Home/Carousel/FetchCarouselImage';
import { IoMapOutline } from 'react-icons/io5';
import { MainH2 } from '@/components/MainH2';
import { ContainerSectionMain } from '@/components/Home/ContainerSectionMain';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="w-full flex flex-col gap-[clamp(20px,4vw,32px)] max-w-5xl m-auto relative h-full px-[min(4%_,_2rem)] py-12">
         <h1 className="font-bold text-[clamp(1.875rem,8vw,45px)] text-center text-sky-700 font-mono">
            EREM Antônio Inácio
         </h1>

         {/* @ts-expect-error */}
         <FetchCarouselImage />

         <ContainerSectionMain>
            <MainH2>Nossa História</MainH2>

            <p className="font-medium text-base dark:text-blue-50 ">
               A Escola de Referência em Ensino Médio Antônio Inácio, localizada
               em Feira Nova, Pernambuco, foi fundada em 1967 como Grupo Escolar
               Antônio Inácio. Ao longo dos anos, passou por melhorias físicas,
               como a construção de laboratórios, rampas de acesso para pessoas
               com necessidades especiais e ampliação da oferta de ensino,
               incluindo o Ensino Médio. Atualmente, conta com um corpo docente
               e discente em constante renovação, com foco na melhoria da
               qualidade do ensino e aprendizagem. Leia mais em:{' '}
               <Link
                  href="/post/historico-da-erem-antonio-inacio"
                  className=" font-semibold  text-[hsl(209,100%,40%)] cursor-pointer hover:text-[hsl(209,100%,25%)] dark:hover:text-[hsl(209,100%,45%)] hover:underline text-lizard_green"
               >
                  Histórico da EREM Antônio Inácio
               </Link>
            </p>
         </ContainerSectionMain>

         <ContainerSectionMain>
            <MainH2>
               {/* Nossos  */}
               Projetos e Ações
            </MainH2>
            {/* @ts-expect-error */}
            <FetchPosts />
         </ContainerSectionMain>

         <ContainerSectionMain>
            <MainH2>Endereço</MainH2>
            <div className="capitalize font-semibold text-lg dark:text-blue-50 flex flex-row gap-2 items-center">
               Rua Sebastião da Rocha, S/N - Centro, Feira Nova - PE
               <a
                  href="https://goo.gl/maps/prb43rbZnaZry7uA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-sky-700 p-[6px] bg-slate-200/40 rounded shadow-md"
               >
                  <IoMapOutline />
               </a>
            </div>
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
         </ContainerSectionMain>
      </div>
   );
}
