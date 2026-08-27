import { Card } from "@/components/UI";
import useWhatWeDo from "./useWhatWeDo";

export default function WhatWeDo() {
  const { t, services } = useWhatWeDo();

  return (
    <section id="what-we-do" className="mt-8">
      <h2 className="mb-4 text-2xl font-bold text-(--sea-ink)">
        {t("services.title")}
      </h2>
      <p className="mb-5 max-w-3xl text-sm leading-6 text-(--sea-ink-soft) sm:text-base">
        {t("services.intro")}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, text, detail }) => (
          <Card as="article" key={title} tone="feature" className="p-5">
            <span className="icon-badge" aria-hidden="true">
              <Icon />
            </span>
            <h3 className="mb-2 text-lg font-semibold text-(--sea-ink)">
              {title}
            </h3>
            <p className="m-0 text-sm text-(--sea-ink-soft)">{text}</p>
            <p className="mt-3 m-0 text-sm leading-6 text-(--sea-ink-soft)">
              {detail}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
