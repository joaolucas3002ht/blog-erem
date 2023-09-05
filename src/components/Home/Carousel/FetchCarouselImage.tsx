import { TypedObject } from 'sanity';
import urlFor from '../../../../lib/urlFor';
import { CarouselImage } from './CarouselImage';

export interface ImageFetch {
   _type: string;
   alt: string;
   _id: string;
   _updatedAt: Date;
   image: Image;
   mainImage?: Image;
   _createdAt: Date;
   _rev: string;
}

export interface Image {
   hotspot?: Hotspot;
   _type: string;
   asset: Asset;
   crop?: Crop;
}

export interface Asset {
   _type: string;
   _ref: string;
}

export interface Crop {
   right: number;
   top: number;
   left: number;
   bottom: number;
   _type: string;
}

export interface Hotspot {
   height: number;
   _type: string;
   width: number;
   x: number;
   y: number;
}

// -------------------------------

export interface HomeInfo {
    _createdAt:       string;
    titleCarousel:    string;
    _id:              string;
    _updatedAt:       string;
    blockContent:     TypedObject | TypedObject[];
    titleAddress:     string;
    titleSectionCard: string;
    _rev:             string;
    _type:            string;
    productName:      string;
    imageCarousel:    ImageCarousel[];
}

export interface Child {
    _type: string;
    marks: string[];
    text:  string;
    _key:  string;
}

export interface MarkDef {
    _type: string;
    href:  string;
    _key:  string;
}

export interface ImageCarousel {
    _type: string;
    alt:   string;
    _key:  string;
    url:   URL;
}

export interface URL {
    hotspot?: Hotspot;
    _type:    string;
    asset:    Asset;
    crop?:    Crop;
}

export interface Asset {
    _ref:  string;
    _type: string;
}

export interface Crop {
    top:    number;
    left:   number;
    bottom: number;
    _type:  string;
    right:  number;
}

export interface Hotspot {
    height: number;
    _type:  string;
    width:  number;
    x:      number;
    y:      number;
}

export function FetchCarouselImage({ImageCarousel}:{ImageCarousel: ImageCarousel[]}) {

   const ClassBg = ImageCarousel?.map(({ url, alt }) => ({
         src: urlFor(url.asset._ref).url(),
         alt: alt ?? 'sem texto alternativo',
         }));

   return <CarouselImage CarouselImage={ClassBg} />

}

// [
//    {
//       src: 'https://picsum.photos/640',
//    },
//    {
//       src: 'https://picsum.photos/624',
//    },
//    {
//       src: 'https://picsum.photos/720',
//    },
//    {
//       src: 'https://picsum.photos/756',
//    },
//    {
//       src: 'https://picsum.photos/656',
//    },
//    {
//       src: 'https://picsum.photos/560',
//    },
// ];
