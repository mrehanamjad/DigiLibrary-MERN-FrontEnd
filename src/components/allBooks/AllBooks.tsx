"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Loader2, AlertCircle } from "lucide-react"
import BooksHeader from "./BooksHeader"
import BooksFilters from "./BooksFilters"
import BooksView from "./BooksView"
import BooksPagination from "./BooksPagination"

export interface Book {
  _id: string
  title: string
  author: string[]
  coverImage: {
    url: string
    fileId: string
  }
  price: number
  isFree: boolean
  category: string
  language?: string
  views: number
  isPublished: boolean
  createdAt: string
  pages?: number
  user: {
    _id: string
    username: string
    fullName: string
    avatar: {
      url: string
      fileId: string
    }
  }
}

interface Pagination {
  totalBooks: number
  limit: number
  currentPage: number
  totalPages: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

interface ApiResponse {
  statusCode: number
  data: {
    books: Book[]
    pagination: Pagination
  }
  message: string
  success: boolean
}

const CATEGORIES = [
  "Fiction",
  "Non-Fiction",
  "Romance",
  "Science Fiction",
  "Fantasy",
  "Mystery & Thriller",
  "Self-Help",
  "Biography & Memoir",
  "Science & Technology",
  "Business & Economics",
  "History & Politics",
  "Children & Young Adult",
  "Poetry & Literature",
  "Art & Design",
  "Music & Performing Arts",
  "Education & Academics",
  "Drama & Plays",
  "Health & Medicine",
  "Travel & Adventure",
  "Spirituality & Religion",
  "Classics",
]

const AllBooks: React.FC = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [books, setBooks] = useState<Book[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")

  const searchTerm = searchParams.get("search") || ""
  const selectedCategory = searchParams.get("category") || ""
  const selectedAuthor = searchParams.get("author") || ""
  const priceFilter = searchParams.get("price") || "all"
  const sortBy = searchParams.get("sort") || "createdAt"
  const sortType = (searchParams.get("order") || "desc") as "asc" | "desc"
  const currentPage = Number.parseInt(searchParams.get("page") || "1")
  const limit = 10

  const [categories, setCategories] = useState<string[]>([])
  const [authors, setAuthors] = useState<string[]>([])

  const updateUrl = useCallback(
    (params: Record<string, string | number | null>) => {
      const newParams = new URLSearchParams(searchParams.toString())

      Object.entries(params).forEach(([key, value]) => {
        if (value === null || value === "" || value === "all") {
          newParams.delete(key)
        } else {
          newParams.set(key, String(value))
        }
      })

      router.push(`?${newParams.toString()}`)
    },
    [searchParams, router],
  )

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: limit.toString(),
        sortBy: sortBy,
        sortType: sortType,
      })

      if (searchTerm) params.append("query", searchTerm)
      if (selectedCategory) params.append("category", selectedCategory)
      if (selectedAuthor) params.append("author", selectedAuthor)
      if (priceFilter !== "all") {
        params.append("isFree", priceFilter === "free" ? "true" : "false")
      }

      const response = await fetch(`http://localhost:8000/api/v1/books?${params.toString()}`)

      if (!response.ok) {
        throw new Error("Failed to fetch books")
      }

      const data: ApiResponse = await response.json()

      if (data.success) {
        setBooks(data.data.books)
        setPagination(data.data.pagination)

        const uniqueCategories = Array.from(new Set(data.data.books.map((book) => book.category.trim())))
        const uniqueAuthors = Array.from(new Set(data.data.books.flatMap((book) => book.author)))
        setCategories(uniqueCategories)
        setAuthors(uniqueAuthors)
      } else {
        throw new Error(data.message || "Failed to fetch books")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }, [currentPage, limit, sortBy, sortType, searchTerm, selectedCategory, selectedAuthor, priceFilter])

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const clearFilters = () => {
    router.push("?")
  }

  return (
    <div className="min-h-screen bg-background">
      <BooksHeader
        searchTerm={searchTerm}
        onSearchChange={(value) => {
          updateUrl({ search: value || null, page: 1 })
        }}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        showFilters={showFilters}
        onShowFiltersChange={setShowFilters}
        totalBooks={pagination?.totalBooks || 0}
        currentCount={books.length}
        pagingCounter={pagination?.pagingCounter || 0}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <BooksFilters
            showFilters={showFilters}
            selectedCategory={selectedCategory}
            onCategoryChange={(value) => {
              updateUrl({ category: value || null, page: 1 })
            }}
            selectedAuthor={selectedAuthor}
            onAuthorChange={(value) => {
              updateUrl({ author: value || null, page: 1 })
            }}
            priceFilter={priceFilter}
            onPriceFilterChange={(value) => {
              updateUrl({ price: value || null, page: 1 })
            }}
            sortBy={sortBy}
            onSortByChange={(value) => updateUrl({ sort: value })}
            sortType={sortType}
            onSortTypeChange={(value) => updateUrl({ order: value })}
            onClearFilters={clearFilters}
            categories={categories}
            authors={authors}
          />

          <div className="flex-1">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
              </div>
            ) : error ? (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
                <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-destructive mb-2">Error Loading Books</h3>
                <p className="text-destructive/80">{error}</p>
                <button
                  onClick={fetchBooks}
                  className="mt-4 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : books.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747 0-6.002-4.5-10.747-10-10.747z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No books found</h3>
                <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
              </div>
            ) : (
              <>
                <BooksView books={books} viewMode={viewMode} />

                {pagination && pagination.totalPages > 1 && (
                  <BooksPagination
                    pagination={pagination}
                    currentPage={currentPage}
                    onPageChange={(page) => updateUrl({ page })}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllBooks
