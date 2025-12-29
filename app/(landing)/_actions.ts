"use server";

import {
  unstable_cacheLife as cacheLife,
  unstable_cacheTag as cacheTag,
} from "next/cache";

type HomebrewPackage = {
  token: string;
  name: string | string[];
  desc: string;
  homepage: string;
  version: string;
  type: "cask" | "formula";
};

type RawFormula = {
  name: string;
  full_name: string;
  desc: string;
  homepage: string;
  versions: {
    stable: string;
  };
};

type RawCask = {
  token: string;
  name: string[];
  desc: string;
  homepage: string;
  version: string;
};

async function fetchFormulae(): Promise<HomebrewPackage[]> {
  "use cache";
  cacheTag("homebrew-formulae");
  cacheLife("hours");

  const response = await fetch("https://formulae.brew.sh/api/formula.json");
  if (!response.ok) {
    throw new Error("Failed to fetch formulae");
  }

  const data: RawFormula[] = await response.json();

  return data.map((formula) => ({
    token: formula.name,
    name: formula.full_name,
    desc: formula.desc || "",
    homepage: formula.homepage || "",
    version: formula.versions?.stable || "",
    type: "formula" as const,
  }));
}

async function fetchCasks(): Promise<HomebrewPackage[]> {
  "use cache";
  cacheTag("homebrew-casks");
  cacheLife("hours");

  const response = await fetch("https://formulae.brew.sh/api/cask.json");
  if (!response.ok) {
    throw new Error("Failed to fetch casks");
  }

  const data: RawCask[] = await response.json();

  return data.map((cask) => ({
    token: cask.token,
    name: cask.name,
    desc: cask.desc || "",
    homepage: cask.homepage || "",
    version: cask.version || "",
    type: "cask" as const,
  }));
}

async function getCatalogue(): Promise<HomebrewPackage[]> {
  "use cache";
  cacheTag("homebrew-catalogue");
  cacheLife("hours");

  const [formulae, casks] = await Promise.all([fetchFormulae(), fetchCasks()]);
  return [...casks, ...formulae];
}

/**
 * Lookup package types for shared links (server-side only).
 * This is needed for SSR when loading shared links with custom packages.
 */
export async function lookupPackageTypes(
  tokens: string[],
): Promise<Map<string, "cask" | "formula">> {
  if (tokens.length === 0) {
    return new Map();
  }

  const catalogue = await getCatalogue();
  const result = new Map<string, "cask" | "formula">();

  for (const token of tokens) {
    const pkg = catalogue.find((p) => p.token === token);
    if (pkg) {
      result.set(token, pkg.type);
    }
  }

  return result;
}
