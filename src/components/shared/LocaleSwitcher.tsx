import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "es",
          label: t("es"),
        },
        {
          value: "fr",
          label: t("fr"),
        },
        {
          value: "ja",
          label: t("ja"),
        },
        {
          value: "ko",
          label: t("ko"),
        },
        {
          value: "th",
          label: t("th"),
        },
        {
          value: "pt",
          label: t("pt"),
        },
        {
          value: "it",
          label: t("it"),
        },
        {
          value: "zh",
          label: t("zh"),
        },
      ]}
      label={t("label")}
    />
  );
}
