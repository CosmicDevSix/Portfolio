import React from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-8 md:px-12 flex justify-between items-center text-white" data-testid="nav-main">
        {/* TODO: Replace with real name or logo */}
        <div className="font-serif text-xl tracking-tight">E.L.</div>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-mono">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#work" className="hover:opacity-60 transition-opacity">Work</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 relative" data-testid="section-hero">
        <div className="max-w-5xl">
          <p className="font-mono text-sm uppercase tracking-widest mb-6 text-muted-foreground reveal text-reveal">
            <span>Senior Design Engineer</span>
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-reveal mb-8">
            {/* TODO: Replace placeholder hero copy */}
            <span>Crafting digital</span>
            <br />
            <span className="reveal-delay-1">experiences with</span>
            <br />
            <span className="reveal-delay-2 text-primary italic">quiet authority.</span>
          </h1>
          <div className="flex items-center gap-6 reveal reveal-delay-3">
            <a 
              href="#work" 
              className="inline-flex items-center gap-3 border border-foreground/20 px-6 py-4 hover:bg-foreground hover:text-background transition-colors duration-500 font-mono text-sm tracking-wide"
              data-testid="link-view-work"
            >
              View Selected Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy / Statement Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-foreground text-background" data-testid="section-philosophy">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif leading-snug reveal">
            {/* TODO: Replace philosophy statement */}
            "Good design is not about decoration. It is about rendering intent visible. I build interfaces that feel inevitable, precise, and profoundly considered."
          </h2>
          <p className="mt-12 font-mono text-sm uppercase tracking-widest text-background/50 reveal reveal-delay-1">
            — Guiding Principle
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 md:py-40 px-6 md:px-12 relative" data-testid="section-about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground sticky top-32 reveal">
              01 / Background
            </h2>
          </div>
          <div className="md:col-span-8 reveal reveal-delay-1">
            <div className="prose prose-lg prose-p:font-sans prose-p:font-light prose-p:text-foreground/80 prose-p:leading-relaxed max-w-none">
              {/* TODO: Replace about copy */}
              <p className="text-2xl md:text-3xl font-serif text-foreground leading-snug mb-12">
                With over a decade of experience bridging the gap between design and engineering, I specialize in building complex applications that feel remarkably simple.
              </p>
              <p>
                My background in classical graphic design informs my approach to software architecture. I believe that performance is an aesthetic quality, and that the best codebases reflect the clarity of the interfaces they produce. I have led frontend teams at industry-defining startups, establishing design systems and engineering cultures rooted in craftsmanship.
              </p>
              <p>
                Currently, I am focused on tools for thought, financial infrastructure, and platforms that empower creative professionals.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-12 border-t border-border pt-12">
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">Expertise</h3>
                <ul className="space-y-3 font-sans font-light">
                  {/* TODO: Replace expertise list */}
                  <li>Design Systems Architecture</li>
                  <li>React & TypeScript Mastery</li>
                  <li>Performance Optimization</li>
                  <li>Motion & Interaction Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-6">Experience</h3>
                <ul className="space-y-3 font-sans font-light">
                  {/* TODO: Replace experience list */}
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Acme Corp</span>
                    <span className="text-muted-foreground">2020 — Pres</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Nexus Global</span>
                    <span className="text-muted-foreground">2017 — 2020</span>
                  </li>
                  <li className="flex justify-between border-b border-border/50 pb-2">
                    <span>Studio Studio</span>
                    <span className="text-muted-foreground">2014 — 2017</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 md:py-40 px-6 md:px-12 bg-secondary/30" data-testid="section-projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-24 reveal">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              02 / Selected Works
            </h2>
          </div>

          <div className="space-y-32">
            {/* Project 1 */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group" data-testid="project-1">
              <div className="lg:col-span-7 overflow-hidden reveal">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  <img 
                    src="/project-1.png" 
                    alt="Fintech Dashboard" 
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                </a>
              </div>
              <div className="lg:col-span-5 lg:pl-12 reveal reveal-delay-1">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Fintech / Dashboard</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  {/* TODO: Replace project title */}
                  Aura Financial
                </h3>
                <p className="text-foreground/70 font-light mb-8 leading-relaxed">
                  {/* TODO: Replace project description */}
                  A complete reimagining of the institutional trading interface. Reducing cognitive load through severe minimalism while surfacing critical real-time data.
                </p>
                <a 
                  href="https://example.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
                >
                  View Live Site <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group" data-testid="project-2">
              <div className="lg:col-span-7 lg:order-2 overflow-hidden reveal">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  <img 
                    src="/project-2.png" 
                    alt="Editorial E-commerce" 
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                </a>
              </div>
              <div className="lg:col-span-5 lg:order-1 lg:pr-12 reveal reveal-delay-1">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">E-Commerce / Editorial</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  {/* TODO: Replace project title */}
                  Maison Object
                </h3>
                <p className="text-foreground/70 font-light mb-8 leading-relaxed">
                  {/* TODO: Replace project description */}
                  An experiential commerce platform blurring the line between digital editorial and retail. Custom WebGL transitions and fluid typography scaling.
                </p>
                <a 
                  href="https://example.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
                >
                  View Live Site <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group" data-testid="project-3">
              <div className="lg:col-span-7 overflow-hidden reveal">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  <img 
                    src="/project-3.png" 
                    alt="Brand Identity" 
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                  />
                </a>
              </div>
              <div className="lg:col-span-5 lg:pl-12 reveal reveal-delay-1">
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">Brand / Identity</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-6">
                  {/* TODO: Replace project title */}
                  Vela Studio
                </h3>
                <p className="text-foreground/70 font-light mb-8 leading-relaxed">
                  {/* TODO: Replace project description */}
                  A comprehensive digital identity for a boutique architecture firm. Emphasizing space, proportion, and structural rhythm in the browser.
                </p>
                <a 
                  href="https://example.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
                >
                  View Live Site <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process / Approach Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 border-t border-border" data-testid="section-process">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
             <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground reveal">
              03 / Approach
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              <div className="reveal">
                <h3 className="font-serif text-2xl mb-4">Discover & Define</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Every project begins with radical listening. Understanding the core business objectives, user constraints, and unspoken needs before writing a single line of code.
                </p>
              </div>
              <div className="reveal reveal-delay-1">
                <h3 className="font-serif text-2xl mb-4">Design System</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Establishing the primitives—typography, spacing, color logic—that form the foundation of a scalable, maintainable application architecture.
                </p>
              </div>
              <div className="reveal">
                <h3 className="font-serif text-2xl mb-4">Engineering</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  Building with intent. Leveraging modern React paradigms, precise state management, and semantic HTML to create fast, accessible interfaces.
                </p>
              </div>
              <div className="reveal reveal-delay-1">
                <h3 className="font-serif text-2xl mb-4">Polish & Motion</h3>
                <p className="text-foreground/70 font-light leading-relaxed">
                  The final 10% takes 90% of the time. Choreographing interactions, optimizing paint performance, and ensuring every state feels considered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section & Footer */}
      <section id="contact" className="pt-32 pb-12 px-6 md:px-12 bg-foreground text-background" data-testid="section-contact">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 max-w-3xl reveal">
            <h2 className="text-xs font-mono uppercase tracking-widest text-background/50 mb-8">
              04 / Contact
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif mb-12">
              Let's build something enduring.
            </h3>
            {/* TODO: Replace email address */}
            <a 
              href="mailto:hello@example.com" 
              className="inline-flex items-center gap-4 text-xl md:text-2xl font-light hover:text-primary transition-colors border-b border-background/20 pb-2"
              data-testid="link-email"
            >
              hello@example.com
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pt-12 border-t border-background/20 reveal reveal-delay-1">
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-background/50 mb-4">Location</p>
              {/* TODO: Replace location */}
              <p className="flex items-center gap-2 font-light">
                <MapPin className="w-4 h-4 text-primary" />
                San Francisco, CA / Remote
              </p>
            </div>
            
            <div className="flex gap-8">
              {/* TODO: Replace social links */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-background/70 hover:text-white transition-colors" data-testid="link-social-twitter">
                <SiX className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-background/70 hover:text-white transition-colors" data-testid="link-social-linkedin">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-background/70 hover:text-white transition-colors" data-testid="link-social-github">
                <SiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-24 text-center md:text-left text-sm font-mono text-background/40 reveal">
             {/* TODO: Replace copyright name */}
            &copy; {new Date().getFullYear()} E.L. All rights reserved.
          </div>
        </div>
      </section>
      
    </div>
  );
}
