import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function useHeader() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(prev => !prev);
  }

  async function changeLanguage(nextLanguage: string) {
    await i18n.changeLanguage(nextLanguage);
  }

  return {
    t,
    i18n,
    isMobileMenuOpen,
    closeMobileMenu,
    toggleMobileMenu,
    changeLanguage
  };
}
