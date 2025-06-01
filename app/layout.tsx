import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GroWP Investment – The Withdrawal Plan That Grows With You",
  description:
    "Secure deposits, flexible withdrawals, and guaranteed growth for life. GroWP helps you grow your wealth with confidence.",
  keywords: [
    "GroWP",
    "Investment",
    "Withdrawal Plan",
    "Secure Deposits",
    "Guaranteed Growth",
    "Flexible Withdrawals",
    "Financial Planning",
    "Grow Wealth",
  ],
  metadataBase: new URL("https://www.growp.in"),
  openGraph: {
    title: "GroWP Investment – The Withdrawal Plan That Grows With You",
    description:
      "GroWP offers secure deposits, flexible withdrawals, and guaranteed long-term growth. Start your investment journey today.",
    url: "https://www.growp.in",
    siteName: "GroWP",
    images: [
      {
        url: "https://www.growp.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "GroWP Hero Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GroWP Investment – The Withdrawal Plan That Grows With You",
    description:
      "Secure deposits. Flexible withdrawals. Guaranteed growth for life. Grow your financial future with GroWP.",
    images: ["https://www.growp.in/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
