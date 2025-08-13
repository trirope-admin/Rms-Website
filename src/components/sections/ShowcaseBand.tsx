import React from "react";
import heroImg from "@/assets/trirop-hero.jpg";
import { ShieldCheck, Zap, Layers } from "lucide-react";
import showcasebg from "@/assets/images/curve design.png"
import bgbannerimg from "@/assets/images/1233.png";
import bgbannerinsideimg from "@/assets/images/ActiveApplicant.png";

const ShowcaseBand = () => {
  return (
    <section id="showcase" aria-labelledby="showcase-title" className="relative py-12 md:py-16  overflow-hidden"
    style={{backgroundImage:`url(${showcasebg})`}}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 surface-gradient opacity-50" />
      <div className="container mx-auto relative grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 id="showcase-title" className="text-2xl md:text-3xl font-semibold mb-4">
            Work beautifully in a modern HRMS
          </h2>
          <p className="text-muted-foreground mb-6 max-w-prose">
            Trirope combines clean visuals with fast workflows. See key data, move candidates, and take action without friction.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-md bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow shrink-0"><Zap /></span>
              <div>
                <div className="font-medium text-foreground">Instant overview</div>
                <div>Critical metrics and pipelines at-a-glance.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-md bg-secondary text-secondary-foreground flex items-center justify-center shrink-0"><ShieldCheck /></span>
              <div>
                <div className="font-medium text-foreground">Roles & permissions</div>
                <div>Granular control that scales with your org.</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-9 w-9 rounded-md bg-accent text-accent-foreground flex items-center justify-center shrink-0"><Layers /></span>
              <div>
                <div className="font-medium text-foreground">Context-rich screens</div>
                <div>Everything you need on each page—no busywork.</div>
              </div>
            </li>
          </ul>
        </div>

      <div className="relative flex justify-center items-center">
  {/* Large Background Card */}
  <div
    style={{
      backgroundImage: `url(${bgbannerimg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    className="relative py-4 px-4 md:py-6 md:px-11 rounded-xl tilt-soft w-[90%] md:w-[80%] lg:w-[70%]"
  >
    <img
      src={bgbannerinsideimg}
      alt="Trirope HRMS dashboard mockup with analytics and candidate pipeline"
      className="w-full h-auto"
      loading="eager"
    />
  </div>

  {/* Smaller Overlapping Card */}
  <div
    style={{
      backgroundImage: `url(${bgbannerimg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
    className="absolute 
               w-[70%] sm:w-[55%] md:w-[40%] lg:w-[55%] 
               sm:top-[50%] md:top-[35%] 
               left-[15%] sm:left-[25%] md:left-[40%] 
               py-4 px-4 md:py-6 md:px-9 rounded-xl tilt-soft"
  >
    <img
      src={bgbannerinsideimg}
      alt="Trirope HRMS dashboard mockup with analytics and candidate pipeline"
      className="w-full h-auto"
      loading="eager"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default ShowcaseBand;
