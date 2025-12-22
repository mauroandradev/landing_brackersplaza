interface Props {
  text: string;
}

export default function PSection({ text }: Props) {
  return <p className="text-xl text-gray-600 text-base/8 ">{text}</p>;
}
