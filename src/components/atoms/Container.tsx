import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: string;
}

export default function Container({ children, background }: Props) {
  return (
    <section
      className="min-h-9/10 "
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
      <div className="w-3/4 flex flex-col m-auto ">{children}</div>
    </section>
  );
}
