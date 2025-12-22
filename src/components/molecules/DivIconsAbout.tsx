import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PSection from "../atoms/PSection";

interface Props {
  icon: IconProp;
  text?: string;
  title: string;
}

export default function DivIconsAbout({ icon, text, title }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <FontAwesomeIcon
        icon={icon}
        className="text-black text-xl bg-teal-300 rounded-full p-3"
      />
      <p className="text-black font-semibold text-center text-xl">{title}</p>
      {text && <PSection text={text} />}
    </div>
  );
}
