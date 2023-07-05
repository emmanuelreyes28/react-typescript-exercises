import { useRef } from "react";
import { string } from "zod";

export const Component = () => {
  const ref = useRef<HTMLDivElement>(null);

  return <div ref={ref} />;
};
