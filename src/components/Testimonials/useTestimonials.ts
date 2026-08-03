import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export default function useTestimonials() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobileTestimonials, setIsMobileTestimonials] = useState(false);

  const testimonials = useMemo<Testimonial[]>(
    () =>
      Array.from({ length: 9 }, (_, index) => {
        const item = index + 1;
        return {
          quote: t(`testimonials.quote${item}`),
          author: t(`testimonials.author${item}`),
          role: t(`testimonials.role${item}`)
        };
      }),
    [t]
  );

  const testimonialSlides = useMemo(
    () =>
      isMobileTestimonials
        ? testimonials.map(item => [item])
        : [
            testimonials.slice(0, 3),
            testimonials.slice(3, 6),
            testimonials.slice(6, 9)
          ],
    [isMobileTestimonials, testimonials]
  );

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");

    const syncMobileState = () => {
      setIsMobileTestimonials(media.matches);
    };

    syncMobileState();
    media.addEventListener("change", syncMobileState);

    return () => {
      media.removeEventListener("change", syncMobileState);
    };
  }, []);

  useEffect(() => {
    if (!testimonialSlides.length) {
      return;
    }

    setActiveSlide(current => current % testimonialSlides.length);
  }, [testimonialSlides.length]);

  useEffect(() => {
    if (isPaused || !testimonialSlides.length) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide(current => (current + 1) % testimonialSlides.length);
    }, 3000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, testimonialSlides.length]);

  return {
    t,
    activeSlide,
    setActiveSlide,
    setIsPaused,
    testimonialSlides
  };
}
