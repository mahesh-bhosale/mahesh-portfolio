import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Skills from "@/components/skills";
import RecentProjects from "@/components/RecentProjects";
import {FloatingNav} from "@/components/ui/FloatingNav";
import { navItems, skillsData, timelineData } from "@/data";
import { Timeline } from "@/components/ui/timeline";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero/>
        <Grid/>
        <RecentProjects />
        <Skills skills={skillsData} />
        <Clients />
        <Experience />
        <Timeline data={timelineData} />
        <Approach />
        <Footer />
      </div>
      
    </main>
  );
}
