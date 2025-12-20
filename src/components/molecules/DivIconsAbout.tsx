import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: IconProp;
  text: string;
}

export default function DivIconsAbout({ icon, text }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <FontAwesomeIcon
        icon={icon}
        className="text-black text-2xl bg-teal-300 rounded-full p-3"
      />
      <p className="text-black font-bold">{text}</p>
    </div>
  );
}
