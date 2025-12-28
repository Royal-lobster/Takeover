"use client";

import Fuse from "fuse.js";
import * as React from "react";
import { generateBrewCommand, generateUninstallCommand } from "@/lib/data/apps";
import type { App, AppCategory } from "@/lib/schema";
import { AppCard } from "./app-card";
import { CategoryFilter } from "./category-filter";
import { CategorySection } from "./category-section";
import { CommandFooter } from "./command-footer";
import { Header } from "./header";

interface BrewPickerProps {
  apps: Array<App>;
  categories: Array<{ id: AppCategory; label: string }>;
}

export function BrewPicker({ apps, categories }: BrewPickerProps) {
  const [selectedApps, setSelectedApps] = React.useState<Set<string>>(
    new Set(),
  );
  const [selectedCategory, setSelectedCategory] = React.useState<
    AppCategory | "all"
  >("all");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [copied, setCopied] = React.useState(false);
  const [isUninstallMode, setIsUninstallMode] = React.useState(false);

  const fuse = React.useMemo(
    () =>
      new Fuse(apps, {
        keys: ["name", "description", "brewName"],
        threshold: 0.4,
        ignoreLocation: true,
      }),
    [apps],
  );

  const filteredApps = React.useMemo(() => {
    let result: Array<App>;

    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery.trim());
      result = results.map((r) => r.item);
    } else {
      result = apps;
    }

    if (selectedCategory !== "all") {
      result = result.filter((app) => app.category === selectedCategory);
    }

    return result;
  }, [searchQuery, selectedCategory, fuse, apps]);

  const appsByCategory = React.useMemo(() => {
    const grouped = new Map<AppCategory, Array<App>>();
    for (const category of categories) {
      const categoryApps = filteredApps.filter(
        (app) => app.category === category.id,
      );
      if (categoryApps.length > 0) {
        grouped.set(category.id, categoryApps);
      }
    }
    return grouped;
  }, [filteredApps, categories]);

  const brewCommand = generateBrewCommand(Array.from(selectedApps));
  const uninstallCommand = generateUninstallCommand(Array.from(selectedApps));

  const handleToggle = (appId: string) => {
    setSelectedApps((prev) => {
      const next = new Set(prev);
      if (next.has(appId)) {
        next.delete(appId);
      } else {
        next.add(appId);
      }
      return next;
    });
  };

  const handleCopy = async () => {
    const command = isUninstallMode ? uninstallCommand : brewCommand;
    if (!command) return;
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClearAll = () => {
    setSelectedApps(new Set());
  };

  const handleToggleMode = () => {
    setIsUninstallMode((prev) => !prev);
  };

  const showCategorySections = selectedCategory === "all";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header
        selectedCount={selectedApps.size}
        onClearAll={handleClearAll}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1 pb-24">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="mt-6">
            {filteredApps.length > 0 ? (
              showCategorySections ? (
                <div className="space-y-8">
                  {Array.from(appsByCategory.entries()).map(
                    ([categoryId, categoryApps]) => (
                      <CategorySection
                        key={categoryId}
                        categoryId={categoryId}
                        apps={categoryApps}
                        categories={categories}
                        selectedApps={selectedApps}
                        onToggle={handleToggle}
                      />
                    ),
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {filteredApps.map((app) => (
                    <AppCard
                      key={app.id}
                      app={app}
                      isSelected={selectedApps.has(app.id)}
                      onToggle={handleToggle}
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="py-16 text-center font-mono text-sm text-muted-foreground">
                No apps found for &quot;{searchQuery}&quot;
              </div>
            )}
          </div>
        </div>
      </main>

      <CommandFooter
        brewCommand={brewCommand}
        uninstallCommand={uninstallCommand}
        selectedCount={selectedApps.size}
        copied={copied}
        isUninstallMode={isUninstallMode}
        onCopy={handleCopy}
        onToggleMode={handleToggleMode}
      />
    </div>
  );
}
