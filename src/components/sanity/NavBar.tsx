"use client"

import { ImArrowLeft2 } from 'react-icons/im';

export function NavBar(props: any) {


   return (
      <div>
         <>{props.renderDefault(props)}</>

         <div className="p-2 pl-2 w-full border-b-[1px] border-[#b3b3b3]">
            <a href='/' className="flex items-center gap-2 text-[#262626]] font-medium text-base p-2 rounded w-full max-w-[334px] hover:bg-[#c4c4c4] ">
               <ImArrowLeft2 size={14} />
               Go to Website
            </a>
         </div>
      </div>
   );
}
