import React from "react";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative py-12 md:py-16">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 id="contact-title" className="text-2xl md:text-3xl font-semibold mb-3">Contact Us</h2>
        <p className="text-muted-foreground mb-6">Book a tailored walkthrough or discuss integrations with our team.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <a href="#" className="block"><Button className="w-full" variant="outline">Agency Demo</Button></a>
          <a href="#" className="block"><Button className="w-full" variant="outline">Corporate Demo</Button></a>
          <a href="#" className="block"><Button className="w-full" variant="hero">Custom Integrations</Button></a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
