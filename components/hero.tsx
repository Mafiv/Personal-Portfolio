"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1FPGKSdlrlqxfd2ZKMZyXvQj-5PjnvLjB/view?usp=drive_link";
    window.open(cvUrl, "_blank"); // opens in new tab
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="block">MIRAF AMARE</span>
            <span className="text-primary block mt-2">
              FULLSTACK DEV | UI/UX DESIGNER
            </span>
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Versatile Full Stack Developer and UI/UX Designer with a strong
            foundation in Computer Science and a passion for crafting intuitive,
            user-centered digital experiences. Skilled in translating complex
            requirements into elegant designs and robust applications, bridging
            the gap between design aesthetics and technical implementation.
            Proficient in frontend and backend development, with a collaborative
            approach to building seamless, high-performing products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToContact}>
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={handleDownloadCV}>
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/miraf.jpg')" }}
              aria-label="Abraham Demsew - UI/UX Designer & Frontend Developer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
