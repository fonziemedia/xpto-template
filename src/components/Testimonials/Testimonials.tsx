import { FiStar } from "react-icons/fi";
import { Card } from "@/components/UI";
import useTestimonials from "./useTestimonials";

export default function Testimonials() {
  const { t, activeSlide, setActiveSlide, setIsPaused, testimonialSlides } =
    useTestimonials();

  const currentSlide = testimonialSlides[activeSlide] ?? [];

  return (
    <section
      id="testimonials"
      className="mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="mb-4 text-2xl font-bold text-(--sea-ink)">
        {t("testimonials.title")}
      </h2>
      <p className="mb-5 max-w-3xl text-sm leading-6 text-(--sea-ink-soft) sm:text-base">
        {t("testimonials.intro")}
      </p>
      <Card className="p-4 sm:p-5">
        <div
          key={activeSlide}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {currentSlide.map((item, index) => (
            <Card
              as="blockquote"
              key={`${item.author}-${activeSlide}-${index}`}
              className="rise-in p-5"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div className="mb-3 flex items-center gap-1 text-(--lagoon-deep)">
                <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
              </div>
              <p className="m-0 text-sm text-(--sea-ink-soft)">{item.quote}</p>
              <footer className="mt-3">
                <p className="m-0 text-sm font-semibold text-(--sea-ink)">
                  {item.author}
                </p>
                <p className="m-0 text-xs text-(--sea-ink-soft)">{item.role}</p>
              </footer>
            </Card>
          ))}
        </div>
      </Card>
      <div className="mt-4 flex items-center justify-center gap-2">
        {testimonialSlides.map((_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Go to testimonial slide ${index + 1}`}
            onClick={() => setActiveSlide(index)}
            className={`h-2 w-2 rounded-full transition ${
              index === activeSlide
                ? "bg-(--lagoon-deep)"
                : "bg-[color-mix(in_oklab,var(--line)_72%,transparent)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
