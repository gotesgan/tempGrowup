import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">Privacy Policy</h1>

          <p className="text-gray-700 mb-6">
            This Privacy Policy describes how GroWP Invest collects, uses, and protects your personal information when
            you use our services. By using our platform, you agree to the collection and use of information in
            accordance with this policy.
          </p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Information Collection</h2>
            <p className="text-gray-700">
              We collect information such as your name, mobile number, email address, Aadhaar details (masked), PAN
              information, bank account details, and transaction data to provide our investment services. We may also
              collect usage data for analytics purposes.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
            <p className="text-gray-700">
              Your personal information is used to manage your investment account, process deposits and withdrawals,
              calculate rewards, provide customer support, and send important notifications about your account.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Data Security</h2>
            <p className="text-gray-700">
              We implement bank-grade security measures including encryption, HTTPS protocols, and secure data storage
              to protect your personal and financial information from unauthorized access, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, update, and request deletion of your personal data. You can update your
              communication preferences through your profile page. For any privacy-related concerns, contact us at{" "}
              <a href="mailto:privacy@growp.in" className="text-orange-600 hover:underline">
                privacy@growp.in
              </a>
              .
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this privacy policy from time to time. We will notify you of any changes through in-app
              notifications and email communications.
            </p>
          </section>

          <div className="mt-8 text-sm text-gray-500 text-center">Last updated: January 1, 2025</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
