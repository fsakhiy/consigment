import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layouts/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { getProducts } from "./action";
import { DataTable } from "@/components/ui/data-table";
import { Product, productTableColumn } from "./columns";
import { Toaster } from "@/components/ui/toaster";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Products", link: "/dashboard/products" },
];

export default async function Products() {
  const product = await getProducts()
  const products: Product[] = []
  product.map((item, index) => {
    products.push({
      id: index + 1,
      name: item.name,
      sku: item.sku || '' ,
      description: item.description || 'no description',
      uuid: item.id
    })
  })
  
  return (
    <PageContainer>
      <Toaster />
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Product (${products.length})`}
            description="Manage Product"
          />

          <Link
            href={"/dashboard/products/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Add New</span>
          </Link>
        </div>
        <Separator />
        <DataTable columns={productTableColumn} data={products} />
      </div>
    </PageContainer>
  );
}
