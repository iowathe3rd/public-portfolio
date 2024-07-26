import { SliceZone } from "@prismicio/react";
import { Content } from "@prismicio/client";

import { components } from "@/slices";
import Heading from "@/components/Heading";
import Bounded from "@/components/Bounded";
import { formatDate } from "@/utils/formatDate";

export default function ContentBody({
  page,
}: {
  page: Content.BlogPostDocument | Content.ProjectDocument;
}) {
  const formattedDate = formatDate(page.data.date);
  return (
    <Bounded as="article">
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
    </Bounded>
  );
}
