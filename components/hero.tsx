import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Image src="/images/logo.png" alt="GroWP Logo" width={400} height={130} className="mx-auto mb-8" priority />
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Your Financial Future Starts Here
        </h1>

        <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
          GroWP Invest - The withdrawal plan that grows with you. Secure deposits, flexible withdrawals, and guaranteed
          growth for life.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <Link href="https://app.growp.in" target="_blank" rel="noopener noreferrer">
              Login to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50" asChild>
            <Link href="https://app.growp.in" target="_blank" rel="noopener noreferrer">
              Learn More <TrendingUp className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">₹10L+</div>
            <div className="text-gray-600">Total Investments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">5000+</div>
            <div className="text-gray-600">Happy Investors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">12%</div>
            <div className="text-gray-600">Average Returns</div>
          </div>
        </div>
      </div>
    </section>
  )
}
