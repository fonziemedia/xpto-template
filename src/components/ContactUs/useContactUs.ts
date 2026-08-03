import type { IconType } from "react-icons";
import { FiCheckCircle, FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type ContactItem = {
  icon: IconType;
  label: string;
  value: string;
};

export default function useContactUs() {
  const { t } = useTranslation();

  const contactItems: ContactItem[] = [
    {
      icon: FiMail,
      label: t("contact.emailLabel"),
      value: "hello@northharbor.studio"
    },
    {
      icon: FiPhoneCall,
      label: t("contact.phoneLabel"),
      value: "(555) 123-9876"
    },
    {
      icon: FiMapPin,
      label: t("contact.addressLabel"),
      value: t("contact.addressValue")
    },
    {
      icon: FiCheckCircle,
      label: t("contact.hoursLabel"),
      value: t("contact.hoursValue")
    }
  ];

  return { t, contactItems };
}
