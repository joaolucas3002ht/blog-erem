import { AnchorHTMLAttributes, ReactNode } from 'react';

interface LinkMidiaMenuProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
   children?: ReactNode;
}

export function LinkMidiaMenu({ children, href, ...rest }: LinkMidiaMenuProps) {
   return (
      <li>
         <a
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-500 dark:hover:text-white"
            target={'_blank'}
            href={href}
            {...rest}
         >
            {children}
         </a>
      </li>
   );
}
