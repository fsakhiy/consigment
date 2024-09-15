"use server";
import { productFormSchema } from "@/components/forms/products";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

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

    return data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.code === "P2002") {
      // SKU already exists
      throw new Error("SKU already exists");
    }
    throw new Error("Something went wrong");
  }
};
export { getProducts, createProduct };
