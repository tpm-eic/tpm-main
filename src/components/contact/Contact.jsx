import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
import { FiSend } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(300),
});

const Contact = () => {
  const [hp, setHP] = useState("");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  async function onSubmit(values) {
    console.log(values);
    if (hp) return;
  }
  const contact = useRef(null);
  const [location] = useLocation();
  console.log(location);

  useEffect(() => {
    if (location === "/contact" && contact.current) {
      contact.current.scrollIntoView({ behavior: "smooth" });
    }
    // Add similar conditions for other sections
  }, [location]);
  return (
    <div ref={contact}>
      <div className="flex items-center">
        <h3 className="self-start text-3xl my-2 underline mr-2">Contact Us</h3>
        <div>
          <p className="flex items-center text-2xl">
            <span className="mr-2">
              <FaPhone />
            </span>
            <a href="tel:+16023973579">(602) 397-3579</a>
          </p>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full flex flex-col"
        >
          <Input
            type="hidden"
            name="hp"
            value={hp}
            onChange={(e) => setHP(e.target.value)}
          />
          <div>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="full name goes here...." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email goes here...." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="your message goes here...."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="text-xl">
            <span className="mr-2 text-xl">
              <FiSend />
            </span>
            Send Message
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Contact;
