import type { IconType } from "react-icons";
import { FiLifeBuoy, FiMonitor, FiSend } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type Service = {
  icon: IconType;
  title: string;
  text: string;
  detail: string;
};

export default function useWhatWeDo() {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      icon: FiSend,
      title: t("services.items.messagingTitle"),
      text: t("services.items.messagingText"),
      detail: t("services.items.messagingDetail")
    },
    {
      icon: FiMonitor,
      title: t("services.items.designTitle"),
      text: t("services.items.designText"),
      detail: t("services.items.designDetail")
    },
    {
      icon: FiLifeBuoy,
      title: t("services.items.supportTitle"),
      text: t("services.items.supportText"),
      detail: t("services.items.supportDetail")
    }
  ];

  return { t, services };
}
