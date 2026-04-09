import React from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { ArrowRight, Mail, MapPin, ExternalLink } from "lucide-react";
import { SiGithub, SiX } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Navigation ──────────────────────────────────────── */}
      <nav
        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border"
        data-testid="nav-main"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* TODO: Replace initials / logo */}
          <span className="font-serif text-lg tracking-tight text-foreground">E.L.</span>
          <div className="flex items-center gap-8 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
            <a href="#about"   className="hover:text-foreground transition-colors" data-testid="nav-about">About</a>
            <a href="#work"    className="hover:text-foreground transition-colors" data-testid="nav-work">Work</a>
            <a href="#contact" className="hover:text-foreground transition-colors" data-testid="nav-contact">Contact</a>
            {/* TODO: Replace email */}
            <a
              href="mailto:hello@example.com"
              className="ml-4 px-4 py-2 bg-primary text-primary-foreground text-[11px] font-mono uppercase tracking-widest hover:opacity-90 transition-opacity"
              data-testid="nav-cta"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section
        className="pt-40 pb-32 px-6 md:px-12 border-b border-border"
        data-testid="section-hero"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-end">
          <div className="md:col-span-8">
            {/* TODO: Replace role title */}
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary mb-6 reveal">
              Senior Design Engineer
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground reveal reveal-delay-1">
              {/* TODO: Replace hero headline */}
              Building products that feel inevitable.
            </h1>
          </div>
          <div className="md:col-span-4 reveal reveal-delay-2">
            <p className="text-muted-foreground font-light leading-relaxed mb-8 text-base">
              {/* TODO: Replace tagline */}
              I bridge design and engineering to create digital experiences that are precise, performant, and profoundly considered.
            </p>
            <a
              href="#work"
              className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 font-mono text-xs uppercase tracking-widest hover:bg-primary transition-colors duration-200"
              data-testid="link-view-work"
            >
              View Selected Work
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Credentials bar ─────────────────────────────────── */}
      <section className="border-b border-border bg-muted/40 reveal" data-testid="section-credentials">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-wrap gap-x-16 gap-y-3 items-center">
          {/* TODO: Replace credential items */}
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">10+ Years Experience</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">40+ Projects Delivered</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Fintech / SaaS / Brand</span>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </span>
          </div>
        </div>
      </section>

      {/* ── About ───────────────────────────────────────────── */}
      <section id="about" className="py-28 px-6 md:px-12 border-b border-border" data-testid="section-about">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sticky top-24 reveal">
              01 — Background
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="reveal reveal-delay-1">
              <p className="font-serif text-3xl md:text-4xl leading-snug text-foreground mb-10">
                {/* TODO: Replace about headline */}
                With over a decade bridging design and engineering, I build complex systems that feel remarkably simple.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-6 max-w-2xl">
                {/* TODO: Replace about body */}
                My background in graphic design informs every architectural decision I make. I believe performance is an aesthetic quality — the best codebases reflect the clarity of the interfaces they produce. I have led frontend teams at industry-defining startups, establishing design systems and engineering cultures rooted in craftsmanship.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">
                Currently focused on tools for thought, financial infrastructure, and platforms that empower creative professionals.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10 pt-12 border-t border-border reveal reveal-delay-2">
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-5">Expertise</h3>
                <ul className="space-y-2.5 text-sm font-light text-foreground/80">
                  {/* TODO: Replace expertise list */}
                  <li>Design Systems</li>
                  <li>React &amp; TypeScript</li>
                  <li>Performance Engineering</li>
                  <li>Motion &amp; Interaction</li>
                  <li>Accessibility (WCAG AA)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-5">Experience</h3>
                <ul className="space-y-3 text-sm font-light">
                  {/* TODO: Replace experience list */}
                  <li className="flex justify-between gap-4">
                    <span>Acme Corp</span>
                    <span className="text-muted-foreground font-mono text-xs">2020 — Now</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Nexus Global</span>
                    <span className="text-muted-foreground font-mono text-xs">2017 — 2020</span>
                  </li>
                  <li className="flex justify-between gap-4">
                    <span>Studio Studio</span>
                    <span className="text-muted-foreground font-mono text-xs">2014 — 2017</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-5">Education</h3>
                <ul className="space-y-2.5 text-sm font-light">
                  {/* TODO: Replace education */}
                  <li>B.F.A. Graphic Design</li>
                  <li className="text-muted-foreground">RISD, 2014</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Work ───────────────────────────────────── */}
      <section id="work" className="py-28 px-6 md:px-12 border-b border-border" data-testid="section-projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16 reveal">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              02 — Selected Works
            </p>
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">3 Projects</span>
          </div>

          <div className="space-y-0 divide-y divide-border">
            {/* Project 1 */}
            <article
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 group py-16 first:pt-0"
              data-testid="project-card-1"
            >
              <div className="lg:col-span-7 overflow-hidden reveal">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src="/project-1.png"
                    alt="Aura Financial Dashboard"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>
              </div>
              <div className="lg:col-span-5 lg:pl-16 flex flex-col justify-center reveal reveal-delay-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">Fintech / Dashboard</p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {/* TODO: Replace project title */}
                  Aura Financial
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm max-w-md">
                  {/* TODO: Replace project description */}
                  A complete reimagining of the institutional trading interface. Reducing cognitive load through severe minimalism while surfacing critical real-time data at a glance.
                </p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline underline-offset-4"
                  data-testid="project-link-1"
                >
                  View Case Study <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 group py-16"
              data-testid="project-card-2"
            >
              <div className="lg:col-span-7 lg:order-2 overflow-hidden reveal">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src="/project-2.png"
                    alt="Maison Object E-Commerce"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>
              </div>
              <div className="lg:col-span-5 lg:order-1 lg:pr-16 flex flex-col justify-center reveal reveal-delay-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">E-Commerce / Editorial</p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {/* TODO: Replace project title */}
                  Maison Object
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm max-w-md">
                  {/* TODO: Replace project description */}
                  An experiential commerce platform blurring the line between digital editorial and retail. Custom transitions and fluid typography scaling throughout.
                </p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline underline-offset-4"
                  data-testid="project-link-2"
                >
                  View Case Study <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 group py-16"
              data-testid="project-card-3"
            >
              <div className="lg:col-span-7 overflow-hidden reveal">
                <a href="https://example.com" target="_blank" rel="noreferrer" className="block relative aspect-[16/10] overflow-hidden bg-muted">
                  <img
                    src="/project-3.png"
                    alt="Vela Studio Brand"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </a>
              </div>
              <div className="lg:col-span-5 lg:pl-16 flex flex-col justify-center reveal reveal-delay-1">
                <p className="font-mono text-[11px] uppercase tracking-widest text-primary mb-3">Brand / Identity</p>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {/* TODO: Replace project title */}
                  Vela Studio
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm max-w-md">
                  {/* TODO: Replace project description */}
                  A comprehensive digital identity for a boutique architecture firm. Emphasizing space, proportion, and structural rhythm in the browser.
                </p>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:underline underline-offset-4"
                  data-testid="project-link-3"
                >
                  View Case Study <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ── Approach ────────────────────────────────────────── */}
      <section className="py-28 px-6 md:px-12 bg-muted/30 border-b border-border" data-testid="section-process">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground sticky top-24 reveal">
              03 — Approach
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { title: "Discover & Define", body: "Every project begins with radical listening — understanding business objectives, user constraints, and unspoken needs before writing a single line of code.", delay: "" },
                { title: "Design System First", body: "Establishing the primitives — typography, spacing, color logic — that form the foundation of a scalable, maintainable application.", delay: "reveal-delay-1" },
                { title: "Engineering with Intent", body: "Leveraging modern React paradigms, precise state management, and semantic HTML to create fast, accessible, and production-ready interfaces.", delay: "" },
                { title: "Polish & Motion", body: "The final 10% takes 90% of the time. Choreographing interactions, optimizing paint performance, and ensuring every state feels considered.", delay: "reveal-delay-1" },
              ].map(({ title, body, delay }) => (
                <div key={title} className={`reveal ${delay}`}>
                  <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="contact" className="py-28 px-6 md:px-12 border-b border-border" data-testid="section-contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground reveal">
              04 — Contact
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="reveal reveal-delay-1">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-10">
                {/* TODO: Replace contact headline */}
                Let's build something enduring.
              </h2>
              {/* TODO: Replace email */}
              <a
                href="mailto:hello@example.com"
                className="group inline-flex items-center gap-3 font-sans text-xl md:text-2xl font-light text-foreground hover:text-primary transition-colors duration-200 mb-16"
                data-testid="link-email"
              >
                hello@example.com
                <Mail className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <div className="pt-10 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 reveal reveal-delay-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-light">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {/* TODO: Replace location */}
                San Francisco, CA — Open to Remote
              </div>
              <div className="flex items-center gap-6">
                {/* TODO: Replace social links */}
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-social-twitter">
                  <SiX className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-social-linkedin">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-social-github">
                  <SiGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="px-6 md:px-12 py-6" data-testid="footer">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* TODO: Replace copyright name */}
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} E.L. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
            Built with precision.
          </p>
        </div>
      </footer>

    </div>
  );
}
