"use client";

import { AppShell } from "@/app/(layout)/app-shell";
import { BrewPickerProvider } from "../_hooks/use-brew-picker-context";
import { BrewPickerContent } from "./brew-picker-content";

interface BrewPickerProps {
  kitName?: string;
  kitDescription?: string;
  initialSelectedAppIds?: string[];
  initialCustomPackages?: Array<{
    token: string;
    name: string;
    type: "cask" | "formula";
  }>;
}

export function BrewPicker({
  kitName,
  kitDescription,
  initialSelectedAppIds = [],
  initialCustomPackages = [],
}: BrewPickerProps) {
  return (
    <BrewPickerProvider
      initialSelectedAppIds={initialSelectedAppIds}
      initialCustomPackages={initialCustomPackages}
      kitName={kitName}
      kitDescription={kitDescription}
    >
      <AppShell>
        <BrewPickerContent />
      </AppShell>
    </BrewPickerProvider>
  );
}
