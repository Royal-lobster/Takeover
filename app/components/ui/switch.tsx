import * as React from "react";

import { cn } from "@/lib/utils";

type SwitchProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked = false,
      onCheckedChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] =
      React.useState(defaultChecked);
    const currentChecked = isControlled ? checked : internalChecked;

    const toggle = () => {
      const next = !currentChecked;
      if (!isControlled) setInternalChecked(next);
      onCheckedChange?.(next);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={currentChecked}
        data-state={currentChecked ? "checked" : "unchecked"}
        data-disabled={disabled ? "" : undefined}
        disabled={disabled}
        onClick={toggle}
        className={cn(
          "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center justify-start rounded-full border border-input/70 bg-muted/60 px-0.5 transition-all focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 focus-visible:border-ring/80 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          className,
        )}
        {...props}
      >
        <span
          data-state={currentChecked ? "checked" : "unchecked"}
          className={cn(
            "pointer-events-none block size-[14px] translate-x-[2px] rounded-full bg-background shadow-sm transition-transform data-[state=checked]:translate-x-[14px]",
          )}
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";

export { Switch };
