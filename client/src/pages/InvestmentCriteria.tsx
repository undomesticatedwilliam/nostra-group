import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Building, Users, Cpu, Puzzle, Shield, DollarSign, MapPin, TrendingUp, Check, X } from "lucide-react";

const focusAreas = [
  {
    icon: Building,
    title: "Essential Industries",
    content:
      "Infrastructure, utilities, environmental services, transportation, and industrial services. Businesses doing work that keeps society running.",
  },
  {
    icon: Users,
    title: "Founder-Owned Businesses",
    content:
      "Companies built by people who care about what they've created. Founders thinking about succession, transition, or partnership who want the right steward for what comes next.",
  },
  {
    icon: Cpu,
    title: "Technology Opportunity",
    content:
      "Businesses where thoughtful technology integration can drive meaningful improvement — practical applications that improve operations, customer experience, and margins.",
  },
  {
    icon: Puzzle,
    title: "Fragmented Markets",
    content:
      "Industries with consolidation opportunity where we can build platforms through disciplined acquisition. Sectors where operational excellence and scale create real competitive advantage.",
  },
  {
    icon: Shield,
    title: "Defensible Positions",
    content:
      "Companies with something real — customer relationships, technical expertise, regulatory positioning, geographic advantage. Businesses that aren't easily replicated or disrupted.",
  },
];

const targetMetrics = [
  { icon: Check, label: "Structure", value: "Control Acquisitions" },
  { icon: DollarSign, label: "EBITDA", value: "$3M+" },
  { icon: TrendingUp, label: "Margins", value: "10%+ EBITDA" },
  { icon: MapPin, label: "Geography", value: "United States" },
];

const notLookingFor = [
  "Turnarounds and distressed situations — we're operators focused on growth, not restructuring.",
  "Businesses dependent on a single customer or contract",
  "Industries outside our operational expertise where we can't add genuine value.",
  "Sellers primarily optimizing for maximum price with no concern for what comes after",
  "Situations requiring significant capital expenditure before the business can operate normally",
];

export default function InvestmentCriteria() {
  return (
    <div className="min-h-screen bg-nostra-bone">
      <SEO
        title="Investment Criteria | Nostra Group"
        description="We focus on essential businesses in industries that matter — companies providing mission-critical services. Control acquisitions, $3M+ EBITDA, 10%+ margins, United States."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-nostra-navy-deep tracking-tight" data-testid="text-criteria-title">
              Investment Criteria
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-nostra-slate leading-relaxed" data-testid="text-criteria-intro">
              We focus on essential businesses in industries that matter — companies providing mission-critical services that keep infrastructure running and communities functioning. We're looking for good businesses with room to get better — run by people who care about what happens after they sell.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-focus-title">
              Our Focus
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card
                key={index}
                className={`bg-nostra-bone border-nostra-ivory p-8 hover-elevate ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                data-testid={`card-focus-${index}`}
              >
                <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center mb-6">
                  <area.icon className="h-6 w-6 text-nostra-navy-military" />
                </div>
                <h3 className="text-xl font-semibold text-nostra-charcoal mb-4" data-testid={`text-focus-title-${index}`}>
                  {area.title}
                </h3>
                <p className="text-nostra-slate leading-relaxed" data-testid={`text-focus-content-${index}`}>
                  {area.content}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-parameters-title">
              Target Parameters
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {targetMetrics.map((metric, index) => (
              <Card
                key={index}
                className="bg-nostra-warm border-nostra-ivory p-6 text-center"
                data-testid={`card-metric-${index}`}
              >
                <div className="w-10 h-10 rounded-md bg-nostra-navy-military/10 flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="h-5 w-5 text-nostra-navy-military" />
                </div>
                <p className="text-sm text-nostra-gray uppercase tracking-wider font-medium mb-2" data-testid={`text-metric-label-${index}`}>
                  {metric.label}
                </p>
                <p className="text-xl font-semibold text-nostra-charcoal" data-testid={`text-metric-value-${index}`}>
                  {metric.value}
                </p>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-nostra-gray italic" data-testid="text-parameters-note">
            Flexible on EBITDA minimums for strategic add-ons or compelling buy-and-build opportunities
          </p>
        </div>
      </section>

      <section className="bg-nostra-ivory py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-semibold text-nostra-navy-deep mb-6" data-testid="text-not-looking-title">
            What We're Not Looking For
          </h2>
          <p className="text-lg text-nostra-slate mb-8" data-testid="text-not-looking-intro">
            Transparency saves everyone time. Here's what doesn't fit:
          </p>
          <ul className="space-y-4">
            {notLookingFor.map((item, index) => (
              <li key={index} className="flex items-start gap-3" data-testid={`list-not-looking-${index}`}>
                <X className="h-5 w-5 text-nostra-gray flex-shrink-0 mt-0.5" />
                <span className="text-nostra-slate">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
