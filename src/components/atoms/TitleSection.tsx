interface Props {
  text: string;
}

export default function TitleSection({ text }: Props) {
  return (
    <h1 className="text-6xl text-black font-bolder underline decoration-teal-300 decoration-2 underline-offset-8 font-[Ephesis]">
      {text}
    </h1>
  );
}
