import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Minus, BarChart3 } from "lucide-react"

export function DashboardActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" />
          Invest More
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <Minus className="mr-2 h-4 w-4" />
          Withdraw Funds
        </Button>
        <Button variant="outline" className="w-full justify-start">
          <BarChart3 className="mr-2 h-4 w-4" />
          View Reports
        </Button>
      </CardContent>
    </Card>
  )
}
