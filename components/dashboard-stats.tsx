import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Wallet, PiggyBank, ArrowUpRight } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Investment",
      value: "₹2,45,000",
      change: "+12.5%",
      icon: Wallet,
      color: "text-blue-600",
    },
    {
      title: "Current Value",
      value: "₹2,75,625",
      change: "+₹30,625",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Monthly SIP",
      value: "₹15,000",
      change: "Active",
      icon: PiggyBank,
      color: "text-orange-600",
    },
    {
      title: "Total Returns",
      value: "₹30,625",
      change: "+12.5%",
      icon: ArrowUpRight,
      color: "text-purple-600",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
