"use client"

import { useState, useEffect, useCallback } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleNavClick = useCallback((href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm dark:bg-background/90" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold hover:opacity-80 transition-opacity"
          aria-label="Navigate to home"
        >
          Miraf<span className="text-primary">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_LINKS.map(({ name, href }) => (
            <button
              key={name}
              onClick={() => handleNavClick(href)}
              className="text-sm font-medium hover:text-primary transition-colors"
              aria-label={`Navigate to ${name}`}
            >
              {name}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle navigation menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md dark:bg-background/95">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {NAV_LINKS.map(({ name, href }) => (
              <button
                key={name}
                onClick={() => handleNavClick(href)}
                className="text-sm font-medium py-2 hover:text-primary transition-colors text-left"
                aria-label={`Navigate to ${name}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
