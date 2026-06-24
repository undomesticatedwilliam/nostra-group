import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { Target, Cpu, Shield } from "lucide-react";
import { Link } from "wouter";

const differentiators = [
  {
    icon: Target,
    title: "Operators First",
    content:
      "We bring operational reality to investment decisions. We've built the systems, made the hard calls, and lived the consequences. That experience sits at the center of everything we do.",
  },
  {
    icon: Cpu,
    title: "Technology as a Force Multiplier",
    content:
      "Deliberate technology implementation — including AI — that solves real operational problems without creating new ones. We've done the work ourselves and know the difference between a tool and a distraction.",
  },
  {
    icon: Shield,
    title: "Long-Term Ownership",
    content:
      "We're not optimizing for a quick flip. We acquire businesses we're proud to own and operate for the long term. That changes how we underwrite, how we engage with founders, and how we make decisions post-close.",
  },
];

const team = [
  {
    name: "Bill Tabino",
    title: "Co-Founder & Managing Partner",
    focus: "Operations & Investment",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Dom Blue",
    title: "Co-Founder & Managing Partner",
    focus: "AI & Technology Commercialization",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-nostra-bone">
      <SEO
        title="About | Nostra Group"
        description="Nostra Group is a veteran-led independent sponsor focused on acquiring and operating mission-critical physical services businesses. Founded by two Marines who built, scaled, and exited companies."
      />

      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-nostra-navy-military mb-4" data-testid="text-about-eyebrow">
              Our Story
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold text-nostra-navy-deep tracking-tight" data-testid="text-about-title">
              Built by Operators. Driven by Mission.
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-intro-p1">
              Nostra is a possessive adjective in Italian — one of four words meaning "Our." The name is intentional. We built this firm around a simple idea: that the best outcomes happen when investors and founders share genuine ownership of what comes next.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-intro-p2">
              Nostra Group is a veteran-led independent sponsor focused on acquiring and operating mission-critical physical services businesses. Our mission is to build a resilient, positive feedback loop for our founders, our operators, and the communities they serve — one essential business at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built This */}
      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-nostra-navy-deep mb-8" data-testid="text-why-title">
            Why We Built This
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-why-p1">
              We've been the operator trying to hit growth targets with limited resources. We've built the systems, hired the teams, and made the hard calls. We've also been on the other side of the table — evaluating hundreds of acquisition targets and seeing firsthand how traditional PE approaches destroy value in the name of creating it.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-why-p2">
              Founders of essential businesses deserve better than a financial engineer with a playbook. They deserve a partner who has lived what they've lived — who understands what it took to build the thing, and won't carelessly dismantle it in pursuit of a multiple.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-why-p3">
              That's why we built Nostra.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-beliefs-title">
              What We Believe
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className="bg-nostra-bone border-nostra-ivory p-8 hover-elevate"
                data-testid={`card-belief-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-nostra-navy-military" />
                </div>
                <h3 className="text-xl font-semibold text-nostra-charcoal mb-4" data-testid={`text-belief-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-nostra-slate leading-relaxed" data-testid={`text-belief-content-${index}`}>
                  {item.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-team-title">
              Our Team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center" data-testid={`card-team-${index}`}>
                <div
                  className="w-32 h-32 rounded-full bg-nostra-navy-military/10 border-2 border-nostra-navy-military/20 flex items-center justify-center mb-6"
                  data-testid={`img-avatar-${index}`}
                >
                  <span className="text-4xl font-bold text-nostra-navy-military/30">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-nostra-navy-deep mb-1" data-testid={`text-team-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-nostra-navy-military mb-1" data-testid={`text-team-title-${index}`}>
                  {member.title}
                </p>
                <p className="text-xs uppercase tracking-widest text-nostra-gray mb-4" data-testid={`text-team-focus-${index}`}>
                  {member.focus}
                </p>
                <p className="text-nostra-slate leading-relaxed text-sm" data-testid={`text-team-bio-${index}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-nostra-navy-military mb-4" data-testid="text-vision-eyebrow">
            Our Vision
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep mb-8" data-testid="text-vision-headline">
            To build the world's best veteran-led private investment and advisory company.
          </h2>
          <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-vision-body">
            We're direct. We move fast when it makes sense and take our time when it doesn't. If we're interested in your business, you'll know quickly. If we're not the right fit, we'll tell you that too — and try to point you toward someone who might be.
          </p>
        </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-nostra-navy-deep py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl lg:text-3xl font-semibold text-white mb-8" data-testid="text-cta-about">
            If you've built something worth preserving, let's talk.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nostra-navy-deep" data-testid="button-cta-contact">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
