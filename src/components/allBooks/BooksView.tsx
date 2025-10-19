import { Book } from "./AllBooks"
import BookCard, { BookCardH } from "../BookCard"

interface BooksViewProps {
  books: Book[]
  viewMode: "grid" | "list"
}

const BooksView: React.FC<BooksViewProps> = ({ books, viewMode }) => {
  return (
    <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
      {books.map((book) => (
        <div key={book._id}>{viewMode === "grid" ? <BookCard book={book} /> : <BookCardH book={book} />}</div>
      ))}
    </div>
  )
}

export default BooksView
