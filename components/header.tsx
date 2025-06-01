"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="GroWP Logo" width={120} height={40} priority />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-gray-900" asChild>
            <Link href="https://app.growp.in" target="_blank" rel="noopener noreferrer">
              Login
            </Link>
          </Button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <Link href="https://app.growp.in" target="_blank" rel="noopener noreferrer">
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
