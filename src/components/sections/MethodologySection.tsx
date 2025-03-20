"use client";

import { AnimatedContainer } from "@/components/ui/animated-container";
import { ParticleBackground } from "@/components/ui/particle-background";
import Image from "next/image";

export default function MethodologySection() {
  const steps = [
    { number: "01", title: "Identify", color: "#38b768", description: "We identify your business needs and financial objectives" },
    { number: "02", title: "Analyze", color: "#e94b82", description: "We analyze risks and opportunities in your financial situation" },
    { number: "03", title: "Design", color: "#f5a623", description: "We design custom financial guarantee solutions" },
    { number: "04", title: "Implement", color: "#25bcf1", description: "We implement the solutions with careful monitoring" },
    { number: "05", title: "Review", color: "#ff7545", description: "We review and optimize performance regularly" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2b4987] text-white relative overflow-hidden">
      <ParticleBackground color="#ffffff" opacity={0.1} speed={0.5} particleCount={40} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedContainer className="text-center mb-16" animation="fade-up">
          <div className="inline-flex items-center mb-4 justify-center">
            <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
            <span className="text-white font-medium">Our Methodology</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Concept to Completion: Mastering<br />
            Every Step of Your Journey
          </h2>
        </AnimatedContainer>

        

        <div className="relative">
          {/* Main horizontal line */}
          <div className="hidden md:block absolute h-1 bg-gray-400/20 top-1/2 left-[10%] right-[10%] -mt-0.5"></div>

          {/* Top row steps */}
          <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-0">
            {steps.filter((_, i) => i % 2 === 0).map((step, index) => (
              <AnimatedContainer
                key={`top-${index}`}
                className="relative flex flex-col items-center md:w-1/5 mb-12 md:mb-0"
                animation="fade-up"
                delay={200 + index * 200}
              >
                {/* Number */}
                <div
                  className="text-8xl font-bold mb-6 opacity-20 absolute -top-14 left-0 md:left-auto md:relative"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                {/* Content box */}
                <div className="bg-[#3b5998]/70 backdrop-blur-sm rounded-xl p-5 w-full md:w-64 relative z-10 hover:bg-[#3b5998]/90 transition-colors duration-300 h-full">
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-100">{step.description}</p>
                </div>

                {/* Connector dot */}
                <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full border-4 border-gray-100 bg-[#3b5998] z-20"></div>
              </AnimatedContainer>
            ))}
          </div>

          {/* Bottom row steps */}
          <div className="flex flex-col md:flex-row justify-around md:mt-16">
            {steps.filter((_, i) => i % 2 !== 0).map((step, index) => (
              <AnimatedContainer
                key={`bottom-${index}`}
                className="relative flex flex-col items-center md:w-1/5 mb-12 md:mb-0 md:mx-8"
                animation="fade-up"
                delay={300 + index * 200}
              >
                {/* Number */}
                <div
                  className="text-8xl font-bold mb-6 opacity-20 absolute -top-14 left-0 md:left-auto md:relative"
                  style={{ color: step.color }}
                >
                  {step.number}
                </div>

                {/* Content box */}
                <div className="bg-[#3b5998]/70 backdrop-blur-sm rounded-xl p-5 w-full md:w-64 relative z-10 hover:bg-[#3b5998]/90 transition-colors duration-300 h-full">
                  <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-100">{step.description}</p>
                </div>

                {/* Connector dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-gray-100 bg-[#3b5998] z-20"></div>
              </AnimatedContainer>
            ))}
          </div>

          <AnimatedContainer animation="fade-up" delay={1000} className="mt-16 md:mt-24 text-center">
            <p className="max-w-2xl mx-auto text-lg text-gray-200">
              Our proven methodology ensures that your business receives the most appropriate financial guarantee products tailored to your specific needs and objectives.
            </p>
          </AnimatedContainer>

          {/* Dotted connection lines */}
          <div className="hidden md:block absolute left-[25%] top-[50%] w-[50%] h-16 border-l-2 border-r-2 border-b-2 border-dashed border-gray-400/20 rounded-b-xl"></div>
        </div>
      </div>
    </section>
  );
}
