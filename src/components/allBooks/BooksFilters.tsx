"use client"

import type React from "react"

interface BooksFiltersProps {
  showFilters: boolean
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedAuthor: string
  onAuthorChange: (value: string) => void
  priceFilter: string
  onPriceFilterChange: (value: string) => void
  sortBy: string
  onSortByChange: (value: string) => void
  sortType: "asc" | "desc"
  onSortTypeChange: (value: "asc" | "desc") => void
  onClearFilters: () => void
  categories: string[]
  authors: string[]
}

const BooksFilters: React.FC<BooksFiltersProps> = ({
  showFilters,
  selectedCategory,
  onCategoryChange,
  selectedAuthor,
  onAuthorChange,
  priceFilter,
  onPriceFilterChange,
  sortBy,
  onSortByChange,
  sortType,
  onSortTypeChange,
  onClearFilters,
  categories,
  authors,
}) => {
  return (
    <div className={`lg:w-80 ${showFilters ? "block" : "hidden lg:block"}`}>
      <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
          <button
            onClick={onClearFilters}
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-6">
          {/* Price Type Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Price Type</label>
            <select
              value={priceFilter}
              onChange={(e) => onPriceFilterChange(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
            >
              <option value="all">All Books</option>
              <option value="free">Free Books</option>
              <option value="paid">Paid Books</option>
            </select>
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Author Filter */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Author</label>
            <select
              value={selectedAuthor}
              onChange={(e) => onAuthorChange(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
            >
              <option value="">All Authors</option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value)}
              className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground mb-2"
            >
              <option value="createdAt">Date Added</option>
              <option value="title">Title</option>
              <option value="price">Price</option>
              <option value="views">Views</option>
            </select>

            <select
              value={sortType}
              onChange={(e) => onSortTypeChange(e.target.value as "asc" | "desc")}
              className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
            >
              <option value="desc">Descending</option>
              <option value="asc">Ascending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksFilters
