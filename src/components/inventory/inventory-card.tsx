import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface InventoryCardProps {
  name: string
  stock: number
  expiryDate: string
  batchNumber: string
  category: string
}

export function InventoryCard({
  name,
  stock,
  expiryDate,
  batchNumber,
  category,
}: InventoryCardProps) {
  const getStockStatus = (stock: number) => {
    if (stock <= 10) return "destructive"
    if (stock <= 30) return "warning"
    return "default"
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Badge variant={getStockStatus(stock)}>{stock} in stock</Badge>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Batch No:</span>
            <span>{batchNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Expiry:</span>
            <span>{new Date(expiryDate).toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Category:</span>
            <span>{category}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}