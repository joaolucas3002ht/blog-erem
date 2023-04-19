import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';
import { ReactNode } from 'react';

interface RootLayoutProps {
   children: ReactNode;
}
{
   /* @ ts-expect-error Server Component */
}

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <div className=" grid min-h-screen h-full grid-cols-1 grid-rows-[max-content_,_auto_,_max-content]">
         <Header />
         {children}
         <Footer />
      </div>
   );
}
