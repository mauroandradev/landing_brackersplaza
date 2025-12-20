interface Props {
  text: string;
}

export default function PSection({ text }: Props) {
  return <p className="text-gray-600">{text}</p>;
}
