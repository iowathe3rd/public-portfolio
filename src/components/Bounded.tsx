import React from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={clsx(className)}
        {...restProps}
      >
        <div className="mx-auto w-full max-w-screen-2xl">{children}</div>
      </Comp>
    );
  },
);

// Set a display name for the component
Bounded.displayName = "Bounded";

export default Bounded;
