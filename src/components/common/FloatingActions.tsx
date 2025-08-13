import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingActions: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop((window.scrollY || 0) > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat (scrolls to contact section) */}
      <a href="#contact" className="block">
        <Button variant="hero" size="lg" aria-label="Chat with us" className="gap-2">
          <MessageCircle /> <span>Chat</span>
        </Button>
      </a>

      {/* Back to Top */}
      <div className={`transition-opacity ${showTop ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Button variant="secondary" size="icon" onClick={scrollTop} aria-label="Back to Top">
          <ArrowUp />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActions;
