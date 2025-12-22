interface Props {
  text: string;
  colorText?: string;
}

export default function TitleHeader({ text, colorText }: Props) {
  return (
    <h1 className={`text-6xl xl:text-6xl font-black ${colorText}`}>{text}</h1>
  );
}
