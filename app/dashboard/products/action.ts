'use server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const getProducts = async () => {
    revalidatePath('/dashboard/products')
    const data = await prisma.product.findMany();
    
    return data
}

export { getProducts }