import { ReactNode } from 'react';

interface MainH2Props {
   children: ReactNode;
}

export function MainH2({ children }: MainH2Props) {
   return (
      <h2 className=" font-semibold text-[clamp(1.875rem_,_6vw,_2.625rem)] text-sky-700  font-mono">
         {children}
      </h2>
   );
}
