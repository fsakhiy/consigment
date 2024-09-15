import { Breadcrumbs } from "@/components/breadcrumbs";
import { ProductForm } from "@/components/forms/products";
import PageContainer from "@/components/layouts/page-container";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Products", link: "/dashboard/products" },
  { title: "New", link: "/dashboard/products/new" },
];

export default function Products() {
  return (
    <PageContainer>
      <div className="space-y-2">
        <Breadcrumbs items={breadcrumbItems} />
        <ProductForm
        />
      </div>
    </PageContainer>
  );
}
