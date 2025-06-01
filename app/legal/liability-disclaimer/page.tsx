import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LiabilityDisclaimer() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Liability Disclaimer</h1>

          <p className="text-gray-700 mb-6">
            By using GroWP Invest services, you acknowledge and agree to the following terms regarding liability.
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Investment Risk</h2>
            <p className="text-gray-700">
              All investments carry inherent risks. While we strive to provide consistent returns, past performance does
              not guarantee future results. You acknowledge that investment values may fluctuate and you may not recover
              your full principal amount.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">No Liability for Damages</h2>
            <p className="text-gray-700">
              GroWP Invest is not liable for any damages, losses, or expenses incurred due to market conditions,
              technical issues, or other factors beyond our control. This includes business interruption, data loss, or
              financial losses.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Third-Party Services</h2>
            <p className="text-gray-700">
              Our platform may integrate with third-party payment processors and banking services. We are not
              responsible for the performance, security, or policies of these external services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify and hold GroWP Invest harmless from any claims, losses, or damages arising out of
              your use of our services, violation of these terms, or any fraudulent activity.
            </p>
          </section>

          <div className="mt-8 text-sm text-gray-500 text-center">Last updated: January 1, 2025</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
