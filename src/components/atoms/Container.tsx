import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  background?: string;
}

export default function Container({ children, background }: Props) {
  return (
    <section
      className="min-h-9/10 w-screen"
      style={
        background
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }>
      <div className="w-3/4 flex flex-col m-auto ">{children}</div>
    </section>
  );
}
