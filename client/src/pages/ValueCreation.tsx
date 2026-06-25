import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Settings, TrendingUp, Cpu, Rocket, Users } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    title: "Operational Excellence",
    description:
      "Systematic process improvement rooted in discipline and accountability. We identify bottlenecks, eliminate waste, and build operating rhythms that create consistency — working alongside teams to understand what's actually happening and what can be better.",
    items: [
      "Operating cadence and accountability systems",
      "Process documentation and standardization",
      "Performance measurement and management",
      "Resource allocation optimization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Commercial Value Creation",
    description:
      "Revenue growth through better systems. We build the commercial infrastructure that turns good businesses into growth engines — from lead generation through customer retention.",
    items: [
      "Go-to-market strategy and execution",
      "Sales process optimization",
      "Customer acquisition cost improvement",
      "Net revenue retention programs",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Integration",
    description:
      "Practical technology implementation — including AI/ML, automation, and data infrastructure — that solves real operational problems. We've built and integrated these systems in environments where they had to work. We bring that experience to every business we partner with.",
    items: [
      "Commercial tech stack optimization",
      "Automation and workflow improvement",
      "Data infrastructure and analytics",
      "AI/ML application where appropriate",
    ],
  },
  {
    icon: Rocket,
    title: "Strategic Growth",
    description:
      "Disciplined expansion that builds on existing strengths. We help businesses grow into adjacent markets, add complementary services, and pursue acquisitions that make strategic sense.",
    items: [
      "Market expansion planning",
      "Service line extension",
      "Add-on acquisition identification and integration",
      "Partnership and channel development",
    ],
  },
  {
    icon: Users,
    title: "Talent and Culture",
    description:
      "Building teams that can execute. We focus on hiring, developing, and retaining the people who make businesses work — with clarity, accountability, and incentives aligned to outcomes.",
    items: [
      "Organizational design",
      "Key hire identification and recruitment",
      "Incentive alignment",
      "Leadership development",
    ],
  },
];

export default function ValueCreation() {
  return (
    <div className="min-h-screen bg-nostra-bone">
      <SEO
        title="Value Creation | Nostra Group"
        description="We build value by making businesses operationally better. Our playbook covers operational excellence, commercial growth, technology integration, strategic expansion, and talent development."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-nostra-navy-deep tracking-tight" data-testid="text-value-title">
              Value Creation
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-value-intro-1">
              We don't believe in value creation through financial engineering or cost-cutting alone. We build value by making businesses operationally better — more efficient, more capable, better positioned to grow.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-value-intro-2">
              Our playbook is built on what we've actually done, not theoretical frameworks. Every initiative below reflects real experience implementing these approaches in resource-constrained environments where execution matters more than strategy decks.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-pillars-title">
              How We Build Value
            </h2>
          </div>
          <div className="space-y-8">
            {pillars.map((pillar, index) => (
              <Card
                key={index}
                className="bg-nostra-warm border-nostra-ivory p-8 lg:p-10"
                data-testid={`card-pillar-${index}`}
              >
                <div className="flex flex-col lg:flex-row lg:gap-10">
                  <div className="lg:w-2/3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center flex-shrink-0">
                        <pillar.icon className="h-6 w-6 text-nostra-navy-military" />
                      </div>
                      <h3 className="text-2xl font-semibold text-nostra-charcoal" data-testid={`text-pillar-title-${index}`}>
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-nostra-slate leading-relaxed" data-testid={`text-pillar-desc-${index}`}>
                      {pillar.description}
                    </p>
                  </div>
                  <div className="lg:w-1/3 mt-6 lg:mt-0">
                    <ul className="space-y-3">
                      {pillar.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-nostra-slate"
                          data-testid={`list-pillar-${index}-item-${itemIndex}`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-nostra-navy-military flex-shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
