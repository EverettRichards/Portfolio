import React, { useEffect } from "react";
import Hero from "../components/Hero";
import ResearchOverview from "../components/ResearchOverview";
import LeadershipPreview from "../components/LeadershipPreview";
import SkillsCompact from "../components/SkillsCompact";
import ContactUpdated from "../components/ContactUpdated";
import SectionDots from "../components/SectionDots";
import News from "../components/News";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SectionDots />
      <Hero />
      <News />
      <ResearchOverview />
      <LeadershipPreview />
      <SkillsCompact />
      <ContactUpdated />
    </div>
  );
}
