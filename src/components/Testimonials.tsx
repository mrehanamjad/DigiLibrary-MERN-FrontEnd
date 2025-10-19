import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Avid Reader",
    content: "DigiLibrary has transformed how I discover books. The personalized recommendations are spot-on!",
    avatar: "/avatar-person.png",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Published Author",
    content: "Finally, a platform that truly supports independent authors. The community here is amazing.",
    avatar: "/avatar-woman.png",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Book Enthusiast",
    content: "The interface is so clean and intuitive. I spend hours exploring new titles every week.",
    avatar: "/stylized-man-avatar.png",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Loved by Readers & Authors</h2>
          <p className="text-lg text-muted-foreground">See what our community has to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{`"${testimonial.content}"`}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
