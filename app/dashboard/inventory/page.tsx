import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layouts/page-container';

const breadcrumbItems = [
    { title: 'Dashboard', link: '/dashboard' },
    { title: 'Inventory', link: '/dashboard/Inventory' }
  ];

export default function Inventory() {
    return (
        <PageContainer>
            <div className='space-y-2'>
                <Breadcrumbs items={breadcrumbItems} />
                this is inventory page
            </div>
        </PageContainer>
    )
}