import Categories from "@/components/Categories";
import CTA from "@/components/CTA";
import FeaturedBooks from "@/components/FeaturedBooks";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import UploadSection from "@/components/UploadSection";

const cardD = {
        id: 14,
        title: 'Psychology Today',
        author: 'Dr. Jennifer Walsh',
        pages: 412,
        language: 'English',
        category: 'Psychology',
        rating: 4.8,
        readers: '19.3K',
        cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
        description: 'Understanding human behavior, cognitive processes, and practical applications in daily life.',
      }

export default function Home() {
  return (
     <div className="min-h-screen">
      {/* <Header /> */}
      <Hero />
      <Features />
      <FeaturedBooks />
      <Categories />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </div>
  );
}
