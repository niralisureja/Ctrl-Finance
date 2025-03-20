"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedContainer } from "@/components/ui/animated-container";
import { FloatingElement } from "@/components/ui/floating-element";

export default function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <AnimatedContainer className="md:w-1/2 mb-10 md:mb-0 order-2 md:order-1" animation="fade-up">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
              <span className="text-blue-600 font-medium">Who We Are</span>
            </div>

            <AnimatedContainer animation="fade-up" delay={200}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
            </AnimatedContainer>

            <AnimatedContainer animation="fade-up" delay={300}>
              <p className="text-gray-600 mb-6">
                Vow Fintech is Providing such Platform which create trust bridge in Project Finance to Entrepreneurs/MSME's by Banks. Financial Guarantee Products Offering Guarantee and Other Bonds Including For Performance, Financial Obligation and Commitment That Give Credit Default Protection, Against Lending/Funding To MSME's by Financial Institutions.
              </p>
            </AnimatedContainer>

            <div>
              <AnimatedContainer animation="fade-up" delay={400}>
                <h3 className="text-xl font-semibold text-[#f37022] mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  Our mission is to bridge the financing gap for MSMEs in India by providing comprehensive platform that enhance their creditworthiness and facilitate their access to affordable and timely credit. We aim to foster a supportive ecosystem for MSMEs, collaborating with financial institutions to fuel entrepreneurship, drive economic growth, and create lasting value for our customers and society.
                </p>
              </AnimatedContainer>

              <AnimatedContainer animation="fade-up" delay={500}>
                <h3 className="text-xl font-semibold text-[#f37022] mb-3">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  To be the leading and most trusted Company in India, empowering MSME with innovative financial solutions and enabling their sustainable growth and success.
                </p>
              </AnimatedContainer>
            </div>

            <AnimatedContainer animation="fade-up" delay={600}>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center group">
                Read More
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.1722 12L8.22217 7.05L9.63617 5.636L15.9992 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor" />
                </svg>
              </Button>
            </AnimatedContainer>

            
          </AnimatedContainer>

          <AnimatedContainer className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0" animation="slide-in" delay={300}>
            <FloatingElement amplitude={15} speed={8}>
              <div className="relative">
                <div className="relative w-full rounded-[40%_60%_30%_70%/30%_30%_70%_70%] overflow-hidden aspect-square transform transition-all duration-700 hover:rounded-[50%_50%_50%_50%/50%_50%_50%_50%]">
                  <Image
                    src="/images/business-meeting.jpg"
                    alt="Business Growth Image"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#3b5998]/30 to-transparent mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#f37022]/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-[#38b768]/20 rounded-full blur-3xl"></div>
              </div>
            </FloatingElement>
          </AnimatedContainer>
        </div>

        <div className="mt-16 md:mt-24">
          <AnimatedContainer animation="fade-up" className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Approach to Financial Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We pride ourselves on our comprehensive, client-centered approach to financial guarantee solutions.
            </p>
          </AnimatedContainer>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Customized Solutions",
                description: "We tailor financial guarantees to fit your specific business needs and objectives.",
                icon: (
                  <svg className="w-10 h-10 text-[#3b5998]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3H14C14.5523 3 15 3.44772 15 4V4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4V4C9 3.44772 9.44772 3 10 3Z" fill="currentColor"/>
                    <path d="M20 6H4C3.44772 6 3 6.44772 3 7V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V7C21 6.44772 20.5523 6 20 6Z" fill="currentColor"/>
                    <path d="M12 10C13.6569 10 15 11.3431 15 13C15 14.6569 13.6569 16 12 16C10.3431 16 9 14.6569 9 13C9 11.3431 10.3431 10 12 10Z" fill="currentColor"/>
                  </svg>
                ),
              },
              {
                title: "Risk Management",
                description: "Our experts analyze and mitigate financial risks to protect your business interests.",
                icon: (
                  <svg className="w-10 h-10 text-[#3b5998]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4 5.4V12.2C4 15.68 7.12 19.24 12 22C16.88 19.24 20 15.68 20 12.2V5.4L12 2Z" fill="currentColor"/>
                    <path d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z" fill="white"/>
                  </svg>
                ),
              },
              {
                title: "Ongoing Support",
                description: "We provide continuous monitoring and support throughout your financial journey.",
                icon: (
                  <svg className="w-10 h-10 text-[#3b5998]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                  </svg>
                ),
              }
            ].map((feature, index) => (
              <AnimatedContainer
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                animation="fade-up"
                delay={800 + index * 200}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
