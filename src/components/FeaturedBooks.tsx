"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star, Heart, Languages } from "lucide-react"
import { Button } from "@mantine/core"


const books = [
  {
    id: 1,
    title: "The Digital Frontier",
    author: "Sarah Chen",
    price: 12.99,
    rating: 4.8,
    reviews: 324,
    cover: "/book-cover-digital-frontier.jpg",
    category: "Programming & Software",
    Language: "English",
    pages: 320,
  },
  {
    id: 2,
    title: "Echoes of Tomorrow",
    author: "Marcus Reid",
    price: 14.99,
    rating: 4.9,
    reviews: 512,
    cover: "/book-cover-echoes-tomorrow.jpg",
    category: "Programming & Software",
     Language: "English",
    pages: 320,
  },
  {
    id: 3,
    title: "The Last Library",
    author: "Emma Watson",
    price: "Free",
    rating: 4.7,
    reviews: 289,
    cover: "/book-cover-last-library.jpg",
    category: "Free",
     Language: "English",
    pages: 320,
  },
  {
    id: 4,
    title: "Midnight Chronicles",
    author: "James Mitchell",
    price: 13.99,
    rating: 4.6,
    reviews: 198,
    cover: "/book-cover-midnight-chronicles.jpg",
    category: "New",
     Language: "English",
    pages: 320,
  },
]

export default function FeaturedBooks() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length)
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured This Week</h2>
            <p className="text-muted-foreground">Discover our handpicked selection</p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous books">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next books">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {books.map((book) => (
              <div key={book.id} className="flex-shrink-0 w-48">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function BookCard({ book }: { book: (typeof books)[0] }) {
  return (
    <div className="bg-card rounded-xl overflow-hidden hover:shadow-lg transition group">
      <div className="relative overflow-hidden h-64 bg-muted">
        <img
          src={book.cover || "/placeholder.svg"}
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
        <h3 className="font-bold text-foreground mb-1 line-clamp-2">{book.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{book.author}</p>
        <p className="text-sm text-muted-foreground mb-3">{book.Language} - {book.pages} pages</p>
        <div className="flex items-center gap-1 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(book.rating) ? "fill-secondary text-secondary" : "text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({book.reviews})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-foreground">
            {typeof book.price === "number" ? `$${book.price}` : book.price}
          </span>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Read Now
          </Button>
        </div>
      </div>
    </div>
  )
}
