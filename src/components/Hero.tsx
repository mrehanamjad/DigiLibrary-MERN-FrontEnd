import { Button } from "@mantine/core"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Discover Your Next Great Read
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Explore thousands of books, upload your own stories, and support creators. Your library, everywhere.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg flex items-center gap-2">
                Start Reading Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="px-8 py-6 text-lg bg-transparent">
                Browse as Guest
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Books Available</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">100K+</p>
                <p className="text-sm text-muted-foreground">Active Readers</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">5K+</p>
                <p className="text-sm text-muted-foreground">Authors</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
            <div className="relative h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-24 h-32 md:w-32 md:h-48 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg shadow-lg transform hover:scale-105 transition"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
