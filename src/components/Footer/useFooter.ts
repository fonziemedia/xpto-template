import { useTranslation } from "react-i18next";

export default function useFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return {
    t,
    year
  };
}
