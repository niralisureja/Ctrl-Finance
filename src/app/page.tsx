import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SecuritySection from "@/components/sections/SecuritySection";
import MethodologySection from "@/components/sections/MethodologySection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import StorySection from "@/components/sections/StorySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SecuritySection />
      <MethodologySection />
      <LeadershipSection />
      <StorySection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
}
