import { PiggyBank, TrendingUp, Shield, Clock } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: PiggyBank,
      title: "Secure Deposits",
      description: "Safely deposit your funds with our secure platform",
    },
    {
      icon: TrendingUp,
      title: "Growth Potential",
      description: "Watch your investments grow over time",
    },
    {
      icon: Shield,
      title: "Protected Funds",
      description: "Your investments are protected and insured",
    },
    {
      icon: Clock,
      title: "Flexible Withdrawals",
      description: "Access your funds when you need them most",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-8">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <div key={index} className="flex flex-col items-center rounded-lg bg-blue-800/50 p-6 text-center">
            <Icon className="mb-4 h-10 w-10 text-blue-300" />
            <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
            <p className="text-sm text-blue-200">{feature.description}</p>
          </div>
        )
      })}
    </div>
  )
}
