"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedContainer } from "@/components/ui/animated-container";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Dilip Khunt",
      position: "Chartered Accountant",
      image: "/images/business-person.jpg"
    },
    {
      name: "Rahul Mehta",
      position: "Chief Financial Officer",
      image: "/images/business-exec.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#fff5f0]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContainer className="text-center mb-12" animation="fade-up">
          <div className="inline-flex items-center mb-4 justify-center">
            <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
            <span className="text-blue-600 font-medium">Who We Are</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Leadership
          </h2>
        </AnimatedContainer>

        <AnimatedContainer className="max-w-4xl mx-auto text-center mb-16" animation="fade-up" delay={200}>
          <p className="text-gray-600">
            Vow Fintech is Providing such Platform which create trust bridge in Project Finance to Entrepreneurs/MSME's by Banks. Financial Guarantee Products Offering Guarantee and Other Bonds Including For Performance, Financial Obligation and Commitment That Give Credit Default Protection, Against Lending/Funding To MSME's by Financial Institutions.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <AnimatedContainer
              key={index}
              className="flex flex-col items-center md:items-start"
              animation={index % 2 === 0 ? "slide-in" : "fade-up"}
              delay={300 + index * 200}
            >
              <div className="relative mb-8">
                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden group cursor-pointer">
                  <div className="absolute w-full h-full bg-[#3b5998] rounded-[35%_65%_55%_45%/45%_55%_45%_55%] transform rotate-[15deg] group-hover:rotate-[25deg] transition-transform duration-500"></div>
                  <div className="absolute inset-8">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover rounded-[30%_70%_70%_30%/30%_30%_70%_70%] group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center md:text-left max-w-md">
                <div className="inline-flex items-center mb-4">
                  <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
                  <span className="text-blue-600 font-medium">{leader.position}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {leader.name}
                </h3>

                <div className="text-gray-600 space-y-4 mb-8">
                  <p>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>

                <AnimatedContainer animation="fade-up" delay={700}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center group">
                    Read More
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1722 12L8.22217 7.05L9.63617 5.636L15.9992 12L9.63617 18.364L8.22217 16.95L13.1722 12Z" fill="currentColor" />
                    </svg>
                  </Button>
                </AnimatedContainer>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        <AnimatedContainer animation="fade-up" delay={900} className="mt-20">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/business-team.jpg"
              alt="Our Professional Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b5998]/70 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Expert Team
                </h3>
                <p className="text-white/90 mb-6">
                  We have assembled a dedicated team of financial experts, each with specialized knowledge in various aspects of financial guarantees and MSME funding.
                </p>
                <Button className="bg-white text-[#3b5998] hover:bg-white/90 px-6 py-3 rounded-md font-medium">
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
}
