"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
  fullName: z.string().min(2).max(255),
  email: z.string().email(),
  phoneNO: z.string().regex(phoneRegex, "invalid Number").min(10),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const {toast} = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNO: "",
      subject: "Web Development",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { fullName, email, phoneNO, subject, message } = values;
    try {
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, phoneNO, subject, message }),
      });

      setLoading(false);
      if (response.status === 200)
        toast({ description: "Email sent successfully" });
      else
        toast({
          variant: "destructive",
          description: "Error in sending email",
        });
    } catch (error) {
      setLoading(false);
      toast({
        variant: "destructive",
        description: "Error in sending email",
      });
    }
  }

  return (
    <section id="contact" className="container lg:max-w-[90%] py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="bg-card px-3 w-fit rounded-full py-1.5 text-sm font-medium text-primary tracking-wider mb-5">
              Contact Us
            </h2>

            <h2 className="text-xl lg:text-2xl font-bold">
              Unlock the power of digital marketing
            </h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ipsam sint enim exercitationem ex autem corrupti quas tenetur
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <Phone className="p-2 bg-primary/20 rounded-full ring-8 ring-primary/10 text-bold h-8 w-8" />
                <div className="font-medium text-xl text-primary">Call us</div>
              </div>

              <div>+91 6297654712</div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-3">
                <Mail className="p-2 bg-primary/20 rounded-full ring-8 ring-primary/10 text-bold h-8 w-8" />
                <div className="font-medium text-xl text-primary">Mail US</div>
              </div>

              <div>mypromofficial@gmail.com</div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-3">
                <Clock className="p-2 bg-primary/20 rounded-full ring-8 ring-primary/10 text-bold h-8 w-8" />
                <div className="font-medium text-xl text-primary">
                  Working Hours
                </div>
              </div>

              <div>
                <div>Monday - Friday</div>
                <div>8AM - 4PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="phoneNO"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pnone No</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter Phone No"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Web Development">
                              Web Development
                            </SelectItem>
                            <SelectItem value="Mobile Development">
                              Mobile Development
                            </SelectItem>
                            <SelectItem value="Figma Design">
                              Figma Design
                            </SelectItem>
                            <SelectItem value="REST API">REST API</SelectItem>
                            <SelectItem value="FullStack Project">
                              FullStack Project
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {loading ? <SendBtnLoading /> : <SendBtn />}
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};

const SendBtn = () => {
  return <Button className="mt-4">Send message</Button>;
};

const SendBtnLoading = () => {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  );
};
