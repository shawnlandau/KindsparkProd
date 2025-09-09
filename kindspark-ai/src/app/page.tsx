import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { SuccessStories } from "@/components/sections/success-stories";
import { Roadmap } from "@/components/sections/roadmap";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <SuccessStories />
      <Roadmap />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
