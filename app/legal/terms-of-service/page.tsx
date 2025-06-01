import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Terms of Service</h1>

          <p className="text-gray-700 mb-6">
            These Terms of Service govern your use of GroWP Invest platform and services. By accessing or using our
            services, you agree to comply with and be bound by these terms.
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Creation and Access</h2>
            <p className="text-gray-700">
              Account creation requires visiting a GroWP branch, submitting physical forms with valid Aadhaar and PAN
              documents, and making an initial deposit of ₹10,000 via UPI. Access to our platform is invite-only and
              requires proper verification of your identity and documents.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Investment Plans</h2>
            <p className="text-gray-700">
              We offer Seed (₹10,000), Plant (₹50,000), and Tree (₹100,000) investment plans. Each plan has specific
              eligibility criteria and reward structures. Plan upgrades require additional deposits and admin approval.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Rewards and Withdrawals</h2>
            <p className="text-gray-700">
              Daily rewards are calculated as simple interest and credited to your account (excluding weekends and
              holidays). Minimum withdrawal amounts apply: ₹500 for Seed, ₹2,500 for Plant, and ₹5,000 for Tree plans.
              Withdrawals are processed within 3 business days.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Account Responsibilities</h2>
            <p className="text-gray-700">
              You are responsible for maintaining the confidentiality of your login credentials and for all activities
              that occur under your account. Notify us immediately of any unauthorized access.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Termination</h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your access for violations of these terms. You may terminate
              your account through full withdrawal, which allows immediate re-enrollment.
            </p>
          </section>

          <div className="mt-8 text-sm text-gray-500 text-center">Last updated: January 1, 2025</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
