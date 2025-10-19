const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free account in seconds and start exploring our library.",
  },
  {
    number: "02",
    title: "Browse or Upload",
    description: "Discover thousands of books or share your own stories with the world.",
  },
  {
    number: "03",
    title: "Read & Earn",
    description: "Enjoy unlimited reading or earn royalties from your published works.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with DigiLibrary in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
