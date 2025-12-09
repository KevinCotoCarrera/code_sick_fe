"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import NavBar from "@components/layout/NavBar";
import Footer from "@components/layout/Footer";
import Section from "@components/layout/Section";
import { Card } from "@components/ui/Card";
import Button from "@components/ui/Button";
import { useTheme } from "@lib/theme/ThemeProvider";
import {
  BarChart3,
  Layers,
  Palette,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const tones = ["Bold", "Minimal", "Playful", "Editorial"];
const accents = ["#2563eb", "#7c3aed", "#0ea5e9", "#22c55e", "#f59e0b"];

export default function TemplateCustomizePage() {
  const theme = useTheme();
  const [tone, setTone] = useState<string>(tones[0]);
  const [accent, setAccent] = useState<string>(accents[0]);
  const [radius, setRadius] = useState<number>(12);
  const [showBadges, setShowBadges] = useState<boolean>(true);

  const previewStyle = useMemo(
    () => ({
      borderRadius: `${radius}px`,
      border: `1px solid ${theme.colors.border}`,
      background: `${theme.colors.background}e6`,
      boxShadow: theme.effects.shadowHover,
    }),
    [
      radius,
      theme.colors.background,
      theme.colors.border,
      theme.effects.shadowHover,
    ]
  );

  return (
    <>
      <NavBar />
      <main>
        <Section variant="default">
          <div
            className="px-4 sm:px-8"
            style={{ maxWidth: theme.spacing.container, margin: "0 auto" }}
          >
            <div className="flex flex-col gap-4 mb-10">
              <div
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                style={{
                  background: `${theme.colors.primary}15`,
                  color: theme.colors.primary,
                  borderRadius: theme.effects.borderRadius,
                  border: `1px solid ${theme.colors.primary}30`,
                }}
              >
                <SlidersHorizontal
                  className="h-4 w-4"
                  color={theme.colors.primary}
                />
                Template customization panel
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-2">
                  <h1
                    className="text-4xl md:text-5xl"
                    style={{
                      fontWeight: theme.typography.headingWeight,
                      color: theme.colors.text,
                    }}
                  >
                    Tailor a template to your brand
                  </h1>
                  <p
                    className="text-lg"
                    style={{ color: theme.colors.textMuted }}
                  >
                    Adjust tone, accent colors, and surfaces. Apply settings,
                    then export or sync back to the landing.
                  </p>
                </div>
                <Link href="/templates">
                  <Button variant="secondary">Back to templates</Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10">
              <Card
                hoverable
                className="relative"
                padding="lg"
              >
                <div
                  className="relative overflow-hidden"
                  style={previewStyle}
                >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/8 to-transparent pointer-events-none" />
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-11 w-11 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${accent}1a`,
                        border: `1px solid ${accent}40`,
                      }}
                    >
                      <Sparkles className="h-5 w-5" color={accent} />
                    </div>
                    <div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: theme.colors.text }}
                      >
                        Preview Template
                      </div>
                      <div
                        className="text-xs"
                        style={{ color: theme.colors.textMuted }}
                      >
                        Tone: {tone} · Accent: {accent}
                      </div>
                    </div>
                  </div>
                  {showBadges && (
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: `${theme.colors.primary}15`,
                        color: theme.colors.primary,
                        border: `1px solid ${theme.colors.primary}30`,
                        borderRadius: theme.effects.borderRadius,
                      }}
                    >
                      Badge
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: `${theme.colors.border}80` }}
                  >
                    <div className="flex items-center gap-3">
                      <BarChart3 className="h-5 w-5" color={accent} />
                      <div>
                        <div
                          className="text-base font-semibold"
                          style={{ color: theme.colors.text }}
                        >
                          Hero metrics
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: theme.colors.textMuted }}
                        >
                          Strong headline, KPI chips, and dual CTAs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: `${theme.colors.border}80` }}
                  >
                    <div className="flex items-center gap-3">
                      <Layers className="h-5 w-5" color={accent} />
                      <div>
                        <div
                          className="text-base font-semibold"
                          style={{ color: theme.colors.text }}
                        >
                          Feature stack
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: theme.colors.textMuted }}
                        >
                          Modular cards with iconography and rich descriptions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="rounded-2xl border px-4 py-3"
                    style={{ borderColor: `${theme.colors.border}80` }}
                  >
                    <div className="flex items-center gap-3">
                      <Palette className="h-5 w-5" color={accent} />
                      <div>
                        <div
                          className="text-base font-semibold"
                          style={{ color: theme.colors.text }}
                        >
                          Visual system
                        </div>
                        <p
                          className="text-sm"
                          style={{ color: theme.colors.textMuted }}
                        >
                          Harmonized typography, spacing, and button treatments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </Card>

              <Card hoverable padding="lg" className="space-y-6">
                <div className="space-y-2">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: theme.colors.textMuted }}
                  >
                    Tone
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {tones.map((option) => (
                      <button
                        key={option}
                        onClick={() => setTone(option)}
                        className={`px-3 py-2 rounded-full text-sm border ${
                          tone === option ? "font-semibold" : ""
                        }`}
                        style={{
                          borderColor:
                            tone === option
                              ? theme.colors.primary
                              : theme.colors.border,
                          color:
                            tone === option
                              ? theme.colors.primary
                              : theme.colors.text,
                          background:
                            tone === option
                              ? `${theme.colors.primary}15`
                              : theme.colors.background,
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className="text-sm font-semibold"
                      style={{ color: theme.colors.textMuted }}
                    >
                      Border radius ({radius}px)
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: theme.colors.textMuted }}
                    >
                      Softer cards = warmer feel
                    </div>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={22}
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: theme.colors.textMuted }}
                  >
                    Accent color
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    {accents.map((value) => (
                      <button
                        key={value}
                        onClick={() => setAccent(value)}
                        className={`h-10 w-10 rounded-full border ${
                          accent === value ? "ring-2 ring-offset-2" : ""
                        }`}
                        style={{
                          background: value,
                          borderColor:
                            accent === value
                              ? theme.colors.text
                              : "transparent",
                          boxShadow:
                            accent === value ? theme.effects.shadow : "none",
                        }}
                        aria-label={`Accent ${value}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm" style={{ color: theme.colors.text }}>
                    Show badge chip
                  </div>
                  <label
                    className="flex items-center gap-2 text-sm"
                    style={{ color: theme.colors.text }}
                  >
                    <input
                      type="checkbox"
                      checked={showBadges}
                      onChange={(e) => setShowBadges(e.target.checked)}
                      className="h-4 w-4"
                    />
                    Enabled
                  </label>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <Button size="lg" variant="primary">
                    Apply to template
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => {
                      setTone(tones[0]);
                      setAccent(accents[0]);
                      setRadius(12);
                      setShowBadges(true);
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
