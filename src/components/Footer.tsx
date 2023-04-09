import Link from "next/link";

export function Footer() {
   return (
      <footer className="w-full border-t-2 border-slate-600">
         <section className="py-8 px-6 text-white flex justify-center">
            <div className="max-w-7xl w-full h-fit ">
            <Link href={"/"}>© 2023 EREM Antonio Inacio, Inc.</Link>
            </div>
         </section>
      </footer>
   );
}
