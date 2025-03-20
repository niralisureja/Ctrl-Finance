"use client";

import Image from "next/image";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { FloatingElement } from "@/components/ui/floating-element";

export default function SecuritySection() {
  return (
    <section className="py-16 bg-[#fff5f0] rounded-3xl mx-4 md:mx-12 my-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b5998]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#f37022]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <AnimatedContainer className="md:w-1/4 mb-8 md:mb-0 flex justify-center" animation="scale-up">
            <FloatingElement amplitude={8} speed={4}>
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-[#f37022]/20 rounded-full blur-xl transform -translate-x-1/4 -translate-y-1/4"></div>
                <Image
                  src="/images/shield.png"
                  alt="Security Shield"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </FloatingElement>
          </AnimatedContainer>

          <div className="md:w-3/4">
            <AnimatedContainer animation="fade-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
                Security, Confidentiality & Results
              </h2>
            </AnimatedContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatedContainer animation="fade-up" delay={200}>
                <div className="flex items-start transform hover:scale-105 transition-transform duration-300 group">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full p-1 group-hover:bg-[#f37022] transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      Secure Financial Guarantee Solutions with end-to-end encryption and protection.
                    </p>
                  </div>
                </div>
              </AnimatedContainer>

              <AnimatedContainer animation="fade-up" delay={400}>
                <div className="flex items-start transform hover:scale-105 transition-transform duration-300 group">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full p-1 group-hover:bg-[#f37022] transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      Complete Confidentiality of all client information and business details.
                    </p>
                  </div>
                </div>
              </AnimatedContainer>

              <AnimatedContainer animation="fade-up" delay={600}>
                <div className="flex items-start transform hover:scale-105 transition-transform duration-300 group">
                  <div className="flex-shrink-0 mr-3 mt-1">
                    <div className="bg-blue-600 rounded-full p-1 group-hover:bg-[#f37022] transition-colors duration-300">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      Results-Driven approach that ensures measurable success for your business.
                    </p>
                  </div>
                </div>
              </AnimatedContainer>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
