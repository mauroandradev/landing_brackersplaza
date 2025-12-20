interface Props {
  text: string;
  link: string;
}

export default function LiNav({ link, text }: Props) {
  return (
    <li>
      <a href={link}>{text}</a>
    </li>
  );
}
