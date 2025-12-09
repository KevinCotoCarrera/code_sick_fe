"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import NavBar from "@components/layout/NavBar";
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

// Dynamic imports for 3D components (client-side only)
const Hero3D = dynamic(() => import("@components/three/Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 animate-pulse rounded-xl" />
  ),
});

const Feature3D = dynamic(() => import("@components/three/Feature3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 animate-pulse rounded-xl" />
  ),
});

const Product3D = dynamic(() => import("@components/three/Product3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 animate-pulse rounded-xl" />
  ),
});

export default function Home() {
  const t = useTranslations("landing");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <SEOScripts />
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <NavBar />

        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
          {/* Hero Section with 3D */}
          <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Background 3D Element */}
            <div className="absolute inset-0 z-0">
              <Suspense fallback={<div className="w-full h-full bg-blue-50" />}>
                <Hero3D />
              </Suspense>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 py-20">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <FadeIn>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-block"
                    >
                      <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
                        {t("hero.badge")}
                      </span>
                    </motion.div>
                  </FadeIn>

                  <SlideIn direction="left">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                      {t("hero.title")}
                    </h1>
                  </SlideIn>

                  <SlideIn direction="left" delay={0.2}>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {t("hero.description")}
                    </p>
                  </SlideIn>

                  <SlideIn direction="left" delay={0.4}>
                    <div className="flex flex-wrap gap-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
                        onClick={() =>
                          document
                            .getElementById("lead-form")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        {t("hero.cta.primary")}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg border-2 border-gray-200 hover:border-blue-500 transition-colors"
                        onClick={() =>
                          document
                            .getElementById("features")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                      >
                        {t("hero.cta.secondary")}
                      </motion.button>
                    </div>
                  </SlideIn>
                </div>

                <div className="relative h-[400px] lg:h-[600px]">
                  {/* Placeholder for hero image or additional 3D element */}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="relative py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <FadeIn>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {t("features.title")}
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    {t("features.subtitle")}
                  </p>
                </div>
              </FadeIn>

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: t("features.items.analytics.title"),
                    description: t("features.items.analytics.description"),
                    icon: t("features.items.analytics.icon"),
                  },
                  {
                    title: t("features.items.tracking.title"),
                    description: t("features.items.tracking.description"),
                    icon: t("features.items.tracking.icon"),
                  },
                  {
                    title: t("features.items.integration.title"),
                    description: t("features.items.integration.description"),
                    icon: t("features.items.integration.icon"),
                  },
                ].map((feature, index) => (
                  <FloatingCard key={index}>
                    <div className="h-full p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-lg">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </FloatingCard>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* 3D Interactive Section */}
          <section className="relative py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <SlideIn direction="left">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                      {t("showcase.title")}
                    </h2>
                    <p className="text-xl text-gray-600">
                      {t("showcase.description")}
                    </p>
                    <ul className="space-y-4">
                      {[
                        t("showcase.items.dashboards"),
                        t("showcase.items.visualization"),
                        t("showcase.items.analytics"),
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
                            ✓
                          </span>
                          <span className="text-lg text-gray-700">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </SlideIn>

                <SlideIn direction="right">
                  <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Suspense
                      fallback={
                        <div className="w-full h-full bg-purple-100 animate-pulse" />
                      }
                    >
                      <Feature3D variant="cube" />
                    </Suspense>
                  </div>
                </SlideIn>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xl text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* Product Showcase with 3D */}
          <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-8">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <SlideIn direction="left">
                  <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Suspense
                      fallback={
                        <div className="w-full h-full bg-green-100 animate-pulse" />
                      }
                    >
                      <Product3D />
                    </Suspense>
                  </div>
                </SlideIn>

                <SlideIn direction="right">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                      {t("product.title")}
                    </h2>
                    <p className="text-xl text-gray-600">
                      {t("product.description")}
                    </p>
                    <div className="space-y-4">
                      {[
                        t("product.features.security"),
                        t("product.features.uptime"),
                        t("product.features.support"),
                        t("product.features.integrations"),
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                        >
                          <span className="text-2xl">✨</span>
                          <span className="text-lg text-gray-700">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </section>

          {/* Lead Capture Section */}
          <section id="lead-form" className="py-20 bg-white">
            <div className="mx-auto max-w-3xl px-4 sm:px-8">
              <FadeIn>
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {t("leadForm.title")}
                  </h2>
                  <p className="text-xl text-gray-600">
                    {t("leadForm.subtitle")}
                  </p>
                </div>
              </FadeIn>

              <LeadCaptureForm
                title={t("leadForm.form.title")}
                description={t("leadForm.form.description")}
                showCompany={true}
                showPhone={true}
                showMessage={true}
              />
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <div className="mx-auto max-w-4xl px-4 sm:px-8 text-center">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  {t("cta.title")}
                </h2>
                <p className="text-xl mb-8 opacity-90">{t("cta.subtitle")}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-shadow text-lg"
                  onClick={() =>
                    document
                      .getElementById("lead-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {t("cta.button")}
                </motion.button>
              </FadeIn>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
}
