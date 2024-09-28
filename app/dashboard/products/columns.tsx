"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteButton } from "@/components/delete-button";
import { toast } from "@/hooks/use-toast";
import { deleteProduct } from "./action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Product = {
  id: number;
  sku: string;
  name: string;
  description: string;
  uuid: number;
};

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
  {
    id: "delete",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div>
          <DeleteButton
            fn={() => {
              try {
                deleteProduct(product.uuid);
              } catch (e) {
                toast({ variant: "destructive", title: "failed to delete" });
              }
              toast({
                title: `Data Deleted`,
                description: `${product.sku} - ${product.name}`,
              });
            }}
          />
        </div>
      );
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //     const product = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(product.name)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>asdf</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
