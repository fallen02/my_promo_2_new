"use client"
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
import { useState } from "react";
import Script from "next/script";
import toast from "react-hot-toast";


declare global {
  interface Window {
    Razorpay: any;
  }
}

const FormSchema = z.object({
  fullname: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
  phoneno: z.string().min(10, {
    message: "Phone No. must be at least 10 characters.",
  }),
  service: z.string().min(6, {
    message: "Service must be at least 5 characters.",
  }),
  amount: z.string().min(2, {
    message: "Amount must be at greater than 10.",
  }),
});

const createOrderId = async (amount: string) => {
  try {
    const response = await fetch("/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: parseFloat(amount) * 100,
      }),
    });
    //  console.log(response);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    //  console.log(data)
    return data.orderId;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

export function PaymentForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      phoneno: "",
      service: "",
      amount: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      console.log(process.env.RPAY_ID)
      const ordId: string = await createOrderId(data.amount);
      const options = {
        key: process.env.NEXT_PUBLIC_RPAY_ID,
        amount: parseFloat(data.amount) * 100,
        currency: "INR",
        name: "MyPromo",
        description: "MyPromo pvt. Inc",
        order_id: ordId,
        handler: async function (response: any) {
          const data = {
            orderCreationId: ordId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          };

          const result = await fetch("/api/verify", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });
          const res = await result.json();
          if (res.isOk) toast.success("Thank you choosing MyPromo.")
          else {
            toast.error(res.message)
            
          }
        },
        prefill: {
          name: data.fullname,
          phone: data.phoneno,
        //   email: "abc@gmail.com",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response: any) {
        toast.error(response.error.description)
      });
      paymentObject.open();
    } catch (error) {
      console.log(error);
    } finally {
      
    }
  }

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Full Name..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneno"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone No.</FormLabel>
                <FormControl>
                  <Input placeholder="Enter phone No..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Service..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Amount..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button  type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </>
  );
}
