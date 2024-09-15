import { Breadcrumbs } from "@/components/breadcrumbs";
import PageContainer from "@/components/layouts/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Products", link: "/dashboard/products" },
];

export default function Products() {
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Product (1)`}
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
      </div>
    </PageContainer>
  );
}
