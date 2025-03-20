"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Scarlet Johnson",
      role: "Customer",
      content: "I've been using GlowGenix skincare products for the past few months, and I'm beyond impressed with the results. The GlowGenix line has completely transformed my skincare routine. The products are not only luxurious but also highly effective. My skin feels hydrated, radiant, and more youthful than ever before Plus, the natural ingredients give me peace of mind knowing I'm treating my skin with the best. I can confidently say that GlowGenix skincare has become an essential part of my daily regimen. Highly recommended!",
      avatar: "/images/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Robert Williams",
      role: "Business Owner",
      content: "Working with CTRL+F was a game-changer for my small business. Their financial guarantee products gave me the confidence to pursue larger contracts without the constant worry of cash flow issues. Their team was responsive, professional, and genuinely cared about my business success. I've been able to grow my operations by 40% in just one year thanks to their support. I couldn't ask for a better financial partner!",
      avatar: "/images/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Jennifer Thompson",
      role: "Entrepreneur",
      content: "As a first-time entrepreneur, navigating financial institutions seemed daunting until I found CTRL+F. Their platform simplified the process of securing financial guarantees, which was crucial for my startup. The personalized guidance I received made all the difference. They understood my unique challenges and provided tailored solutions. Thanks to CTRL+F, I secured the funding needed to turn my vision into reality.",
      avatar: "/images/testimonial1.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative w-full h-96 rounded-t-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full opacity-30"></div>
                <div className="absolute -left-24 top-0 w-80 h-80 rounded-full overflow-hidden border-8 border-white">
                  <Image
                    src="/images/testimonial1.jpg"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -right-24 bottom-0 w-80 h-80 rounded-full overflow-hidden border-8 border-white">
                  <Image
                    src="/images/testimonial2.jpg"
                    alt="Client testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:pl-12">
            <div className="inline-flex items-center mb-4">
              <div className="h-1 w-8 bg-[#38b768] mr-2"></div>
              <span className="text-blue-600 font-medium">Testimonials</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Amazing feedbacks<br />
              from our clients
            </h2>

            <div className="mt-8">
              <div className="mb-8">
                <p className="text-gray-600">
                  {testimonials[activeIndex].content}
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>

              <div className="flex mt-8 space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full ${idx === activeIndex ? 'bg-[#f37022]' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
