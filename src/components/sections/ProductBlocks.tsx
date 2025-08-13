import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/trirop-hero.jpg";
import SoftBackground from "@/components/visuals/SoftBackground";

interface ProductFeatureBlockProps {
  id: string;
  title: string;
  status?: "available" | "soon";
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  reverse?: boolean;
}

const ProductFeatureBlock = ({ id, title, status = "available", features, ctaLabel, ctaHref, reverse }: ProductFeatureBlockProps) => (
  <article id={id} className="grid md:grid-cols-2 gap-8 items-center py-10">
    <div className={reverse ? "order-2 md:order-1" : "order-1"}>
      <img
        src={heroImg}
        alt={`${title} product mockup UI screenshot`}
        className="w-full rounded-xl border border-border shadow-glow tilt-soft hover-scale"
        loading="lazy"
      />
    </div>
    <div className={reverse ? "order-1 md:order-2" : "order-2"}>
      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
        {status === "available" ? (
          <Badge>Available Now</Badge>
        ) : (
          <Badge variant="secondary">Coming Soon</Badge>
        )}
      </div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 leading-relaxed">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <a href={ctaHref}>
          <Button variant={status === "available" ? "hero" : "outline"}>{ctaLabel}</Button>
        </a>
      </div>
    </div>
  </article>
);

const ProductBlocks = () => {
  return (
    <section id="product-details" aria-labelledby="product-details-title" className="relative py-12 md:py-16">
      <SoftBackground variant="section" />
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="h-2 w-2 rounded-full bg-primary" aria-hidden></span>
          <span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden></span>
        </div>
        <h2 id="product-details-title" className="text-2xl md:text-3xl font-semibold text-center">Trirope RECRUIT</h2>
        <p className="text-center text-muted-foreground mt-2 mb-6">Ready-to-use modules that power a modern HRMS experience.</p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <Button size="sm" variant="hero">Recruit</Button>
          <Button size="sm" variant="outline">Vacancy</Button>
          <Button size="sm" variant="outline">Applicants</Button>
          <Button size="sm" variant="outline">Interview</Button>
          <Button size="sm" variant="outline">Onboarding</Button>
          <Button size="sm" variant="outline">AI Reports</Button>
          <Button size="sm" variant="outline">Customize</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-border bg-card text-card-foreground p-4">
            <img
              src={heroImg}
              alt="Recruit module UI"
              className="w-full rounded-lg border border-border shadow-glow"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
            />
            <div className="mt-3 text-center">
              <div className="font-medium">Recruit</div>
              <div className="text-xs text-muted-foreground">Visual pipeline, automations, and scheduling</div>
            </div>
          </article>

          <article className="rounded-xl border border-border bg-card text-card-foreground p-4">
            <img
              src={heroImg}
              alt="Staff module UI"
              className="w-full rounded-lg border border-border"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
            />
            <div className="mt-3 text-center">
              <div className="font-medium">Staff</div>
              <div className="text-xs text-muted-foreground">Profiles, attendance, leave and shifts</div>
              <div className="mt-2"><Badge variant="secondary">Coming Soon</Badge></div>
            </div>
          </article>

          <article className="rounded-xl border border-border bg-card text-card-foreground p-4">
            <img
              src={heroImg}
              alt="Payables module UI"
              className="w-full rounded-lg border border-border"
              loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/placeholder.svg'; }}
            />
            <div className="mt-3 text-center">
              <div className="font-medium">Payables</div>
              <div className="text-xs text-muted-foreground">Expenses, reimbursements, and payouts</div>
              <div className="mt-2"><Badge variant="secondary">Coming Soon</Badge></div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProductBlocks;
