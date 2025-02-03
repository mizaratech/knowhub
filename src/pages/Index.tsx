import * as React from "react"
import {
  Package,
  Users,
  AlertTriangle,
  TrendingUp,
} from "lucide-react"
import { DashboardNav } from "@/components/ui/dashboard-nav"
import { StatsCard } from "@/components/dashboard/stats-card"
import { InventoryCard } from "@/components/inventory/inventory-card"

export default function Index() {
  // Mock data - in a real app, this would come from your backend
  const stats = [
    {
      title: "Total Products",
      value: "2,345",
      description: "Active inventory items",
      icon: Package,
    },
    {
      title: "Active Customers",
      value: "1,234",
      description: "Registered patients",
      icon: Users,
    },
    {
      title: "Low Stock Items",
      value: "15",
      description: "Items need reordering",
      icon: AlertTriangle,
    },
    {
      title: "Monthly Sales",
      value: "$12,345",
      description: "+20.1% from last month",
      icon: TrendingUp,
    },
  ]

  const recentInventory = [
    {
      name: "Paracetamol 500mg",
      stock: 150,
      expiryDate: "2024-12-31",
      batchNumber: "BAT001",
      category: "Pain Relief",
    },
    {
      name: "Amoxicillin 250mg",
      stock: 8,
      expiryDate: "2024-06-30",
      batchNumber: "BAT002",
      category: "Antibiotics",
    },
    {
      name: "Omeprazole 20mg",
      stock: 25,
      expiryDate: "2024-09-15",
      batchNumber: "BAT003",
      category: "Gastric",
    },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r bg-muted/40 p-6 md:flex">
        <div className="flex h-14 items-center justify-center border-b text-lg font-semibold">
          Pharmacy System
        </div>
        <div className="flex-1 pt-6">
          <DashboardNav />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Inventory */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Inventory</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentInventory.map((item, index) => (
              <InventoryCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}