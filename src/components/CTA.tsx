import { Button } from "@mantine/core"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Ready to Start Your Reading Journey?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join thousands of readers and authors on DigiLibrary. Discover new worlds, share your stories, and connect
          with a vibrant community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg flex items-center justify-center gap-2">
            Sign Up Free
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg bg-transparent">
            Explore as Guest
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mt-6">No credit card required. Start reading in seconds.</p>
      </div>
    </section>
  )
}
