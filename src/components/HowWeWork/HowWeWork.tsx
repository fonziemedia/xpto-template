import { Card } from "../UI";
import useHowWeWork from "./useHowWeWork";

export default function HowWeWork() {
  const { t, steps } = useHowWeWork();

  return (
    <section className="mt-10">
      <Card className="p-6 sm:p-8">
        <h2 className="mb-2 text-2xl font-bold text-(--sea-ink)">
          {t("process.title")}
        </h2>
        <p className="mb-5 text-sm text-(--sea-ink-soft) sm:text-base">
          {t("process.intro")}
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map(({ title, text }, index) => (
            <article key={title} className="process-card">
              <p className="process-step">0{index + 1}</p>
              <h3 className="mb-2 text-lg font-semibold text-(--sea-ink)">
                {title}
              </h3>
              <p className="m-0 text-sm leading-6 text-(--sea-ink-soft)">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}
