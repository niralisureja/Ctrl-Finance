"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedContainer } from "@/components/ui/animated-container";

export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-orange-50/30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedContainer className="md:w-1/3 mb-10 md:mb-0" animation="slide-in">
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?w=500&auto=format&fit=crop"
                alt="Woman with money"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedContainer>

          <AnimatedContainer className="md:w-1/3 text-center px-6" animation="fade-up" delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subscribe Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Enter your email blow for daily updates
            </p>

            <form className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 sm:mb-0 shadow-sm"
              />
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-full font-medium sm:-ml-2 hover:shadow-lg transition-shadow duration-300"
              >
                Get Started
              </Button>
            </form>
          </AnimatedContainer>

          <AnimatedContainer className="md:w-1/3 hidden md:block" animation="slide-in" delay={300} threshold={0.2}>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Image
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop"
                alt="Money plant growth investment"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
}
