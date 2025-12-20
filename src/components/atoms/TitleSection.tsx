interface Props {
  text: string;
}

export default function TitleSection({ text }: Props) {
  return (
    <h1 className="text-4xl text-black font-bold underline decoration-teal-300 decoration-2 underline-offset-8">
      {text}
    </h1>
  );
}
