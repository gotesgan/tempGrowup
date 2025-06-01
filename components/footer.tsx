import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/images/logo.png" alt="GroWP Logo" width={120} height={40} className="mb-4" />
            <p className="text-gray-600">
              GroWP Invest - Withdrawal Plan for Life. Your trusted partner in financial growth.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#features" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="https://app.growp.in" target="_blank" className="hover:text-gray-900">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900">Support</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/liability-disclaimer" className="hover:text-gray-900">
                  Liability Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Facebook, href: "https://facebook.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; 2024 GroWP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
