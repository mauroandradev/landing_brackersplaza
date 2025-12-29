import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Form({ children }: Props) {
  return (
    <form
      onSubmit={() => console.log("hello")}
      className="w-full p-8 bg-slate-700 flex flex-col gap-5 rounded">
      {children}
      <button
        type="submit"
        onClick={() => console.log("mensaje")}
        className="p-3 bg-emerald-600 w-full rounded-md">
        Send Message
      </button>
    </form>
  );
}
