import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">Ready to Secure Your Financial Future?</h2>
          <p className="mb-8 text-xl text-gray-600">
            Join thousands of investors who trust GroWP for their financial growth. Start with as little as ₹500.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" asChild>
            <Link href="https://app.growp.in" target="_blank" rel="noopener noreferrer">
              Access Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
