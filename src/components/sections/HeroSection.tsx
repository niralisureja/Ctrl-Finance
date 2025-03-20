"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { ParticleBackground } from "@/components/ui/particle-background";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function HeroSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      setSubmitError("There was a problem submitting your form. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-[#fff5f0] py-16 md:py-24 relative overflow-hidden">
      <ParticleBackground particleCount={30} color="#3b5998" opacity={0.1} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <AnimatedContainer animation="slide-in" delay={200}>
              <div className="inline-flex items-center mb-4">
                <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
                <span className="text-blue-600 font-medium">Grow Your Business</span>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={400}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Lorem Ipsum Dolor<br />
                <span>Sit Your Tagline Goes Here</span>
              </h1>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={600}>
              <p className="text-gray-600 mb-8 max-w-lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={800}>
              <Link href="/contact-us">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center group">
                  Contact Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1722 12L8.22217 7.05L9.63617 5.636L15.9992 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor" />
                  </svg>
                </Button>
              </Link>
            </AnimatedContainer>
          </div>

          <AnimatedContainer className="md:w-1/2" animation="fade-in" delay={600}>
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Book A Consultation</h2>
              
              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                  {submitError}
                </div>
              )}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Email*</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Message*</FormLabel>
                        <FormControl>
                          <textarea
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            placeholder="Your message"
                            rows={4}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-[#f37022] hover:bg-[#e35d0e] text-white py-3 rounded-md font-medium mt-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
