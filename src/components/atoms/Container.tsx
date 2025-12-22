import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: string;
}

export default function Container({ children, background }: Props) {
  return (
    <section
      className="min-h-[70vh] flex items-center"
      style={
        background
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              maxWidth: "",
            }
          : {}
      }>
      <div className=" w-3/4  mx-auto">{children}</div>
    </section>
  );
}
