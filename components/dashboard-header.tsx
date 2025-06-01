"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Bell, User, LogOut } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="GroWP Logo" width={120} height={40} />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
          <Link href="/dashboard/portfolio" className="text-gray-600 hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/dashboard/transactions" className="text-gray-600 hover:text-gray-900">
            Transactions
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <LogOut className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
