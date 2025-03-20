"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { FloatingElement } from "@/components/ui/floating-element";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <AnimatedContainer className="md:w-1/2 mb-10 md:mb-0" animation="fade-in" delay={200}>
            <FloatingElement amplitude={10} speed={6}>
              <div className="relative">
                <div className="rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden relative w-full max-w-[600px] aspect-square transform transition-all duration-700 hover:rounded-[50%_50%_50%_50%/50%_50%_50%_50%]">
                  <Image
                    src="/images/fintech-network.jpg"
                    alt="Financial growth concept"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </FloatingElement>
          </AnimatedContainer>

          <div className="md:w-1/2">
            <AnimatedContainer animation="slide-in" delay={300}>
              <div className="inline-flex items-center mb-4">
                <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
                <span className="text-blue-600 font-medium">Who We Are</span>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={500}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted<br />
                and Lorem Ipsum Dolor
              </h2>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={700}>
              <div className="text-gray-600 space-y-4 mb-8">
                <p>
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <p>
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={900}>
              <Link href="/about-us">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center group">
                  About Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1722 12L8.22217 7.05L9.63617 5.636L15.9992 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor" />
                  </svg>
                </Button>
              </Link>
            </AnimatedContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
