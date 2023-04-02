import { Card } from './Card';

// interface PostProps {
//    _createdAt: string;
//    _id: string;
//    _rev: string;
//    _type: string;
//    _updatedAt: string;
//    body: {
//       _key: string;
//       _type: string;
//       children: {
//          _key: string;
//          _type: string;
//          marks: string[];
//          text: string;
//       };
//       level: number;
//       listItem: string;
//       markDefs: never[];
//       style: string;
//    }[];
//    mainImage: {
//       _type: string;
//       asset: {
//          _ref: string;
//          _type: string;
//       };
//       crop?: any;
//       hotspot?: any;
//    };
//    publishedAt: string;
//    slug: {
//       _type: string;
//       current: string;
//    };
//    title: string;
// }
// [];

interface CardProps {
   title: string;
   publishedAt: Date;
   slug: {
      _type: string;
      current: string;
   };
   mainImage: {
      _type: string;
      asset: {
         _ref: string;
         _type: string;
      };
      crop?: any;
      hotspot?: any;
   };
}

interface PostsListProps {
   posts: CardProps[];
}

export function PostsList({ posts }: PostsListProps) {
   return (
      <div className=" w-full flex justify-center items-center flex-wrap gap-4 max-w-7xl m-auto ">
         {posts?.map((e) => {
            return (
               <Card
                  key={e.slug.current}
                  title={e.title}
                  slug={e.slug.current}
                  publishedAt={e.publishedAt}
                  mainImage={e.mainImage}
               />
            );
         })}
      </div>
   );
}
