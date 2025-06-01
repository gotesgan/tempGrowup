import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardStats } from "@/components/dashboard-stats"
import { DashboardActions } from "@/components/dashboard-actions"
import { RecentTransactions } from "@/components/recent-transactions"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          <DashboardStats />
          <div className="grid gap-8 lg:grid-cols-2">
            <DashboardActions />
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  )
}
