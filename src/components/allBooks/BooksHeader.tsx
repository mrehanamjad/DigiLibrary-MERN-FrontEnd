import type React from "react"
import { Search, Grid, List, SlidersHorizontal } from "lucide-react"

interface BooksHeaderProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  viewMode: "grid" | "list"
  onViewModeChange: (mode: "grid" | "list") => void
  showFilters: boolean
  onShowFiltersChange: (show: boolean) => void
  totalBooks: number
  currentCount: number
  pagingCounter: number
}

const BooksHeader: React.FC<BooksHeaderProps> = ({
  searchTerm,
  onSearchChange,
  viewMode,
  onViewModeChange,
  showFilters,
  onShowFiltersChange,
  totalBooks,
  currentCount,
  pagingCounter,
}) => {
  return (
    <div className="bg-card border-b border-border sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">All Books</h1>
            <p className="text-muted-foreground mt-1">
              {totalBooks > 0
                ? `Showing ${pagingCounter} - ${Math.min(
                    pagingCounter + currentCount - 1,
                    totalBooks,
                  )} of ${totalBooks} books`
                : "Loading..."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search books or authors..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent bg-background text-foreground"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onShowFiltersChange(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors lg:hidden text-secondary-foreground"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
              </button>

              <div className="flex bg-secondary rounded-lg p-1">
                <button
                  onClick={() => onViewModeChange("grid")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "grid"
                      ? "bg-background shadow-sm text-foreground"
                      : "hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onViewModeChange("list")}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === "list"
                      ? "bg-background shadow-sm text-foreground"
                      : "hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BooksHeader
