import { useTranslations } from "next-intl";
import Link from "next/link";
import TLFaceBookLine from "../facebook-line";
import TLCommunicationEmail from "../icons/tl-communication-email-icon";
import TLCommunicationLocation from "../icons/tl-communication-location-icon";
import TLCommunicationPhone from "../icons/tl-communication-phone-icon";
import TLInstagramLine from "../instagram-line";
import TLLinkedInLine from "../linkedin-line";
import TLMessangerLine from "../messanger-line";
import TLTelegramLine from "../telegram-line";
import TLWhatsappLine from "../whatsapp-line";
import { useHomeData } from "@/contexts/global/home-data";

const ContactLinksItems = () => {
  const t = useTranslations();
  const { appSettings } = useHomeData();

  return (
    <div className="flex flex-col gap-y-3">
      {appSettings.communication_email && (
        <Link
          href={`mailto:${appSettings.communication_email}`}
          className="contact-item  flex flex-row gap-3 items-center"
        >
          <div className=" text-[#404040] bg-[#100C261A] rounded-2xl p-2">
            <TLCommunicationEmail />
          </div>
          <div className="flex-1 flex-col flex">
            <span className=" text-[#8A8A8A]">{t("Email")}</span>
            <span className="text-[#020202] font-medium">
              {appSettings.communication_email}
            </span>
          </div>
        </Link>
      )}

      {appSettings.communication_mobile && (
        <Link
          href={`tel:${appSettings.communication_mobile}`}
          className="contact-item flex flex-row gap-3 items-center"
        >
          <div className=" text-[#F7BD11] bg-[#F7BD111A] p-2 rounded-2xl">
            <TLCommunicationPhone />
          </div>
          <div className="flex-1 flex-col flex">
            <span className=" text-[#8A8A8A]">{t("Phone")}</span>
            <span className="text-[#020202] font-medium">
              {appSettings.communication_mobile}
            </span>
          </div>
        </Link>
      )}
      {appSettings.communication_address && (
        <div className="contact-item flex flex-row gap-3 items-center">
          <div className=" text-[#3A9000] bg-[#3A90001A] p-2 rounded-2xl">
            <TLCommunicationLocation />
          </div>
          <div className="flex-1 flex-col flex">
            <span className=" text-[#8A8A8A]">{t("Location")}</span>
            <span className="text-[#020202] font-medium">
              {appSettings.communication_address}
            </span>
          </div>
        </div>
      )}
      <div className=" max-w-lg">
        <iframe
          src={`https://www.google.com/maps?q=${appSettings.communication_map_lat},${appSettings.communication_map_long}&z=14&output=embed`}
          className="lg:w-[600px] lg:h-[500px] size-[300px] "
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactLinksItems;
