import { CardLoading } from '@/components/CardLoading';

export default function loading() {
   return (
      <div className="w-full flex flex-col gap-6 max-w-7xl m-auto relative h-full">
         {Array.from({ length: 12 }, (val, ind) => ind).map((val, ind) => (
            <CardLoading key={ind} />
         ))}
      </div>
   );
}
