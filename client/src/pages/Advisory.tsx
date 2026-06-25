import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import { ClipboardCheck, Cpu, TrendingUp, FileText, Layers, Settings, ArrowRight, Zap } from "lucide-react";

const engagementModels = [
  {
    title: "Fractional C-Suite Leadership",
    content:
      "The right executive in the right seat, working inside your team and accountable for outcomes — without the full-time cost or long-term hiring commitment. Ideal when you need senior functional leadership to build infrastructure, lead a team, or drive a specific initiative.",
    bestFor:
      "Companies navigating leadership gaps, scaling through an inflection point, or preparing for a transaction who need experienced functional leadership without a permanent hire.",
  },
  {
    title: "Project-Based Engagement",
    content:
      "A defined scope, clear deliverables, and a set timeline. We apply focused expertise to a specific challenge — an operational assessment, a technology selection process, a transaction prep effort — and deliver concrete outputs your team can act on.",
    bestFor:
      "Organizations with a well-defined problem and a need to move quickly with clear outcomes and accountability.",
  },
  {
    title: "Ongoing Advisory Retainer",
    content:
      "Regular access to senior operational and strategic counsel. We work with your leadership team on a recurring basis, bringing outside perspective, functional expertise, and network access as your business evolves.",
    bestFor:
      "Founders and CEOs who want a trusted outside perspective on an ongoing basis — without a formal engagement structure or long-term commitment.",
  },
];

const services = [
  {
    icon: ClipboardCheck,
    title: "Operational Assessment",
    description:
      "A clear-eyed evaluation of how your business actually runs. We identify bottlenecks, inefficiencies, and opportunities that are often invisible to teams living inside them. You get a prioritized roadmap focused on what will move the needle.",
    items: [
      "Process mapping and bottleneck identification",
      "Performance measurement evaluation",
      "Organizational effectiveness assessment",
      "Prioritized improvement roadmap",
    ],
  },
  {
    icon: Settings,
    title: "Business Operations & Cadence Design",
    description:
      "The systems and rhythms that make a business run well — or don't. We help leadership teams design and implement the operational infrastructure, meeting cadences, reporting structures, and decision-making frameworks that turn strategy into consistent execution.",
    items: [
      "Operating cadence design and implementation",
      "Leadership reporting structure and rhythm",
      "KPI framework and scorecard development",
      "Decision rights and accountability mapping",
      "Cross-functional coordination systems",
    ],
  },
  {
    icon: Cpu,
    title: "Technology Strategy",
    description:
      "Practical guidance on technology adoption that starts with your actual problems, not a vendor's sales pitch. We help you figure out what you actually need, evaluate options without the conflicts of implementation fees, and build a realistic plan to get there.",
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
      "Revenue optimization that transforms commercial operations into sustainable growth engines. We build the systems, processes, and analytics infrastructure that drive measurable improvements in customer acquisition, retention, and lifetime value.",
    items: [
      "CRM and commercial tech stack optimization",
      "Sales process design and standardization",
      "CAC optimization and channel efficiency analysis",
      "Customer journey mapping and optimization",
      "Pricing strategy development",
      "Revenue reporting and dashboard implementation",
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
    icon: ArrowRight,
    title: "Hands-On Execution",
    description:
      "We work alongside your team, inside the details — helping solve problems and build capabilities, not just identifying issues and leaving you to figure out the rest.",
  },
  {
    icon: Zap,
    title: "Built for Action",
    description:
      "Every engagement produces specific, actionable plans built for your situation. We help you implement them.",
  },
];

export default function Advisory() {
  return (
    <div className="min-h-screen bg-nostra-bone">
      <SEO
        title="Advisory | Nostra Group"
        description="Nostra Group advisory engagements cover fractional executive leadership, operational assessment, business operations and cadence design, technology strategy, commercial value creation, transaction preparation, and integration support."
      />

      {/* Hero */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-nostra-navy-deep tracking-tight" data-testid="text-advisory-title">
              Advisory
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-nostra-warm py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-advisory-intro-1">
              Advisory at Nostra Group is distinct from our acquisition work. We engage with business owners and leadership teams on specific operational challenges — as a standalone engagement or as a precursor to potential investment.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-advisory-intro-2">
              Services cover fractional executive leadership, operational assessment, business operations and cadence design, technology strategy, commercial value creation, transaction preparation, and integration support.
            </p>
            <p className="text-lg text-nostra-slate leading-relaxed" data-testid="text-advisory-intro-3">
              We're not consultants who deliver a deck and disappear. We work alongside your team to solve real problems, with compensation structures aligned to outcomes, not hours billed.
            </p>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-nostra-bone py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-engage-title">
              How We Engage
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-engage">
            {engagementModels.map((model, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-nostra-warm border border-nostra-ivory rounded-lg px-6"
                data-testid={`accordion-engage-${index}`}
              >
                <AccordionTrigger
                  className="text-left text-lg font-semibold text-nostra-charcoal hover:no-underline py-6"
                  data-testid={`accordion-trigger-${index}`}
                >
                  {model.title}
                </AccordionTrigger>
                <AccordionContent className="pb-6 space-y-4">
                  <p className="text-nostra-slate leading-relaxed" data-testid={`text-engage-content-${index}`}>
                    {model.content}
                  </p>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-nostra-navy-military mb-1">
                      Best for
                    </p>
                    <p className="text-nostra-slate text-sm leading-relaxed" data-testid={`text-engage-bestfor-${index}`}>
                      {model.bestFor}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-nostra-warm py-20 lg:py-24">
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
                className="bg-nostra-bone border-nostra-ivory p-8 lg:p-10"
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-nostra-ivory py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-semibold text-nostra-navy-deep" data-testid="text-approach-title">
              Our Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
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
