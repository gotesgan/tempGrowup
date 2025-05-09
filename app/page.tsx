import { Countdown } from "@/components/countdown"
import { SocialLinks } from "@/components/social-links"
import { Features } from "@/components/features"
import Image from "next/image"

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      <div className="container flex max-w-3xl flex-col items-center justify-center gap-8 px-4 py-16 text-center">
        <div className="w-full max-w-md mb-4">
          <Image src="/images/logo.png" alt="GroWP Logo" width={400} height={150} className="mx-auto" priority />
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Coming Soon</h1>
        <p className="max-w-md text-xl text-blue-200">
          We're working hard to bring you the best withdrawal plan for your financial future. GroWP - the withdrawal plan
          that grows with you.
        </p>

        <Countdown targetDate="2024-12-31T00:00:00" />

        <Features />

        <SocialLinks />
      </div>
    </div>
  )
}
