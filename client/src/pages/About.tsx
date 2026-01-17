import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Target, Cpu, Shield, Search, Clock } from "lucide-react";

const differentiators = [
  {
    icon: Target,
    title: "Operators, Not Financiers",
    content:
      "We've built companies, not just models of them. Our investment decisions are grounded in operational reality — what it actually takes to run and improve a business, not just what the spreadsheet says is possible.",
  },
  {
    icon: Cpu,
    title: "Technology Integration Experience",
    content:
      "We've implemented technology solutions in environments where failure wasn't an option. CRM transformations, marketing automation, AI integration — we've done the work, not just advised on it.",
  },
  {
    icon: Shield,
    title: "Military Discipline, Startup Agility",
    content:
      "Marine Corps leadership taught us how to execute in high-stakes, resource-constrained environments. Startup experience taught us how to move fast and adapt. We bring both.",
  },
  {
    icon: Search,
    title: "Pattern Recognition",
    content:
      "We've evaluated 500+ acquisition targets and conducted deep due diligence on dozens. We know what separates businesses that scale from those that stall — and we know where the real opportunities hide.",
  },
  {
    icon: Clock,
    title: "Long-Term Orientation",
    content:
      "We're not optimizing for a 3-year exit. We're building a portfolio of essential businesses we can own and operate for the long haul. That changes how we think about every decision.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-nostra-bone">
      <SEO
        title="About | Nostra Group"
        description="Nostra Group was founded by former Marines who built, scaled, and exited businesses. We bring operational reality to investment decisions, not just spreadsheet assumptions."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-nostra-navy-deep tracking-tight" data-testid="text-about-title">
              About Nostra Group
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-nostra-navy-deep mb-8" data-testid="text-story-title">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-nostra-slate leading-relaxed mb-6" data-testid="text-story-p1">
              Nostra Group was founded by former Marines who spent their post-military careers building, scaling, and exiting businesses — not analyzing them from a distance.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed mb-6" data-testid="text-story-p2">
              We've been the operator trying to hit growth targets with limited resources. We've built the systems, hired the teams, and made the hard calls. We've also been on the other side of the table, evaluating hundreds of acquisition targets and seeing firsthand how traditional PE approaches often destroy value in the name of creating it.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-story-p3">
              We started Nostra because we saw a gap: founders of essential businesses deserve a real alternative to the standard PE playbook. An option that preserves what they built while bringing the operational and technology expertise to take it further.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-differentiators-title">
              Not Your Typical Investors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card
                key={index}
                className={`bg-nostra-warm border-nostra-ivory p-8 hover-elevate ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-testid={`card-differentiator-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center mb-6">
                  <item.icon className="h-6 w-6 text-nostra-navy-military" />
                </div>
                <h3 className="text-xl font-semibold text-nostra-charcoal mb-4" data-testid={`text-diff-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-nostra-slate leading-relaxed" data-testid={`text-diff-content-${index}`}>
                  {item.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nostra-ivory py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-nostra-navy-deep mb-8" data-testid="text-approach-title">
            How We Work
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-approach-p1">
              We're direct. We move fast when it makes sense and take our time when it doesn't. We don't hide behind jargon or make promises we can't keep.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-approach-p2">
              If we're interested in your business, you'll know quickly. If we're not the right fit, we'll tell you that too — and try to point you toward someone who might be.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-approach-p3">
              Once we partner, we're hands-on but not overbearing. We're there when you need us and out of the way when you don't. We've been on the receiving end of "helpful" investors who create more problems than they solve. We don't do that.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
