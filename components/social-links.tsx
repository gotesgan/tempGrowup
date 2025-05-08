import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ]

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-sm font-medium text-blue-300">Follow us on social media</h3>
      <div className="flex space-x-6">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 transition-colors hover:text-white"
            >
              <span className="sr-only">{link.name}</span>
              <Icon className="h-6 w-6" />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
