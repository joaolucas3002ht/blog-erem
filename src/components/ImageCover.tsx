'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function ImageCover({ ...rest }: ImageProps) {
   const [state, setstate] = useState<any>();
   const ref = useRef<HTMLImageElement>(null);

   useEffect(() => {
      console.log(ref.current?.offsetWidth);
   }, [ref.current?.offsetWidth]);

   return (
      <div className="w-[min(100vw,100%)] h-[56.25vw] md:w-[48rem] md:h-[calc(48rem_-_56.25%)] bg-slate-100 relative"></div>
   );
}
