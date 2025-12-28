"use client";

import { MagnifyingGlassIcon, Package } from "@phosphor-icons/react";
import { Button } from "@/app/components/ui/button";

interface CatalogueSearchCTAProps {
  onOpenSearch: () => void;
}

export function CatalogueSearchCTA({ onOpenSearch }: CatalogueSearchCTAProps) {
  return (
    <section className="mt-8 border-t border-dashed border-border pt-8">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-border bg-muted/30 px-6 py-8 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Package className="size-6" weight="duotone" />
        </div>
        <div className="space-y-1">
          <h3 className="font-mono text-sm font-medium">
            Can&apos;t find your app?
          </h3>
          <p className="max-w-md font-mono text-xs text-muted-foreground">
            Search the entire Homebrew catalogue with over 10,000+ formulae and
            casks available for installation.
          </p>
        </div>
        <Button
          onClick={onOpenSearch}
          variant="outline"
          className="gap-2 font-mono text-xs"
        >
          <MagnifyingGlassIcon className="size-3.5" weight="bold" />
          Search Homebrew Catalogue
        </Button>
      </div>
    </section>
  );
}
