import { ReactNode } from 'react';

interface ContainerSectionMainProps {
   children: ReactNode;
}

export function ContainerSectionMain({children}:ContainerSectionMainProps) {
   return <section className='w-full flex flex-col gap-4'>{children}</section>;
}
