import * as React from "react";
import { cn } from "@/lib/utils"; // Ensure you have this utility for class name manipulation

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ className, ratio = 16 / 9, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{
          paddingBottom: `${100 / ratio}%`, // Calculate the aspect ratio percentage
        }}
        {...props}
      >
        <div className="absolute inset-0">{children}</div>
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
