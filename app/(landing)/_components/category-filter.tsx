"use client";

import type { AppCategory } from "@/lib/schema";
import { ToggleGroup, ToggleGroupItem } from "@/app/components/ui/toggle-group";

interface CategoryFilterProps {
  categories: Array<{ id: AppCategory; label: string }>;
  selectedCategory: AppCategory | "all";
  onCategoryChange: (category: AppCategory | "all") => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <ToggleGroup
      value={[selectedCategory]}
      onValueChange={(values: Array<string>) => {
        const newValue = values.find((v) => v !== selectedCategory);
        if (newValue) {
          onCategoryChange(newValue as AppCategory | "all");
        }
      }}
      spacing={1}
      className="flex-wrap"
    >
      <ToggleGroupItem
        value="all"
        className="px-2.5 py-1 font-mono text-[11px]"
      >
        All
      </ToggleGroupItem>
      {categories.map((category) => (
        <ToggleGroupItem
          key={category.id}
          value={category.id}
          className="px-2.5 py-1 font-mono text-[11px]"
        >
          {category.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
