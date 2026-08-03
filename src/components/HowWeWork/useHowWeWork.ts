import { useTranslation } from "react-i18next";

type ProcessStep = {
  title: string;
  text: string;
};

export default function useHowWeWork() {
  const { t } = useTranslation();

  const steps: ProcessStep[] = [
    { title: t("process.step1Title"), text: t("process.step1Text") },
    { title: t("process.step2Title"), text: t("process.step2Text") },
    { title: t("process.step3Title"), text: t("process.step3Text") }
  ];

  return { t, steps };
}
