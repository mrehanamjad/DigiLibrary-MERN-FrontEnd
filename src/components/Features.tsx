import { BookOpen, Upload, ShoppingCart } from "lucide-react"
import { Button } from "@mantine/core"


const features = [
  {
    icon: BookOpen,
    title: "Browse & Discover",
    description:
      "Explore thousands of titles across all genres. Find your next favorite book with personalized recommendations.",
    cta: "Start Browsing",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Upload,
    title: "Share Your Stories",
    description:
      "Upload your own books and reach a global audience. Build your author profile and connect with readers.",
    cta: "Upload Your Book",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: ShoppingCart,
    title: "Support Authors",
    description:
      "Purchase premium books and directly support your favorite creators. Flexible pricing for every budget.",
    cta: "View Premium Books",
    color: "from-accent/20 to-accent/5",
  },
]

export default function Features() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Everything You Need</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            DigiLibrary brings together readers and authors in one seamless platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} border border-border rounded-2xl p-8 hover:shadow-lg transition`}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  {feature.cta} →
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
