"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Heading } from "../ui/heading";
import { Separator } from "../ui/separator";
// import { toast, useToast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { createProduct } from "@/app/dashboard/products/action";
import { description } from "../charts/bar-graph";

export const productFormSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  description: z.string().min(3, {
    message: "Descriptoin must be at least 3 characters.",
  }),
  sku: z.string().min(3, {
    message: "Descriptoin must be at least 3 characters.",
  }),
});

export function ProductForm() {
  // ...
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof productFormSchema>>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      description: "",
      sku: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof productFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values);
    setLoading(true);

    try {
      await createProduct(values);
      setLoading(false);
      toast({
        title: "Product Created Successfully",
      });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setLoading(false);

      // Check if the error is related to the SKU already existing
      if (e.message === "SKU already exists") {
        toast({
          variant: "destructive",
          title: "SKU Error",
          description: "The SKU already exists. Please choose another one.",
        });
      } else {
        toast({
          variant: "destructive",
          description: "An error occurred while creating the product.",
        });
      }
    }
  }

  return (
    <>
      <Toaster />
      <div className="flex items-center justify-between">
        <Heading
          title="Create Product"
          description="fill the form below to create a new product."
        />
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-8"
        >
          <div className="gap-8 md:grid md:grid-cols-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Keripik Kentang"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Keripik Kentar rasa Balado"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Product SKU"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
