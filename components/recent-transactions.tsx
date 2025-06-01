import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

export function RecentTransactions() {
  const transactions = [
    {
      type: "investment",
      amount: "₹15,000",
      date: "Dec 1, 2024",
      status: "Completed",
    },
    {
      type: "withdrawal",
      amount: "₹5,000",
      date: "Nov 28, 2024",
      status: "Completed",
    },
    {
      type: "investment",
      amount: "₹15,000",
      date: "Nov 1, 2024",
      status: "Completed",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {transaction.type === "investment" ? (
                  <ArrowUpRight className="h-5 w-5 text-green-600" />
                ) : (
                  <ArrowDownLeft className="h-5 w-5 text-red-600" />
                )}
                <div>
                  <p className="font-medium">{transaction.type === "investment" ? "Investment" : "Withdrawal"}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{transaction.amount}</p>
                <p className="text-sm text-green-600">{transaction.status}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
