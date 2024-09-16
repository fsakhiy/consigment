"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: number
  sku: string
  name: string
  description: string
}

export const productTableColumn: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "No.",
  },
  {
    accessorKey: "sku",
    header: "SKU",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
]
