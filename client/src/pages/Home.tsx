import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ArrowRight, Building2, Handshake, TrendingUp, Users, Cpu, Shield } from "lucide-react";
import heroBg from "@assets/hero-infrastructure.jpg_1782353483699.jpg";

const whatWeDoCards = [
  {
    icon: Handshake,
    title: "A real exit option for founders who care",
    content:
      "You built this over decades. You know the PE horror stories — gut the team, slash costs, flip it in three years. We're not that. We're operators who buy good businesses and make them better without destroying what made them work. If you care about what happens after you sign, we should talk.",
  },
  {
    icon: TrendingUp,
    title: "Operational capital for businesses ready for their next chapter",
    content:
      "Some businesses don't need a turnaround — they need the right buyer. We acquire good businesses in essential industries and bring the operational and technology expertise to help them reach their full potential. Not consultants who leave you with a deck. Operators who roll up their sleeves.",
  },
  {
    icon: Building2,
    title: "Long-term ownership for mission-critical sectors",
    content:
      "Infrastructure. Utilities. Environmental services. Transportation. These businesses keep society running. They deserve owners who understand their importance and invest accordingly — not financial engineers looking for a quick multiple arbitrage.",
  },
];

const whyNostraPillars = [
  {
    icon: Users,
    title: "We've Sat in Your Seat",
    content:
      "We've scaled teams from 5 to 25. Hit payroll during tough months. Built systems that actually work. Made hard calls on people and products. Our investment approach is shaped by operational reality, not spreadsheet assumptions. When we underwrite a business, we're thinking about what it takes to run it — because we plan to.",
  },
  {
    icon: Cpu,
    title: "Technology as a Force Multiplier",
    content:
      "Essential services businesses are underserved by technology — not because the tools don't exist, but because implementation requires someone who understands both the tech and the operational context. We've done this work hands-on. We bring the playbook, not just the capital.",
  },
  {
    icon: Shield,
    title: "Legacy-Aligned Partnership",
    content:
      "We're not buying your business to flip it in three years. We're looking for companies we can own, operate, and grow for the long term. Your employees, your customers, your reputation — these matter to us because we plan to live with the consequences of how we treat them.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Nostra Group | Operational Partnership for Essential Businesses"
        description="We partner with founders of mission-critical businesses who've built something worth preserving. Veteran-led independent sponsor acquiring and operating essential businesses for the long term."
        ogDescription="We partner with founders of mission-critical businesses who've built something worth preserving. Veteran-led independent sponsor acquiring and operating essential businesses for the long term."
      />

      <section
        className="relative py-28 lg:py-44 overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-nostra-navy-deep/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4" data-testid="text-company-name">
              Nostra Group
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight" data-testid="text-hero-headline">
              Operational Partnership for Essential Businesses
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl" data-testid="text-hero-subheadline">
              We partner with founders of mission-critical businesses who've built something worth preserving. As former operators, we understand what it takes to build a company from the ground up, scale it profitably, and protect the culture and people that made it work. We're not career finance professionals. We're operators who chose to invest.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-nostra-navy-deep font-semibold hover:bg-white/90"
                  data-testid="button-hero-cta"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-what-we-do-title">
              What We Do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeDoCards.map((card, index) => (
              <Card
                key={index}
                className="bg-nostra-bone border-nostra-ivory/50 p-8 hover-elevate"
                data-testid={`card-what-we-do-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center mb-6">
                  <card.icon className="h-6 w-6 text-nostra-navy-military" />
                </div>
                <h3 className="text-xl font-semibold text-nostra-charcoal mb-4 leading-snug" data-testid={`text-card-title-${index}`}>
                  {card.title}
                </h3>
                <p className="text-nostra-slate leading-relaxed" data-testid={`text-card-content-${index}`}>
                  {card.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nostra-ivory py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-why-nostra-title">
              Why Partner With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {whyNostraPillars.map((pillar, index) => (
              <div key={index} className="space-y-4" data-testid={`pillar-why-nostra-${index}`}>
                <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center">
                  <pillar.icon className="h-6 w-6 text-nostra-navy-military" />
                </div>
                <h3 className="text-xl font-semibold text-nostra-charcoal" data-testid={`text-pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="text-nostra-slate leading-relaxed" data-testid={`text-pillar-content-${index}`}>
                  {pillar.content}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-nostra-charcoal font-medium mb-6" data-testid="text-cta-message">
              If you've built something worth preserving, let's talk.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-nostra-navy-military text-nostra-light font-semibold"
                data-testid="button-why-nostra-cta"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
