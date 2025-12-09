"use client";

import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { submitLead, type LeadData } from "@/lib/actions/leadCapture";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

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
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
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
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
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
            />
          </div>

          {showCompany && (
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
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
              />
            </div>
          )}

          {showPhone && (
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
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
              />
            </div>
          )}

          {showMessage && (
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            {isPending ? t("submitting") : t("submit")}
          </Button>

          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg ${
                status.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {status.message}
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
