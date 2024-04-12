import { type InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { type getStaticProps } from "~/pages";
import H1 from "./h1";
import H2 from "./h2";
import P from "./p";

export function SiteContent({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <MDXRemote
      {...source}
      components={{
        h1: H1,
        h2: H2,
        p: P,
      }}
    />
  );
}
