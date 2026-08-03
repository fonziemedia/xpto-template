import { useTranslation } from "react-i18next";

export default function useIntro() {
  const { t } = useTranslation();

  const metrics = [
    { value: t("metrics.m1Value"), label: t("metrics.m1Label") },
    { value: t("metrics.m2Value"), label: t("metrics.m2Label") },
    { value: t("metrics.m3Value"), label: t("metrics.m3Label") }
  ];

  const badges = [t("home.badge1"), t("home.badge2"), t("home.badge3")];

  return { t, metrics, badges };
}
