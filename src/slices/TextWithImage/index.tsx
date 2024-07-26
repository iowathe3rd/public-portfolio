import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Image from "../Image";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid grid-cols-1 md:grid-cols-2"
    >
      <PrismicRichText field={slice.primary.text} />
      <PrismicNextImage
        field={slice.primary.image}
        className="w-full h-full rounded-md my-10 md:my-14 lg:my-16"
      />
    </section>
  );
};

export default TextWithImage;
