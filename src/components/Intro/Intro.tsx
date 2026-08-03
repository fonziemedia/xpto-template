import { FiArrowRight } from "react-icons/fi";
import { Button, Card } from "../UI";
import useIntro from "./useIntro";

export default function Intro() {
  const { t, metrics, badges } = useIntro();

  return (
    <Card
      as="section"
      id="home"
      radius="4xl"
      className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="pointer-events-none absolute -right-20 -top-16 h-52 w-52 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.36),transparent_66%)]" />
      <div className="grid gap-8 lg:grid-cols-[1.35fr_0.8fr] lg:items-end">
        <div>
          <p className="island-kicker mb-3">{t("home.kicker")}</p>
          <h1 className="display-title mb-4 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
            {t("home.title")}
          </h1>
          <p className="max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
            {t("home.subtitle")}
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-(--sea-ink-soft) sm:text-base">
            {t("home.description")}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="#contact">
              {t("home.ctaPrimary")}
              <FiArrowRight aria-hidden="true" />
            </Button>
            <Button href="#what-we-do" variant="secondary">
              {t("home.ctaSecondary")}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map(badge => (
              <span key={badge} className="pill-chip">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <Card as="aside" className="p-5">
          <p className="island-kicker mb-3">Studio Snapshot</p>
          <div className="space-y-3">
            {metrics.map(({ value, label }) => (
              <div key={label} className="metric-row">
                <p className="m-0 text-2xl font-extrabold text-(--sea-ink)">
                  {value}
                </p>
                <p className="m-0 text-sm text-(--sea-ink-soft)">{label}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Card>
  );
}
