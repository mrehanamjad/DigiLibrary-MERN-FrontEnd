// import {
//   BookOpen,
//   Brain,
//   Heart,
//   Zap,
//   Lightbulb,
//   Users,
//   Globe,
//   PenTool,
//   Library,
//   Landmark,
//   FlaskConical,
//   Briefcase,
//   Music,
//   Palette,
//   Baby,
//   ScrollText,
//   Sparkles,
//   Theater,
//   Atom,
//   Sword,
//   GraduationCap,
// } from "lucide-react"

// export const categories = [
//   { icon: BookOpen, name: "Fiction", count: "12K+" },
//   { icon: Brain, name: "Non-Fiction", count: "9K+" },
//   { icon: Heart, name: "Romance", count: "6K+" },
//   { icon: Zap, name: "Science Fiction", count: "5K+" },
//   { icon: Sword, name: "Fantasy", count: "5K+" },
//   { icon: ScrollText, name: "Mystery & Thriller", count: "4K+" },
//   { icon: Lightbulb, name: "Self-Help", count: "3.5K+" },
//   { icon: Users, name: "Biography & Memoir", count: "3K+" },
//   { icon: FlaskConical, name: "Science & Technology", count: "3K+" },
//   { icon: Briefcase, name: "Business & Economics", count: "2.5K+" },
//   { icon: Landmark, name: "History & Politics", count: "2K+" },
//   { icon: Baby, name: "Children & Young Adult", count: "2K+" },
//   { icon: PenTool, name: "Poetry & Literature", count: "1.8K+" },
//   { icon: Palette, name: "Art & Design", count: "1.6K+" },
//   { icon: Music, name: "Music & Performing Arts", count: "1.5K+" },
//   { icon: GraduationCap, name: "Education & Academics", count: "1.4K+" },
//   { icon: Theater, name: "Drama & Plays", count: "1.2K+" },
//   { icon: Atom, name: "Health & Medicine", count: "1.2K+" },
//   { icon: Globe, name: "Travel & Adventure", count: "1.1K+" },
//   { icon: Sparkles, name: "Spirituality & Religion", count: "900+" },
//   { icon: Library, name: "Classics", count: "850+" },
// ]


// export default function Categories() {
//   return (
//     <section className="py-20 md:py-32 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Explore by Category</h2>
//           <p className="text-lg text-muted-foreground">Find books in your favorite genres</p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//           {categories.map((category, index) => {
//             const Icon = category.icon
//             return (
//               <button
//                 key={index}
//                 className="group p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-border rounded-xl hover:border-primary hover:shadow-lg transition text-center"
//               >
//                 <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition">
//                   <Icon className="w-6 h-6 text-primary" />
//                 </div>
//                 <h3 className="font-bold text-foreground mb-1">{category.name}</h3>
//                 <p className="text-sm text-muted-foreground">{category.count}</p>
//               </button>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"
import { useState, useRef, useEffect } from 'react';
import {
  BookOpen,
  Brain,
  Heart,
  Zap,
  Lightbulb,
  Users,
  Globe,
  PenTool,
  Library,
  Landmark,
  FlaskConical,
  Briefcase,
  Music,
  Palette,
  Baby,
  ScrollText,
  Sparkles,
  Theater,
  Atom,
  Sword,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const categories = [
  { icon: BookOpen, name: "Fiction", count: "12K+" },
  { icon: Brain, name: "Non-Fiction", count: "9K+" },
  { icon: Heart, name: "Romance", count: "6K+" },
  { icon: Zap, name: "Science Fiction", count: "5K+" },
  { icon: Sword, name: "Fantasy", count: "5K+" },
  { icon: ScrollText, name: "Mystery & Thriller", count: "4K+" },
  { icon: Lightbulb, name: "Self-Help", count: "3.5K+" },
  { icon: Users, name: "Biography & Memoir", count: "3K+" },
  { icon: FlaskConical, name: "Science & Technology", count: "3K+" },
  { icon: Briefcase, name: "Business & Economics", count: "2.5K+" },
  { icon: Landmark, name: "History & Politics", count: "2K+" },
  { icon: Baby, name: "Children & Young Adult", count: "2K+" },
  { icon: PenTool, name: "Poetry & Literature", count: "1.8K+" },
  { icon: Palette, name: "Art & Design", count: "1.6K+" },
  { icon: Music, name: "Music & Performing Arts", count: "1.5K+" },
  { icon: GraduationCap, name: "Education & Academics", count: "1.4K+" },
  { icon: Theater, name: "Drama & Plays", count: "1.2K+" },
  { icon: Atom, name: "Health & Medicine", count: "1.2K+" },
  { icon: Globe, name: "Travel & Adventure", count: "1.1K+" },
  { icon: Sparkles, name: "Spirituality & Religion", count: "900+" },
  { icon: Library, name: "Classics", count: "850+" },
];

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4);
      } else {
        setItemsPerView(6);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerView, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerView, 0));
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-lg text-slate-600">
            Find books in your favorite genres
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-110"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-110"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={carouselRef}>
            <div
              className="flex transition-transform duration-500 ease-out gap-4"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)` }}
                  >
                    <button className="group w-full h-40 p-6 bg-gradient-to-br from-blue-100 to-indigo-100 border border-slate-200 rounded-xl hover:border-blue-400 hover:shadow-xl transition-all text-center hover:-translate-y-1">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-200 transition-colors">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-600">{category.count}</p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? 'w-8 bg-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}