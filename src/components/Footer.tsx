import Link from "next/link"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-lg">📚</span>
              </div>
              <span className="font-bold text-lg">DigiLibrary</span>
            </div>
            <p className="text-background/70 text-sm">Your gateway to unlimited reading and publishing.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  Upload Book
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  For Authors
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-background/70 text-sm mb-4">Get curated book recommendations delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded bg-background/20 text-background placeholder-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-3 py-2 bg-secondary text-foreground rounded hover:bg-secondary/90 transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">© 2025 DigiLibrary. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-background/70 hover:text-background transition">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-background/70 hover:text-background transition">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-background/70 hover:text-background transition">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex gap-4 text-sm">
            <Link href="#" className="text-background/70 hover:text-background transition">
              Privacy
            </Link>
            <Link href="#" className="text-background/70 hover:text-background transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
