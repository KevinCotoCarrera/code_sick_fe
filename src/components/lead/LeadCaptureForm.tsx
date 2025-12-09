"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { submitLead, type LeadData } from "@/lib/actions/leadCapture";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useTheme } from "@/lib/theme/ThemeProvider";

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  showCompany?: boolean;
  showPhone?: boolean;
  showMessage?: boolean;
  className?: string;
}

export default function LeadCaptureForm({
  title = "Get Early Access",
  description = "Join our waitlist and be the first to know when we launch.",
  showCompany = true,
  showPhone = false,
  showMessage = false,
  className = "",
}: LeadCaptureFormProps) {
  const t = useTranslations("landing.leadForm.form");
  const theme = useTheme();
  const accentColor = theme.colors.accent || theme.colors.primary;
  const primaryColor = theme.colors.primary || accentColor;
  const isDarkMode = theme.mode === "dark";
  const inputClassName = isDarkMode
    ? "!bg-white/5 !border-white/10 !text-white !placeholder-white/50 focus:!border-white/30 focus:!ring-2 focus:!ring-white/20"
    : "!bg-white !border-gray-200 !text-gray-900 !placeholder-gray-400 focus:!border-amber-400 focus:!ring-amber-100";
  const [formData, setFormData] = useState<LeadData>({
    email: "",
    name: "",
    company: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      const result = await submitLead(formData);

      if (result.success) {
        setStatus({ type: "success", message: result.message });
        setFormData({
          email: "",
          name: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: result.message });
      }

      // Clear status after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full ${className}`}
    >
      <div
        className="relative overflow-hidden rounded-3xl border p-6 sm:p-8 backdrop-blur"
        style={{
          borderColor: `${theme.colors.border}80`,
          background: `linear-gradient(135deg, ${theme.colors.background}f2 0%, ${theme.colors.background}e8 100%)`,
          boxShadow: theme.effects.shadowHover,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at 20% 20%, ${accentColor}26, transparent 45%), radial-gradient(circle at 80% 0%, ${primaryColor}15, transparent 40%)`,
          }}
        />

        <div className="relative space-y-6">
          <div className="space-y-2">
            <h3
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: theme.colors.text }}
            >
              {title}
            </h3>
            <p className="text-base" style={{ color: theme.colors.textMuted }}>
              {description}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
          >
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold"
                style={{ color: theme.colors.text }}
              >
                {t("fields.name")} *
              </label>
              <Input
                id="name"
                type="text"
                placeholder={t("placeholders.name")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                disabled={isPending}
                className={inputClassName}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold"
                style={{ color: theme.colors.text }}
              >
                {t("fields.email")} *
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t("placeholders.email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isPending}
                className={inputClassName}
              />
            </div>

            {showCompany && (
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-semibold"
                  style={{ color: theme.colors.text }}
                >
                  {t("fields.company")}
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder={t("placeholders.company")}
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  disabled={isPending}
                  className={inputClassName}
                />
              </div>
            )}

            {showPhone && (
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-semibold"
                  style={{ color: theme.colors.text }}
                >
                  {t("fields.phone")}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t("placeholders.phone")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  disabled={isPending}
                  className={inputClassName}
                />
              </div>
            )}

            {showMessage && (
              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-sm font-semibold"
                  style={{ color: theme.colors.text }}
                >
                  {t("fields.message")}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder={t("placeholders.message")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  disabled={isPending}
                  className={`w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 disabled:opacity-60 ${
                    isDarkMode
                      ? "text-white placeholder-white/50 focus:border-white/30 focus:ring-white/20"
                      : "text-gray-900 placeholder-gray-400 focus:border-amber-400 focus:ring-amber-100"
                  }`}
                  style={
                    isDarkMode
                      ? {
                          background: "rgba(255, 255, 255, 0.05)",
                          borderColor: "rgba(255, 255, 255, 0.15)",
                        }
                      : {
                          background: "rgba(255, 255, 255, 1)",
                          borderColor: "rgba(17, 24, 39, 0.08)",
                        }
                  }
                />
              </div>
            )}

            <div className="md:col-span-2 space-y-3">
              <Button
                type="submit"
                variant="primary"
                fullWidth
                isLoading={isPending}
                className="h-12 text-base font-semibold"
              >
                {isPending ? t("submitting") : t("submit")}
              </Button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border px-4 py-3 text-sm"
                  style={{
                    borderColor:
                      status.type === "success"
                        ? "rgba(16, 185, 129, 0.35)"
                        : "rgba(248, 113, 113, 0.35)",
                    background:
                      status.type === "success"
                        ? "rgba(16, 185, 129, 0.08)"
                        : "rgba(248, 113, 113, 0.08)",
                    color:
                      status.type === "success"
                        ? "rgb(34, 197, 94)"
                        : "rgb(239, 68, 68)",
                  }}
                >
                  {status.message}
                </motion.div>
              )}
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
