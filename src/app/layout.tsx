import '../../style/globals.css';
import { Roboto, Roboto_Serif, Lora, Roboto_Mono } from 'next/font/google';
import { ReactNode } from 'react';

const roboto = Roboto({
   weight: ['100', '300', '400', '500', '700', '900'],
   subsets: ['latin'],
   variable: '--font-roboto',
   display: 'swap',
});

const robotoMono = Roboto_Mono({
   weight: ['100', '200', '300', '400', '500', '600', '700'],
   subsets: ['latin'],
   variable: '--font-roboto-mono',
   display: 'swap',
});

export const metadata = {
   title: 'EREM Antonio Inacio',
   description: 'site de informações da EREM Antonio Inacio',
};

interface RootLayoutProps {
   children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html
         lang="pt-br"
         className={`${roboto.variable} ${robotoMono.variable}`}
         
      >
         <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
         <body className="bg-gray-50 dark:bg-[#23272F] font-primary">
            {children}
         </body>
      </html>
   );
}
