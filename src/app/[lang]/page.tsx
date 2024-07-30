import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import LocaleSwitcher from "@/components/LocaleSwitcher";
export default async function Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log(lang ,"KIJHPIUBHB")
  const client = createClient();
  const page = await client.getSingle("homepage", {
    lang: lang
  });

  return (
    <>
      <LocaleSwitcher />
      <SliceZone slices={page.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("homepage", {
    lang: lang
  });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    other: {
      "google-site-verification": "57wGkbDdwQoPxv-LZ-LSKPoVfdbJ7FcmwqnErS0OtvA",
    }
  };
}
