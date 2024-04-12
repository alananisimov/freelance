import React from "react";

export default function P({ children }: { children?: React.ReactNode }) {
  return (
    <p className="pb-6 leading-7 [&:not(:first-child)]:mt-6">{children}</p>
  );
}
