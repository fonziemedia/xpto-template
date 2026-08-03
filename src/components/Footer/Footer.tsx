import useFooter from "./useFooter";

export default function Footer() {
  const { t, year } = useFooter();

  return (
    <footer className="mt-20 border-t border-(--line) px-4 pb-14 pt-10 text-(--sea-ink-soft)">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">&copy; {year} North Harbor Studio</p>
        <p className="island-kicker m-0">{t("footer.tagline")}</p>
      </div>
    </footer>
  );
}
