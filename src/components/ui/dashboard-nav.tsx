import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Pill,
  Capsule,
  Package,
  Users,
  ShoppingCart,
  FileText,
  BarChart,
  Settings,
} from "lucide-react"
import { Button } from "./button"

interface DashboardNavProps extends React.HTMLAttributes<HTMLElement> {}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  const navItems = [
    {
      title: "Inventory",
      icon: Package,
      href: "/inventory",
    },
    {
      title: "Sales",
      icon: ShoppingCart,
      href: "/sales",
    },
    {
      title: "Prescriptions",
      icon: FileText,
      href: "/prescriptions",
    },
    {
      title: "Customers",
      icon: Users,
      href: "/customers",
    },
    {
      title: "Medicine",
      icon: Pill,
      href: "/medicine",
    },
    {
      title: "Suppliers",
      icon: Capsule,
      href: "/suppliers",
    },
    {
      title: "Reports",
      icon: BarChart,
      href: "/reports",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
  ]

  return (
    <nav className={cn("grid gap-2", className)} {...props}>
      {navItems.map((item, index) => (
        <Button
          key={index}
          variant="ghost"
          className="w-full justify-start gap-2"
          asChild
        >
          <a href={item.href}>
            <item.icon className="h-4 w-4" />
            {item.title}
          </a>
        </Button>
      ))}
    </nav>
  )
}