import { Button, Card } from "../UI";
import useContactUs from "./useContactUs";

export default function ContactUs() {
  const { t, contactItems } = useContactUs();

  return (
    <Card as="section" id="contact" className="mt-10 p-6 sm:p-8">
      <h2 className="mb-3 text-2xl font-bold text-(--sea-ink)">
        {t("contact.title")}
      </h2>
      <p className="mb-6 max-w-3xl text-sm leading-6 text-(--sea-ink-soft) sm:text-base">
        {t("contact.intro")}
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {contactItems.map(({ icon: Icon, label, value }) => (
            <div key={label} className="contact-row">
              <Icon aria-hidden="true" />
              <div className="contact-row-text">
                <span className="contact-row-label">{label}:</span>
                <span className="contact-row-value">{value}</span>
              </div>
            </div>
          ))}
        </div>

        <Card as="form" radius="xl" className="p-4 sm:p-5">
          <div className="grid gap-3">
            <input
              className="demo-input"
              type="text"
              placeholder={t("contact.formName")}
            />
            <input
              className="demo-input"
              type="email"
              placeholder={t("contact.formEmail")}
            />
            <textarea
              className="demo-textarea"
              placeholder={t("contact.formMessage")}
            />
            <Button type="button" className="w-full sm:w-auto">
              {t("contact.formButton")}
            </Button>
            <p className="m-0 text-xs text-(--sea-ink-soft)">
              {t("contact.note")}
            </p>
          </div>
        </Card>
      </div>
    </Card>
  );
}
