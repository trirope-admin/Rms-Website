import React from "react";

const Clients = () => {
  return (
    <section id="clients" aria-labelledby="clients-title" className="relative py-8 md:py-10 border-t border-b border-border">
      <div className="container mx-auto">
        <h2 id="clients-title" className="sr-only">Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6 text-muted-foreground">
          <span className="text-xs md:text-sm tracking-wider uppercase opacity-80">Acme Corp</span>
          <span className="text-xs md:text-sm tracking-wider uppercase opacity-80">Globex</span>
          <span className="text-xs md:text-sm tracking-wider uppercase opacity-80">Initech</span>
          <span className="text-xs md:text-sm tracking-wider uppercase opacity-80">Umbrella</span>
          <span className="text-xs md:text-sm tracking-wider uppercase opacity-80">Stark</span>
          <span className="text-xs md:text-sm tracking-wider uppercase opacity-80">Wayne</span>
        </div>
      </div>
    </section>
  );
};

export default Clients;
