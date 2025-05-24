import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              Miraf<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Fullstack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href="mailto:mirafamare4@gmail.com"
              className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Mafiv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/miraf-amare"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} Miraf Amare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
