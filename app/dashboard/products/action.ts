"use server";
import { productFormSchema } from "@/components/forms/products";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { Prisma } from "@prisma/client";

const getProducts = async () => {
  revalidatePath("/dashboard/products");
  const data = await prisma.product.findMany();

  return data;
};

const createProduct = async (values: z.infer<typeof productFormSchema>) => {
  try {
    const data = await prisma.product.create({
      data: {
        name: values.name,
        description: values.description,
        sku: values.sku,
      },
    });

    // return data;
    revalidatePath('/dashboard/products')
    return { success: true, data };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === "P2002" && error.meta?.target?.includes("sku")) {
      // SKU already exists
      return {
        success: false,
        error: "SKU already exists. Please choose another.",
      };
    }
    return { success: false, error: "An unexpected error occurred." };
  }
};
export { getProducts, createProduct };
