"use client";

import Link from "next/link";
import NavBar from "@components/layout/NavBar";
import Footer from "@components/layout/Footer";
import Section from "@components/layout/Section";
import { Card } from "@components/ui/Card";
import Button from "@components/ui/Button";
import { useTheme } from "@lib/theme/ThemeProvider";
import {
  BarChart3,
  Globe2,
  Layers,
  LayoutDashboard,
  Megaphone,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

type TemplateConfig = {
  name: string;
  category: string;
  accent: string;
  description: string;
  icon: React.ComponentType<{ className?: string; color?: string }>;
};

const templates: TemplateConfig[] = [
  {
    name: "AI Sales",
    category: "SaaS",
    accent: "#7c3aed",
    description:
      "High-converting hero with metrics and social proof for AI tools.",
    icon: Sparkles,
  },
  {
    name: "Growth Dashboard",
    category: "Analytics",
    accent: "#2563eb",
    description: "KPI-focused layout with chart blocks and ROI callouts.",
    icon: BarChart3,
  },
  {
    name: "Global Launch",
    category: "Product",
    accent: "#0ea5e9",
    description: "Localized messaging with geo-aware CTAs and feature strips.",
    icon: Globe2,
  },
  {
    name: "Ecommerce Edge",
    category: "Commerce",
    accent: "#ec4899",
    description: "Product storytelling, bundles, and urgency-driven CTAs.",
    icon: LayoutDashboard,
  },
  {
    name: "Security Trust",
    category: "Enterprise",
    accent: "#22c55e",
    description: "Compliance badges, uptime stats, and layered trust signals.",
    icon: ShieldCheck,
  },
  {
    name: "Lifecycle Nurture",
    category: "Engagement",
    accent: "#f59e0b",
    description:
      "Modular email capture, sequencing, and progressive profiling.",
    icon: MessagesSquare,
  },
  {
    name: "Marketplace",
    category: "Platform",
    accent: "#6366f1",
    description: "Card grid for vendors, filters, and clean comparison blocks.",
    icon: Layers,
  },
  {
    name: "Fintech Flow",
    category: "Finance",
    accent: "#0ea98c",
    description: "Pricing clarity, KYC guidance, and conversion-focused FAQs.",
    icon: Wallet,
  },
];

export default function TemplatesPage() {
  const theme = useTheme();

  return (
    <>
      <NavBar />
      <main>
        <Section variant="default">
          <div
            className="px-4 sm:px-8"
            style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
          >
            <div className="flex flex-col gap-6 text-left mb-10">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{
                  background: `${theme.colors.primary}15`,
                  color: theme.colors.primary,
                  borderRadius: theme.effects.borderRadius,
                  border: `1px solid ${theme.colors.primary}30`,
                }}
              >
                <Sparkles className="h-4 w-4" color={theme.colors.primary} />
                Top templates ready to deploy
              </div>
              <div className="space-y-3">
                <h1
                  className="text-4xl md:text-5xl"
                  style={{
                    fontWeight: theme.typography.headingWeight,
                    color: theme.colors.text,
                  }}
                >
                  Curated layouts built for velocity
                </h1>
                <p
                  className="text-lg max-w-3xl"
                  style={{ color: theme.colors.textMuted }}
                >
                  Pick a starting point and adapt tone, accents, and module mix.
                  These eight patterns cover acquisition, product, and
                  conversion-heavy use cases.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/templates/customize">
                    <Button size="lg" variant="primary">
                      Open customization panel
                    </Button>
                  </Link>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() =>
                      document
                        .getElementById("template-grid")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Browse the grid
                  </Button>
                </div>
              </div>
            </div>

            <div
              id="template-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {templates.map((tpl) => {
                const Icon = tpl.icon;
                return (
                  <Card
                    key={tpl.name}
                    variant="feature"
                    hoverable
                    className="h-full relative overflow-hidden"
                    padding="lg"
                  >
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/4 to-transparent pointer-events-none" />
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="h-11 w-11 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `${tpl.accent}1a`,
                          border: `1px solid ${tpl.accent}33`,
                        }}
                      >
                        <Icon className="h-5 w-5" color={tpl.accent} />
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${theme.colors.primary}15`,
                          color: theme.colors.primary,
                          borderRadius: theme.effects.borderRadius,
                          border: `1px solid ${theme.colors.primary}30`,
                        }}
                      >
                        {tpl.category}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3
                        className="text-xl"
                        style={{
                          fontWeight: theme.typography.headingWeight,
                          color: theme.colors.text,
                        }}
                      >
                        {tpl.name}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {tpl.description}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className="text-sm"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Ready in minutes
                      </span>
                      <Link
                        href={`/templates/customize?template=${encodeURIComponent(
                          tpl.name
                        )}`}
                      >
                        <Button size="sm" variant="secondary">
                          Customize
                        </Button>
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
