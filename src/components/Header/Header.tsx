import { Link } from "@tanstack/react-router";
import { FiHexagon } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import LanguageSelect from "../LanguageSelect";
import ThemeToggle from "../ThemeToggle";
import useHeader from "./useHeader";

export default function Header() {
  const {
    t,
    i18n,
    isMobileMenuOpen,
    closeMobileMenu,
    toggleMobileMenu,
    changeLanguage
  } = useHeader();

  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav
        className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3.5 sm:py-4"
        aria-label="Primary"
      >
        <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
          <Link to="/" className="brand-pill" onClick={closeMobileMenu}>
            <span className="logo-chip" aria-hidden="true">
              <FiHexagon />
            </span>
            {t("header.brand")}
          </Link>
        </h2>

        <button
          type="button"
          aria-controls="mobile-nav-menu"
          aria-expanded={isMobileMenuOpen}
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg border border-(--line) bg-(--surface-strong) text-(--sea-ink) transition hover:bg-(--link-bg-hover) sm:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
        </button>

        <div
          id="mobile-nav-menu"
          className={`order-3 w-full pb-1 text-sm font-semibold sm:order-0 sm:ml-auto sm:w-auto sm:pb-0 ${
            isMobileMenuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <div className="flex flex-col gap-y-1 rounded-lg border border-(--line) bg-(--surface-strong) p-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:border-0 sm:bg-transparent sm:p-0">
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>
              {t("header.home")}
            </a>
            <a
              href="#what-we-do"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {t("header.whatWeDo")}
            </a>
            <a
              href="#testimonials"
              className="nav-link"
              onClick={closeMobileMenu}
            >
              {t("header.testimonials")}
            </a>
            <a href="#contact" className="nav-link" onClick={closeMobileMenu}>
              {t("header.contact")}
            </a>
            <div className="ml-auto hidden items-center gap-1.5 sm:flex sm:gap-2">
              <LanguageSelect
                id="lang-select-desktop"
                value={i18n.language}
                onChange={changeLanguage}
              />
              <ThemeToggle />
            </div>
            <div className="mt-2 flex items-center gap-1.5 border-t border-(--line) pt-2 sm:hidden">
              <LanguageSelect
                id="lang-select-mobile"
                value={i18n.language}
                onChange={changeLanguage}
              />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
