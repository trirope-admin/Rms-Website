import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X } from "lucide-react";
import { Rocket, Users, Wallet, Quote } from "lucide-react";
import heroImg from "@/assets/images/TriropeHRMSdashboard.png";
import bgheroimg from '@/assets/images/Container.png'
import Clients from "@/components/sections/Clients";
import ProductBlocks from "@/components/sections/ProductBlocks";
import FeatureHighlights from "@/components/sections/FeatureHighlights";
import ContactUs from "@/components/sections/ContactUs";
import ShowcaseBand from "@/components/sections/ShowcaseBand";
import SoftBackground from "@/components/visuals/SoftBackground";
import ScrollBackground from "@/components/visuals/ScrollBackground";
import FloatingActions from "@/components/common/FloatingActions";
import Reveal from "@/components/visuals/Reveal";

import bgbannerimg from "@/assets/images/1233.png";
import bgbannerinsideimg from "@/assets/images/ActiveApplicant.png";
import logo from "@/assets/images/logo.png"

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Trirope HRMS Product Portal",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Trirope RECRUIT",
        "url": "/#recruit",
        "brand": { "@type": "Brand", "name": "Trirope" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock" }
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Trirope STAFF",
        "url": "/#staff",
        "brand": { "@type": "Brand", "name": "Trirope" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/PreOrder" }
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Trirope PAYABLES",
        "url": "/#payables",
        "brand": { "@type": "Brand", "name": "Trirope" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/PreOrder" }
      }
    ]
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

    const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const links = [
    { href: "#clients", label: "Clients" },
    { href: "#products", label: "Products" },
    { href: "#features", label: "Features" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];
 const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setMenuOpen(false)
  }
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* <ScrollBackground /> */}
      {/* Ambient gradient surface */}
      {/* <div aria-hidden className="pointer-events-none absolute inset-0 surface-gradient opacity-60" /> */}

      {/* Sticky Header */}
       <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <div className="w-28 rounded-md shadow-glow">
            <img src={logo || "/placeholder.svg"} alt="Trirope logo" className="w-full" />
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-base story-link  font-medium transition-colors duration-200 hover:text-red-600 ${
                activeLink === link.href ? "text-red-600" : "text-gray-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-3">
          <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
            HRMS
          </Badge>
          <a href="#recruit">
            <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700">
              Explore Recruit
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  menuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  menuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown - Right to Left Animation */}
      <div
        className={`md:hidden fixed top-[81px] right-0 w-full h-[calc(100vh-81px)] bg-white shadow-xl border-l border-gray-200 transition-all duration-300 ease-in-out transform z-40 ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-2 h-full ">
          {/* Mobile Menu Links */}
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`text-left py-4 px-4 rounded-lg transition-all duration-300 ease-out transform ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              } hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${
                activeLink === link.href ? "text-red-600 bg-red-50" : "text-gray-700"
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <span className="text-base font-medium">{link.label}</span>
            </a>
          ))}

          {/* Mobile Menu Actions */}
          <div
            className={`flex flex-col gap-4 pt-6 mt-4 border-t border-gray-200 transition-all duration-300 ease-out transform ${
              menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
            style={{
              transitionDelay: menuOpen ? `${links.length * 50}ms` : "0ms",
            }}
          >
            <Badge variant="secondary" className="w-fit bg-gray-100 text-gray-700">
              HRMS
            </Badge>
            <a href="#recruit" className="w-fit">
              <Button variant="default" size="sm" className="bg-red-600 hover:bg-red-700">
                Explore Recruit
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Backdrop Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-30 top-[81px]" onClick={() => setMenuOpen(false)} />
      )}
    </header>

      <main className="pt-16 md:pt-18">
        {/* Hero */}
        <section
          id="clients"
          className="relative pt-12 md:pt-20 pb-6 md:pb-10 bg-no-repeat"
          style={{
            backgroundImage: `url(${bgheroimg})`,
            backgroundSize: "contain",
          }}
        >
          {/* <SoftBackground variant="hero" /> */}
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* <Reveal> */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                <span className="text-gradient-primary">Trirope HRMS Product Portal</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
                Recruit is live today. STAFF and PAYABLES are on the way—beautiful, reliable, and built for growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center md:items-start gap-3">
                <a href="#recruit">
                  <Button variant="hero" size="xl">Explore Recruit</Button>
                </a>
                <a href="#products">
                  <Button variant="outline" size="xl">View All Products</Button>
                </a>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto md:mx-0 text-center md:text-left">
                <div>
                  <div className="text-2xl font-semibold">400+</div>
                  <div className="text-muted-foreground text-sm">Applicants Tracked</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">250+</div>
                  <div className="text-muted-foreground text-sm">Teams Interested</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold">99.9%</div>
                  <div className="text-muted-foreground text-sm">Uptime</div>
                </div>
              </div>
            </div>
            {/* </Reveal> */}

            <div className="relative">
              <div
                style={{
                  backgroundImage: `url(${bgbannerimg})`,
                  backgroundSize: "cover", // change to "cover" if you want it to fill
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className="relative  py-6 px-11 rounded-xl tilt-soft"
              >
                <img
                  src={bgbannerinsideimg}
                  alt="Trirope HRMS dashboard mockup with analytics and candidate pipeline"
                  className="w-full  "
                  loading="eager"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Clients */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Clients</h2>
        <Reveal delay={0.05}><Clients /></Reveal>

        {/* Our Products */}
        <section id="products" className="relative py-12 md:py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our Products</h2>
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* RECRUIT */}
              <a id="recruit" href="#recruit" className="block">
                <article className="group rounded-lg border border-border bg-card text-card-foreground p-6 md:p-8 transition-transform tilt-soft hover-scale hover:shadow-glow transform-gpu">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-md bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground">
                      <Rocket />
                    </div>
                    <Badge className="bg-gradient-primary">Available Now</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trirope RECRUIT</h3>
                  <p className="text-sm text-muted-foreground">Find, evaluate, and hire faster with a modern pipeline.</p>
                </article>
              </a>

              {/* STAFF */}
              <a id="staff" href="#staff" className="block">
                <article className="group rounded-lg border border-border bg-card text-card-foreground p-6 md:p-8 transition-transform tilt-soft hover-scale hover:shadow-glow transform-gpu">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground">
                      <Users />
                    </div>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trirope STAFF</h3>
                  <p className="text-sm text-muted-foreground">Core HR, attendance, and people ops in one place.</p>
                </article>
              </a>

              {/* PAYABLES */}
              <a id="payables" href="#payables" className="block">
                <article className="group rounded-lg border border-border bg-card text-card-foreground p-6 md:p-8 transition-transform tilt-soft hover-scale hover:shadow-glow transform-gpu">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-md bg-secondary flex items-center justify-center text-secondary-foreground">
                      <Wallet />
                    </div>
                    <Badge variant="secondary">Coming Soon</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Trirope PAYABLES</h3>
                  <p className="text-sm text-muted-foreground">Expenses and payouts simplified for finance teams.</p>
                </article>
              </a>
            </div>
          </div>
        </section>

        {/* Bold Showcase */}
        <Reveal delay={0.1}><ShowcaseBand /></Reveal>

        {/* Product Detail Blocks */}
        <Reveal delay={0.12}><ProductBlocks /></Reveal>

        {/* Feature Highlights */}
        <Reveal delay={0.14}><FeatureHighlights /></Reveal>

        {/* Testimonials */}
        <section id="testimonials" className="relative py-12 md:py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Trusted by forward-thinking teams</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <article key={i} className="rounded-lg border border-border bg-card p-6">
                  <Quote className="mb-3 opacity-60" />
                  <p className="text-sm text-muted-foreground">“Trirope keeps our hiring and people ops beautifully organized.”</p>
                  <div className="mt-4 text-sm">— Happy customer</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section id="contact">
          <Reveal delay={0.16}><ContactUs /></Reveal>
        </section>
      </main>

      <FloatingActions />

      <footer className="container mx-auto py-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Trirope. All rights reserved.
      </footer>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );

};

export default Index;
