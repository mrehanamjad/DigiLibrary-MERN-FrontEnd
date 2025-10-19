import type React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

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

interface BooksPaginationProps {
  pagination: Pagination
  currentPage: number
  onPageChange: (page: number) => void
}

const BooksPagination: React.FC<BooksPaginationProps> = ({ pagination, currentPage, onPageChange }) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!pagination.hasPrevPage}
        className="p-2 rounded-lg border border-input disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <div className="flex gap-2 flex-wrap justify-center">
        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              page === currentPage ? "bg-primary text-primary-foreground" : "border border-input hover:bg-secondary"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!pagination.hasNextPage}
        className="p-2 rounded-lg border border-input disabled:opacity-50 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}

export default BooksPagination
