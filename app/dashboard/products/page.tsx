import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layouts/page-container';

const breadcrumbItems = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Products', link: '/dashboard/products' }
  ];

export default function Products() {
    return (
        <PageContainer>
            <div className='space-y-2'>
                <Breadcrumbs items={breadcrumbItems} />
                this is products page
            </div>
        </PageContainer>
    )
}