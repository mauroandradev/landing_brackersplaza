import DivIconsAbout from "./DivIconsAbout";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  title: string;
  text: string;
}

export default function CardAmenities({ icon, title, text }: Props) {
  return (
    <div className="lg:h-50 p-7 bg-gray-50/90 rounded-md">
      <DivIconsAbout icon={icon} title={title} text={text} />
    </div>
  );
}
