import { CardLoading } from '@/components/Card/CardLoading';

export default function loading() {
   return (
      <div className="w-full py-12 flex flex-row flex-wrap  max-w-7xl m-auto relative justify-center items-center  gap-4">
         {Array.from({ length: 12 }, (val, ind) => ind).map((val, ind) => (
            <CardLoading key={ind} />
         ))}
      </div>
   );
}
