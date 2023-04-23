import { ReactNode } from 'react';

interface ContainerSectionMainProps {
   children: ReactNode;
}

export function ContainerSectionMain({children}:ContainerSectionMainProps) {
   return <section>{children}</section>;
}
