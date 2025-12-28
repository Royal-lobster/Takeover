"use client";

import { Package, XIcon } from "@phosphor-icons/react";
import * as React from "react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomPackage {
  token: string;
  name: string;
  type: "cask" | "formula";
}

interface CustomPackageCardProps {
  pkg: CustomPackage;
  onRemove: (token: string) => void;
}

export function CustomPackageCard({ pkg, onRemove }: CustomPackageCardProps) {
  const [isRemoving, setIsRemoving] = React.useState(false);

  const handleRemove = React.useCallback(() => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(pkg.token);
    }, 200);
  }, [onRemove, pkg.token]);

  return (
    <div
      className={cn(
        "group flex cursor-default select-none items-center gap-2.5 border px-2.5 py-2 text-left transition-all duration-200",
        "border-primary/50 bg-primary/5",
        isRemoving && "scale-95 opacity-0",
      )}
    >
      <div className="flex size-5 shrink-0 items-center justify-center">
        <Package className="size-4 text-muted-foreground" weight="duotone" />
      </div>
      <span className="min-w-0 flex-1 truncate font-mono text-xs">
        {pkg.name}
      </span>
      <div className="flex items-center gap-2">
        <Badge
          variant="secondary"
          className="shrink-0 font-mono text-[10px] uppercase"
        >
          {pkg.type}
        </Badge>
        <Button
          variant="ghost"
          size="icon-sm"
          className="size-6 rounded-full text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
          onClick={handleRemove}
        >
          <XIcon className="size-3.5" weight="bold" />
        </Button>
      </div>
    </div>
  );
}

interface CustomPackagesSectionProps {
  packages: Map<string, CustomPackage>;
  onRemove: (token: string) => void;
}

export function CustomPackagesSection({
  packages,
  onRemove,
}: CustomPackagesSectionProps) {
  if (packages.size === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <div className="mb-3 flex items-center gap-2">
        <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          From Homebrew Search
        </h2>
        <span className="font-mono text-[10px] text-muted-foreground/60">
          ({packages.size})
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
      <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from(packages.values()).map((pkg) => (
          <CustomPackageCard key={pkg.token} pkg={pkg} onRemove={onRemove} />
        ))}
      </div>
    </section>
  );
}
