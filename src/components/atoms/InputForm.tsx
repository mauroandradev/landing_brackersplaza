interface Props {
  text: string;
  placeHolder: string;
  id: string;
  change: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputForm({ text, change, placeHolder, id }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor={id} className="text-slate-300">
        {text}
      </label>
      <input
        className="bg-black rounded-md p-3"
        type="text"
        name={id}
        id={id}
        placeholder={placeHolder}
        onChange={change}
      />
    </div>
  );
}
