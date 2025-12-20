import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function UlNav({ children, className }: Props) {
  return <ul className={className ?? ""}>{children}</ul>;
}
