import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { ClipboardCheck, Cpu, TrendingUp, FileText, Layers, Target, ArrowRight, Zap } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "Operational Assessment",
    description:
      "A clear-eyed evaluation of how your business actually runs — not how the org chart says it should. We identify the bottlenecks, inefficiencies, and opportunities that are often invisible to teams living inside them every day. You get a prioritized roadmap focused on what will actually move the needle, not a 200-page report that sits on a shelf.",
    items: [
      "Process mapping and bottleneck identification",
      "Performance measurement evaluation",
      "Organizational effectiveness assessment",
      "Prioritized improvement roadmap",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Strategy",
    description:
      "Practical guidance on technology adoption that starts with your actual problems, not a vendor's sales pitch. We help you figure out what you actually need, evaluate options without the conflicts that come from implementation fees, and build a realistic plan to get there.",
    items: [
      "Current state technology assessment",
      "Requirements definition and prioritization",
      "Vendor evaluation and selection support",
      "Implementation roadmap development",
    ],
  },
  {
    icon: TrendingUp,
    title: "Commercial Value Creation",
    description:
      "Comprehensive revenue optimization that transforms commercial operations into sustainable growth engines. We build the systems, processes, and analytics infrastructure that drive measurable improvements in customer acquisition, retention, and lifetime value.",
    subsections: [
      {
        title: "Revenue Operations (RevOps)",
        items: [
          "CRM and commercial tech stack optimization",
          "Pipeline analytics and forecasting model development",
          "Sales process design and standardization",
          "Lead scoring and attribution frameworks",
          "Cross-functional alignment (sales, marketing, customer success)",
          "Revenue reporting and dashboard implementation",
        ],
      },
      {
        title: "Customer Acquisition",
        items: [
          "CAC optimization and channel efficiency analysis",
          "Growth marketing system implementation",
          "Go-to-market strategy refinement",
          "Affiliate and partnership channel development",
          "Paid acquisition and organic growth integration",
          "Conversion funnel analysis and optimization",
        ],
      },
      {
        title: "Retention & Expansion",
        items: [
          "Net Revenue Retention (NRR) improvement programs",
          "Customer journey mapping and optimization",
          "Activation and onboarding process redesign",
          "Churn analysis and intervention frameworks",
          "Upsell/cross-sell motion development",
          "Customer health scoring and early warning systems",
        ],
      },
      {
        title: "Pricing & Monetization",
        items: [
          "Pricing strategy development and optimization",
          "Packaging and tier structure analysis",
          "Value metric identification",
          "Competitive positioning assessment",
          "Margin improvement initiatives",
        ],
      },
    ],
  },
  {
    icon: FileText,
    title: "Transaction Preparation",
    description:
      "If you're thinking about selling your business in the next few years, we can help you see it through a buyer's eyes and address the issues that will come up in diligence before they become negotiating points or deal-breakers.",
    items: [
      "Buyer-perspective business assessment",
      "Financial reporting and metrics cleanup",
      "Operational documentation",
      "Value creation opportunity identification",
      "Process preparation and timeline planning",
    ],
  },
  {
    icon: Layers,
    title: "Integration Support",
    description:
      "For businesses that have acquired or are acquiring, we help with the hard work of actually combining operations. Integration is where most acquisition value gets lost — we help make sure that doesn't happen.",
    items: [
      "Integration planning and playbook development",
      "First 100 days execution support",
      "Operational synergy identification and capture",
      "Cultural integration guidance",
      "Performance tracking and course correction",
    ],
  },
];

const approachPillars = [
  {
    icon: Target,
    title: "Outcomes Over Hours",
    description:
      "We structure engagements around results, not billable hours. Where possible, we tie compensation to the outcomes we help create. We win when you win.",
  },
  {
    icon: ArrowRight,
    title: "Hands-On, Not Hand-Off",
    description:
      "We work alongside your team, not above them. We're in the details, helping solve problems and build capabilities — not just identifying issues and leaving you to figure out the rest.",
  },
  {
    icon: Zap,
    title: "Built for Action",
    description:
      "Everything we do is oriented toward execution. We don't deliver theoretical frameworks or best-practice overviews. We deliver specific, actionable plans built for your situation, and we help you implement them.",
  },
];

export default function Advisory() {
  return (
    <div className="min-h-screen bg-nostra-bone">
      <SEO
        title="Advisory | Nostra Group"
        description="We work with business owners on specific operational challenges. Services include operational assessment, technology strategy, commercial value creation, transaction preparation, and integration support."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-nostra-navy-deep tracking-tight" data-testid="text-advisory-title">
              Advisory
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-advisory-intro-1">
              Not every engagement needs to be an acquisition. We work with business owners and leadership teams on specific operational challenges where our experience can help — either as a precursor to potential investment or as a standalone engagement.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-advisory-intro-2">
              We're not consultants who deliver a deck and disappear. We work alongside your team to solve real problems, with compensation structures aligned to outcomes, not hours billed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-services-title">
              How We Help
            </h2>
          </div>
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-nostra-warm border-nostra-ivory p-8 lg:p-10"
                data-testid={`card-service-${index}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-6 w-6 text-nostra-navy-military" />
                  </div>
                  <h3 className="text-2xl font-semibold text-nostra-charcoal" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-nostra-slate leading-relaxed mb-6" data-testid={`text-service-desc-${index}`}>
                  {service.description}
                </p>
                {service.items && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-2 text-nostra-slate"
                        data-testid={`list-service-${index}-item-${itemIndex}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-nostra-navy-military flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.subsections && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                    {service.subsections.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h4 className="text-lg font-semibold text-nostra-charcoal mb-4" data-testid={`text-subsection-title-${index}-${subIndex}`}>
                          {subsection.title}
                        </h4>
                        <ul className="space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-sm text-nostra-slate"
                            >
                              <span className="w-1 h-1 rounded-full bg-nostra-navy-military flex-shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nostra-ivory py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-approach-title">
              Our Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {approachPillars.map((pillar, index) => (
              <div key={index} className="space-y-4" data-testid={`pillar-approach-${index}`}>
                <div className="w-12 h-12 rounded-md bg-nostra-navy-military/10 flex items-center justify-center">
                  <pillar.icon className="h-6 w-6 text-nostra-navy-military" />
                </div>
                <h3 className="text-xl font-semibold text-nostra-charcoal" data-testid={`text-approach-pillar-title-${index}`}>
                  {pillar.title}
                </h3>
                <p className="text-nostra-slate leading-relaxed" data-testid={`text-approach-pillar-desc-${index}`}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-nostra-charcoal font-medium mb-6" data-testid="text-advisory-cta-message">
              Have a specific challenge? Let's talk about whether we can help.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-nostra-navy-military text-nostra-light font-semibold"
                data-testid="button-advisory-cta"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
