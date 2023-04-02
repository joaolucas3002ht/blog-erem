import Link from 'next/link';
// import "../../style/globals.css"


import { ImArrowLeft2 } from 'react-icons/im';

export function NavBar(props: any) {
   return (
      <div>
         <>{props.renderDefault(props)}</>

         <div className="p-2 pl-2 w-full border-b-2 border-[#383838]">
            <Link
               href="/"
               className="flex items-center gap-2 text-gray-50 font-medium text-base p-2 rounded w-full max-w-[334px] hover:bg-white hover:bg-opacity-20"
            >
               <ImArrowLeft2 size={14} />
               Go to Website
            </Link>
         </div>
      </div>
   );
}
//#f7ab08