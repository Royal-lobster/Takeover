"use client";

import { createContext, type ReactNode, useContext, useState } from "react";
import type { AppCategory } from "@/lib/data/schema";

interface CategoryContextType {
  selectedCategory: AppCategory | "all";
  setSelectedCategory: (category: AppCategory | "all") => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined,
);

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | "all">(
    "all",
  );

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}
