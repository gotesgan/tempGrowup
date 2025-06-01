import { PiggyBank, TrendingUp, Clock, Users, Calculator } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: PiggyBank,
      title: "Secure Deposits",
      description: "Your funds are protected with bank-grade security and insurance coverage up to ₹5 lakhs.",
    },
    {
      icon: TrendingUp,
      title: "Guaranteed Growth",
      description: "Enjoy consistent returns with our expertly managed mutual fund portfolio.",
    },
    {
      icon: Clock,
      title: "Flexible Withdrawals",
      description: "Access your funds anytime with our flexible withdrawal options and minimal processing time.",
    },
    {
      icon: Users,
      title: "Invite Only Access",
      description: "Exclusive membership through our branch network with personalized onboarding and support.",
    },
    {
      icon: Users,
      title: "Expert Management",
      description: "Our team of financial experts actively manages your portfolio for optimal returns.",
    },
    {
      icon: Calculator,
      title: "Smart Planning",
      description: "AI-powered investment planning tailored to your financial goals and risk appetite.",
    },
  ]

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose GroWP?</h2>
          <p className="text-xl text-gray-600">Experience the perfect blend of security, growth, and flexibility</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="rounded-lg bg-white p-6 text-center shadow-sm border border-gray-200">
                <Icon className="mx-auto mb-4 h-12 w-12 text-orange-500" />
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
