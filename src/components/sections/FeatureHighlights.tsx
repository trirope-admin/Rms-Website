import React from "react";
import heroImg from "@/assets/trirop-hero.jpg";
import { Zap, Settings, ShieldCheck, Brain } from "lucide-react";

const features = [
  { icon: Zap, title: "Streamlined Process", desc: "From sourcing to decision in fewer clicks." },
  { icon: Settings, title: "Configurable Framework", desc: "Tailor stages, forms, and policies to your org." },
  { icon: ShieldCheck, title: "Granular Access Control", desc: "Roles and permissions built for scale." },
  { icon: Brain, title: "AI Enabled", desc: "Insights, summaries, and smart suggestions." },
];

const FeatureHighlights = () => {
  return (
    <section id="features" aria-labelledby="features-title" className="relative py-12 md:py-16 bg-primary/5">
      <div aria-hidden className="pointer-events-none absolute inset-0 surface-gradient opacity-40" />
      <div className="container mx-auto relative grid md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={heroImg}
            alt="HRMS feature highlight mockups"
            className="w-full rounded-xl border border-border shadow-glow"
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
          />
        </div>
        <div>
          <h2 id="features-title" className="text-2xl md:text-3xl font-semibold mb-6">Feature Highlights</h2>
          <ul className="space-y-4">
            {features.map(({ icon: Icon, title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-md bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow shrink-0">
                  <Icon />
                </div>
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
