import { PrismicImage, PrismicRichText, SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import { formatDate } from "@/utils/formatDate";
import { BentoGridItem } from "./ui/BentoGrid";

export default function ContentBody({
  page,
  additionalArticles,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
  additionalArticles?: Content.BlogPostDocument[];
}) {
  const formattedDate = formatDate(page.data.date);
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto max-w-screen-2xl">
      <article className="col-span-2 p-0">
        <div className="rounded-2xl border-2 border-zinc-800 bg-white/[0.1] px-4 py-10 md:px-8 md:py-20">
          <Heading as="h1" size="md">{page.data.title}</Heading>
          <div className="flex gap-4 text-zinc-400">
            {page.tags.map((tag, index) => (
              <span key={index} className="text-xl font-bold">
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-200">
            {formattedDate}
          </p>
          <div className="md:prose-base prose-sm lg:prose-lg sm:prose-sm prose text-slate-200 prose-invert max-w-none mt-5">
            <SliceZone slices={page.data.slices} components={components} />
          </div>
        </div>
      </article>
      <section className="flex md:flex-col gap-4 flex-row">
          {additionalArticles && additionalArticles.map((value, index) => (
            <BentoGridItem key={index} href={value.uid} title={value.data.title} description={<PrismicRichText field={value.data.short_description} />} header={<PrismicImage field={value.data.image} width={"100%"} height={"100%"} />} />
          ))}
      </section>
    </section>
  );
}
