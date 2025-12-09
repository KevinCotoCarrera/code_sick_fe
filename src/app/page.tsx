"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import NavBar from "@components/layout/NavBar";
import Section from "@components/layout/Section";
import { Card } from "@components/ui/Card";
import Button from "@components/ui/Button";
import { useTranslations } from "next-intl";
import SEOScripts from "@components/seo/SEOScripts";
import Footer from "@components/layout/Footer";
import LeadCaptureForm from "@components/lead/LeadCaptureForm";
import {
  FadeIn,
  SlideIn,
  StaggerContainer,
} from "@components/motion/Animations";
import { FloatingCard } from "@components/motion/InteractiveElements";
import { motion } from "framer-motion";
import { useTheme } from "@lib/theme/ThemeProvider";
import { BarChart3, CheckIcon, Plug2, Radar, Sparkles } from "lucide-react";

// Dynamic imports for 3D components (client-side only)
const Hero3D = dynamic(() => import("@components/three/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse rounded-xl opacity-50" />
  ),
});

const Feature3D = dynamic(() => import("@components/three/Feature3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse rounded-xl opacity-50" />
  ),
});

const Product3D = dynamic(() => import("@components/three/Product3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full animate-pulse rounded-xl opacity-50" />
  ),
});

export default function Home() {
  const t = useTranslations("landing");
  const theme = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const animationSpeed = {
    none: 0,
    subtle: 0.3,
    moderate: 0.2,
    playful: 0.1,
  }[theme.effects.animations];

  const heroStats = [
    {
      value: t("stats.users.value"),
      label: t("stats.users.label"),
    },
    {
      value: t("stats.satisfaction.value"),
      label: t("stats.satisfaction.label"),
    },
    {
      value: t("stats.insights.value"),
      label: t("stats.insights.label"),
    },
  ];

  return (
    <>
      <SEOScripts />
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <NavBar />

        <main>
          {/* Hero Section with layered depth and 3D */}
          <Section variant="hero" noPadding>
            <div className="relative w-full min-h-screen overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <Suspense fallback={<div className="w-full h-full" />}>
                  <Hero3D />
                </Suspense>
              </div>

              {/* Atmospheric gradients for depth */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-gradient-to-br from-sky-500/30 via-cyan-400/20 to-transparent blur-3xl" />
                <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent blur-3xl" />
                <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>

              <div
                className="relative z-10 w-full px-4 sm:px-8 py-20"
                style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
              >
                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="space-y-10">
                    <FadeIn>
                      <motion.div
                        animate={
                          theme.effects.animations !== "none"
                            ? { rotate: [0, 4, -4, 0] }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="inline-block"
                      >
                        <span
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                          style={{
                            background: `${theme.colors.primary}1a`,
                            color: theme.colors.primary,
                            borderRadius: theme.effects.borderRadius,
                          }}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: theme.colors.primary }}
                          />
                          {t("hero.badge")}
                        </span>
                      </motion.div>
                    </FadeIn>

                    <SlideIn direction="left" delay={animationSpeed}>
                      <h1
                        className="text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight"
                        style={{
                          fontWeight: theme.typography.headingWeight,
                          color: theme.sections.hero.textColor,
                        }}
                      >
                        {t("hero.title")}
                      </h1>
                    </SlideIn>

                    <SlideIn direction="left" delay={animationSpeed * 2}>
                      <p
                        className="text-xl leading-relaxed max-w-2xl"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {t("hero.description")}
                      </p>
                    </SlideIn>

                    <SlideIn direction="left" delay={animationSpeed * 3}>
                      <div className="flex flex-wrap items-center gap-4">
                        <Button
                          size="lg"
                          variant="primary"
                          onClick={() =>
                            document
                              .getElementById("lead-form")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          {t("hero.cta.primary")}
                        </Button>
                        <Button
                          size="lg"
                          variant="secondary"
                          onClick={() =>
                            document
                              .getElementById("features")
                              ?.scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          {t("hero.cta.secondary")}
                        </Button>
                        <div
                          className="flex items-center gap-3 rounded-full px-4 py-2 text-sm backdrop-blur"
                          style={{
                            background: `${theme.colors.background}cc`,
                            borderRadius: theme.effects.borderRadius,
                            border: `1px solid ${theme.colors.border}`,
                          }}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: theme.colors.accent }}
                          />
                          <span style={{ color: theme.colors.textMuted }}>
                            {t("showcase.items.analytics")}
                          </span>
                        </div>
                      </div>
                    </SlideIn>

                    <SlideIn direction="up" delay={animationSpeed * 4}>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {heroStats.map((stat, index) => (
                          <Card
                            key={index}
                            hoverable
                            className="backdrop-blur border border-white/10"
                            padding="lg"
                          >
                            <div
                              className="text-3xl font-semibold"
                              style={{ color: theme.colors.accent }}
                            >
                              {stat.value}
                            </div>
                            <div
                              className="text-sm"
                              style={{ color: theme.colors.textMuted }}
                            >
                              {stat.label}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </SlideIn>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
                    <div
                      className="relative overflow-hidden rounded-3xl border backdrop-blur"
                      style={{
                        borderColor: `${theme.colors.border}66`,
                        boxShadow: theme.effects.shadowHover,
                        background: `${theme.colors.background}cc`,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-purple-500/10" />
                      <div className="relative h-[420px] lg:h-[620px]">
                        <Suspense
                          fallback={
                            <div className="w-full h-full animate-pulse" />
                          }
                        >
                          <Hero3D />
                        </Suspense>
                      </div>
                      <div
                        className="absolute left-6 bottom-6 right-6 flex items-center justify-between rounded-2xl border px-4 py-3"
                        style={{
                          borderColor: `${theme.colors.border}80`,
                          background: `${theme.colors.background}e6`,
                        }}
                      >
                        <div>
                          <div
                            className="text-xs uppercase tracking-wide"
                            style={{ color: theme.colors.textMuted }}
                          >
                            {t("features.items.analytics.title")}
                          </div>
                          <div
                            className="text-lg font-semibold"
                            style={{ color: theme.colors.text }}
                          >
                            {t("showcase.items.visualization")}
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-2 text-sm"
                          style={{ color: theme.colors.accent }}
                        >
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{ background: theme.colors.accent }}
                          />
                          {t("stats.insights.label")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Features Section with narrative + grid */}
          <Section id="features" variant="features">
            <div
              className="px-4 sm:px-8"
              style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
            >
              <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">
                <FadeIn>
                  <div
                    className="space-y-8 rounded-3xl border p-8 backdrop-blur"
                    style={{
                      borderColor: `${theme.colors.border}66`,
                      background: `${theme.colors.background}e6`,
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                      style={{
                        background: `${theme.colors.primary}1a`,
                        color: theme.colors.primary,
                        borderRadius: theme.effects.borderRadius,
                      }}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: theme.colors.primary }}
                      />
                      {t("features.title")}
                    </div>
                    <div className="space-y-4">
                      <h2
                        className="text-4xl md:text-5xl leading-tight"
                        style={{
                          fontWeight: theme.typography.headingWeight,
                          color: theme.colors.text,
                        }}
                      >
                        {t("features.subtitle")}
                      </h2>
                      <p
                        className="text-lg"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {t("showcase.description")}
                      </p>
                    </div>
                    <div className="space-y-3">
                      {[
                        t("showcase.items.dashboards"),
                        t("showcase.items.visualization"),
                        t("showcase.items.analytics"),
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 text-sm"
                          style={{ color: theme.colors.textMuted }}
                        >
                          <Sparkles
                            className="h-5 w-5"
                            color={theme.colors.accent}
                          />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>

                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: t("features.items.analytics.title"),
                      description: t("features.items.analytics.description"),
                      icon: "analytics",
                    },
                    {
                      title: t("features.items.tracking.title"),
                      description: t("features.items.tracking.description"),
                      icon: "tracking",
                    },
                    {
                      title: t("features.items.integration.title"),
                      description: t("features.items.integration.description"),
                      icon: "integration",
                    },
                  ].map((feature, index) => (
                    <FloatingCard key={index}>
                      <Card
                        variant="feature"
                        hoverable
                        className="h-full relative overflow-hidden"
                      >
                        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/4 to-transparent pointer-events-none" />
                        <div className="space-y-4 relative">
                          <div className="flex items-center gap-3">
                            <div
                              className="h-11 w-11 rounded-2xl flex items-center justify-center"
                              style={{
                                background: `${theme.colors.primary}20`,
                                color: theme.colors.primary,
                                border: `1px solid ${theme.colors.primary}40`,
                              }}
                            >
                              {feature.icon === "analytics" && (
                                <BarChart3
                                  className="h-5 w-5"
                                  color={theme.colors.primary}
                                />
                              )}
                              {feature.icon === "tracking" && (
                                <Radar
                                  className="h-5 w-5"
                                  color={theme.colors.primary}
                                />
                              )}
                              {feature.icon === "integration" && (
                                <Plug2
                                  className="h-5 w-5"
                                  color={theme.colors.primary}
                                />
                              )}
                            </div>
                            <span
                              className="rounded-full px-3 py-1 text-xs font-semibold"
                              style={{
                                background: `${theme.colors.primary}15`,
                                color: theme.colors.primary,
                                borderRadius: theme.effects.borderRadius,
                                border: `1px solid ${theme.colors.primary}30`,
                              }}
                            >
                              {t("product.features.integrations")}
                            </span>
                          </div>
                          <h3
                            className="text-2xl mb-2"
                            style={{
                              fontWeight: theme.typography.headingWeight,
                              color: theme.colors.text,
                            }}
                          >
                            {feature.title}
                          </h3>
                          <p
                            className="text-sm"
                            style={{ color: theme.colors.textMuted }}
                          >
                            {feature.description}
                          </p>
                        </div>
                      </Card>
                    </FloatingCard>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </Section>

          {/* 3D Interactive Section */}
          <Section variant="showcase">
            <div
              className="px-4 sm:px-8"
              style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
            >
              <div className="grid items-stretch gap-14 lg:grid-cols-[1fr_1.05fr]">
                <SlideIn direction="left">
                  <div
                    className="relative overflow-hidden rounded-3xl border p-8"
                    style={{
                      borderColor: `${theme.colors.border}66`,
                      background: `${theme.colors.background}f2`,
                      boxShadow: theme.effects.shadow,
                    }}
                  >
                    <div className="relative space-y-6">
                      <div
                        className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-wide"
                        style={{
                          background: `${theme.colors.primary}15`,
                          color: theme.colors.primary,
                          borderRadius: theme.effects.borderRadius,
                        }}
                      >
                        {t("showcase.title")}
                      </div>
                      <h2
                        className="text-4xl md:text-5xl"
                        style={{
                          fontWeight: theme.typography.headingWeight,
                          color: theme.colors.text,
                        }}
                      >
                        {t("product.title")}
                      </h2>
                      <p
                        className="text-lg"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {t("product.description")}
                      </p>
                      <div className="grid gap-4">
                        {[
                          t("showcase.items.dashboards"),
                          t("showcase.items.visualization"),
                          t("showcase.items.analytics"),
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className="flex items-center justify-between rounded-2xl border px-4 py-3"
                            style={{
                              borderColor: `${theme.colors.border}80`,
                              background: `${theme.colors.background}f2`,
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className="h-8 w-8 rounded-xl text-base flex items-center justify-center"
                                style={{
                                  background: `${theme.colors.primary}1a`,
                                  color: theme.colors.primary,
                                }}
                              >
                                <CheckIcon
                                  className="h-4 w-4"
                                  color={theme.colors.primary}
                                />
                              </span>
                              <span
                                className="text-base"
                                style={{ color: theme.colors.text }}
                              >
                                {item}
                              </span>
                            </div>
                            <span
                              className="text-xs"
                              style={{ color: theme.colors.textMuted }}
                            >
                              {t("stats.insights.label")}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right">
                  <div
                    className="relative h-[420px] lg:h-[520px] overflow-hidden rounded-3xl border"
                    style={{
                      borderColor: `${theme.colors.border}66`,
                      boxShadow: theme.effects.shadowHover,
                    }}
                  >
                    <Suspense
                      fallback={<div className="w-full h-full animate-pulse" />}
                    >
                      <Feature3D variant="cube" />
                    </Suspense>
                    <div
                      className="absolute top-6 right-6 rounded-2xl border px-4 py-3 text-sm"
                      style={{
                        borderColor: `${theme.colors.border}80`,
                        background: `${theme.colors.background}e6`,
                      }}
                    >
                      <div
                        className="text-xs uppercase tracking-wide"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {t("features.items.tracking.title")}
                      </div>
                      <div
                        className="text-lg font-semibold"
                        style={{ color: theme.colors.text }}
                      >
                        {t("features.items.analytics.title")}
                      </div>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </Section>

          {/* Stats Section */}
          <Section variant="stats">
            <div
              className="px-4 sm:px-8"
              style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
            >
              <div
                className="overflow-hidden rounded-3xl border p-10 backdrop-blur"
                style={{
                  borderColor: `${theme.colors.border}66`,
                  background: `${theme.colors.background}f2`,
                  boxShadow: theme.effects.shadow,
                }}
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
                  style={{ borderColor: `${theme.colors.border}66` }}
                >
                  {[
                    {
                      value: t("stats.users.value"),
                      label: t("stats.users.label"),
                    },
                    {
                      value: t("stats.satisfaction.value"),
                      label: t("stats.satisfaction.label"),
                    },
                    {
                      value: t("stats.insights.value"),
                      label: t("stats.insights.label"),
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="px-6 py-4 text-center"
                    >
                      <div
                        className="text-5xl md:text-6xl mb-2"
                        style={{
                          fontWeight: theme.typography.headingWeight,
                          color: theme.colors.accent,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="text-lg"
                        style={{
                          color: theme.sections.stats.textColor,
                          opacity: 0.85,
                        }}
                      >
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          {/* Product Showcase with 3D */}
          <Section variant="product">
            <div
              className="px-4 sm:px-8"
              style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
            >
              <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
                <SlideIn direction="left">
                  <div
                    className="relative overflow-hidden rounded-3xl border"
                    style={{
                      borderColor: `${theme.colors.border}66`,
                      boxShadow: theme.effects.shadowHover,
                    }}
                  >
                    <Suspense
                      fallback={<div className="w-full h-full animate-pulse" />}
                    >
                      <Product3D />
                    </Suspense>
                    <div
                      className="absolute top-6 left-6 rounded-2xl border px-4 py-3 text-sm backdrop-blur"
                      style={{
                        borderColor: `${theme.colors.border}80`,
                        background: `${theme.colors.background}f2`,
                      }}
                    >
                      <div
                        className="text-xs uppercase tracking-wide"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {t("product.features.security")}
                      </div>
                      <div
                        className="text-lg font-semibold"
                        style={{ color: theme.colors.text }}
                      >
                        {t("product.features.uptime")}
                      </div>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction="right">
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h2
                        className="text-4xl md:text-5xl"
                        style={{
                          fontWeight: theme.typography.headingWeight,
                          color: theme.colors.text,
                        }}
                      >
                        {t("product.title")}
                      </h2>
                      <p
                        className="text-lg"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {t("product.description")}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        t("product.features.security"),
                        t("product.features.uptime"),
                        t("product.features.support"),
                        t("product.features.integrations"),
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.08 }}
                        >
                          <Card hoverable padding="md" className="h-full">
                            <div className="flex items-start gap-3">
                              <Sparkles
                                className="h-5 w-5"
                                color={theme.colors.accent}
                              />
                              <div className="space-y-1">
                                <div
                                  className="text-base font-semibold"
                                  style={{ color: theme.colors.text }}
                                >
                                  {feature}
                                </div>
                                <p
                                  className="text-sm"
                                  style={{ color: theme.colors.textMuted }}
                                >
                                  {t("showcase.items.analytics")}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </Section>

          {/* Lead Capture Section */}
          <Section id="lead-form" variant="leadForm">
            <div
              className="px-4 sm:px-8"
              style={{ maxWidth: "48rem", margin: "0 auto" }}
            >
              <FadeIn>
                <div className="text-center mb-12">
                  <h2
                    className="text-4xl md:text-5xl mb-4"
                    style={{
                      fontWeight: theme.typography.headingWeight,
                      color: theme.colors.text,
                    }}
                  >
                    {t("leadForm.title")}
                  </h2>
                  <p
                    className="text-xl"
                    style={{ color: theme.colors.textMuted }}
                  >
                    {t("leadForm.subtitle")}
                  </p>
                </div>
              </FadeIn>

              <div
                className="overflow-hidden rounded-3xl border p-8 backdrop-blur"
                style={{
                  borderColor: `${theme.colors.border}66`,
                  background: `${theme.colors.background}f2`,
                  boxShadow: theme.effects.shadowHover,
                }}
              >
                <LeadCaptureForm
                  title={t("leadForm.form.title")}
                  description={t("leadForm.form.description")}
                  showCompany={true}
                  showPhone={true}
                  showMessage={true}
                />
              </div>
            </div>
          </Section>

          {/* CTA Banner */}
          <Section variant="cta">
            <div
              className="px-4 sm:px-8 text-center"
              style={{ maxWidth: "64rem", margin: "0 auto" }}
            >
              <FadeIn>
                <div
                  className="relative overflow-hidden rounded-3xl border px-8 py-12"
                  style={{
                    borderColor: `${theme.colors.border}80`,
                    background: `${theme.colors.background}f5`,
                    boxShadow: theme.effects.shadow,
                  }}
                >
                  <div className="relative space-y-6">
                    <h2
                      className="text-4xl md:text-5xl"
                      style={{
                        fontWeight: theme.typography.headingWeight,
                        color: theme.colors.text,
                      }}
                    >
                      {t("cta.title")}
                    </h2>
                    <p
                      className="text-xl"
                      style={{
                        color: theme.colors.textMuted,
                        opacity: 0.95,
                      }}
                    >
                      {t("cta.subtitle")}
                    </p>
                    <Button
                      size="lg"
                      variant="primary"
                      onClick={() =>
                        document
                          .getElementById("lead-form")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      {t("cta.button")}
                    </Button>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Section>
        </main>
        <Footer />
      </div>
    </>
  );
}
