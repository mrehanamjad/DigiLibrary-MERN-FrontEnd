import React from "react";
import {
  Star,
  Users,
  ShoppingCart,
  Eye,
  BookOpen,
  Globe,
  Heart,
} from "lucide-react";
import { Book } from "./allBooks/AllBooks";
import { Button } from "@mantine/core";

// interface BookCardProps {
//   id: string;
//   title: string;
//   author: string;
//   coverGradient: string;
//   rating: number;
//   readers: number;
//   pages: number;
//   language: string;
//   price: number;
//   isFree: boolean;
//   category: string;
// }

// const BookCard: React.FC<BookCardProps> = ({
//   title,
//   author,
//   coverGradient,
//   rating,
//   readers,
//   pages,
//   language,
//   price,
//   isFree,
//   category
// }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
//       {/* Book Cover */}
//       <div className="relative">
//         <div className={`aspect-[3/4] ${coverGradient} flex items-center justify-center relative overflow-hidden`}>
//           <div className="text-white text-center p-4">
//             <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mb-3 mx-auto flex items-center justify-center">
//               <span className="text-2xl font-bold">{title.charAt(0)}</span>
//             </div>
//             <div className="text-sm font-medium opacity-80 line-clamp-2">{title}</div>
//           </div>

//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//             <div className="flex space-x-2">
//               <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
//                 <Eye className="w-5 h-5 text-white" />
//               </button>
//               <button className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all">
//                 {isFree ? <BookOpen className="w-5 h-5 text-white" /> : <ShoppingCart className="w-5 h-5 text-white" />}
//               </button>
//             </div>
//           </div>

//           {/* Category badge */}
//           <div className="absolute top-3 left-3">
//             <span className="px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-medium rounded-full backdrop-blur-sm">
//               {category}
//             </span>
//           </div>

//           {/* Price badge */}
//           <div className="absolute top-3 right-3">
//             <span className={`px-2 py-1 text-xs font-bold rounded-full ${
//               isFree
//                 ? 'bg-green-500 text-white'
//                 : 'bg-white text-gray-900'
//             }`}>
//               {isFree ? 'FREE' : `$${price}`}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Book Info */}
//       <div className="p-5">
//         <h3 className="font-bold text-lg text-gray-900 mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
//           {title}
//         </h3>
//         <p className="text-gray-600 text-sm mb-3">by {author}</p>

//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className={`w-4 h-4 ${
//                   i < Math.floor(rating)
//                     ? 'text-yellow-400 fill-current'
//                     : 'text-gray-300'
//                 }`}
//               />
//             ))}
//             <span className="text-gray-600 text-sm ml-1">{rating}</span>
//           </div>
//           <div className="text-gray-500 text-sm flex items-center space-x-1">
//             <Users className="w-4 h-4" />
//             <span>{readers.toLocaleString()}</span>
//           </div>
//         </div>

//         {/* Book Details */}
//         <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
//           <div className="flex items-center space-x-1">
//             <BookOpen className="w-3 h-3" />
//             <span>{pages} pages</span>
//           </div>
//           <div className="flex items-center space-x-1">
//             <Globe className="w-3 h-3" />
//             <span>{language}</span>
//           </div>
//         </div>

//         <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
//           isFree
//             ? 'bg-green-500 hover:bg-green-600 text-white'
//             : 'bg-blue-600 hover:bg-blue-700 text-white'
//         }`}>
//           {isFree ? 'Read Free' : `Buy for $${price}`}
//         </button>
//       </div>
//     </div>
//   );
// };

export const BookCardH = ({ book }: { book: Book }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4">
      <div className="w-20 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
        {book.coverImage.url ? (
          <img
            src={book.coverImage.url}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {book.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 truncate">{book.title}</h3>
        <p className="text-gray-600 text-sm">by {book.author.join(", ")}</p>
        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
          <span>{book.category}</span>
          <span>{book.views.toLocaleString()} views</span>
          <span>
            {book.language || "English"} | {book.pages || 404} pages
          </span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(4.3)
                    ? "fill-secondary text-secondary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({404})</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-gray-900">
          {book.isFree ? "FREE" : `$${book.price}`}
        </div>
        {/* <div className="text-sm text-gray-500">{book.user.fullName}</div> */}
      </div>
    </div>
  );
};

function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden hover:shadow-lg transition group">
      <div className="relative overflow-hidden h-64 bg-muted">
        <img
          src={book.coverImage.url || "/placeholder.svg"}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {book.category}
          </span>
        </div>
        <button className="absolute top-3 left-3 bg-white/90 hover:bg-white rounded-full p-2 transition">
          <Heart className="w-5 h-5 text-foreground" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-foreground mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        <p className="text-sm text-muted-foreground mb-3">
          {book.language} - {404} pages
        </p>
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(4.3)
                    ? "fill-secondary text-secondary"
                    : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({404})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-foreground">
            {book.isFree
              ? "Free"
              : typeof book.price === "number"
              ? `$${book.price}`
              : book.price}
          </span>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Read Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
