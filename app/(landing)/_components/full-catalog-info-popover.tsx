"use client";

import { Info } from "@phosphor-icons/react";
import type * as React from "react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  generateBrewCommand,
  getHomebrewUrl,
} from "@/lib/helpers/brew-commands";
import {
  type FullCatalogInfo,
  useFullCatalogInfo,
} from "../_hooks/use-full-catalog-info";
import { AppIcon } from "./app-icon";

interface FullCatalogInfoPopoverProps {
  package: {
    token: string;
    name: string;
    type: "cask" | "formula";
  };
}

function getDescription(
  brewInfo: FullCatalogInfo | undefined,
  error: Error | null,
) {
  if (error) return "Could not load Homebrew details";
  const desc = (brewInfo?.description ?? "").trim();
  return desc || "No description available yet.";
}

// Get icon for package (same logic as in FullCatalogSelectionCard)
function getIconForPackage(token: string, homepage?: string) {
  // Common icon mappings based on package names
  const iconMap: Record<string, string> = {
    'docker': 'https://cdn.simpleicons.org/docker',
    'docker-desktop': 'https://cdn.simpleicons.org/docker',
    'gcloud-cli': 'https://cdn.simpleicons.org/googlecloud',
    'google-cloud-sdk': 'https://cdn.simpleicons.org/googlecloud',
    'ngrok': 'https://cdn.simpleicons.org/ngrok',
    'vscodium': 'https://cdn.simpleicons.org/vscodium',
    'antigen': 'https://cdn.simpleicons.org/zsh',
    'biome': 'https://cdn.simpleicons.org/biome',
    'boost': 'https://cdn.simpleicons.org/cplusplus',
    'cairo': 'https://cdn.simpleicons.org/cairo',
    'git': 'https://cdn.simpleicons.org/git',
    'gcc': 'https://cdn.simpleicons.org/gnu',
    'glib': 'https://cdn.simpleicons.org/gnome',
    'glog': 'https://cdn.simpleicons.org/google',
    'gmp': 'https://cdn.simpleicons.org/gnu',
    'node': 'https://cdn.simpleicons.org/nodedotjs',
    'npm': 'https://cdn.simpleicons.org/npm',
    'yarn': 'https://cdn.simpleicons.org/yarn',
    'python': 'https://cdn.simpleicons.org/python',
    'ruby': 'https://cdn.simpleicons.org/ruby',
    'go': 'https://cdn.simpleicons.org/go',
    'rust': 'https://cdn.simpleicons.org/rust',
    'java': 'https://cdn.simpleicons.org/openjdk',
    'postgresql': 'https://cdn.simpleicons.org/postgresql',
    'mysql': 'https://cdn.simpleicons.org/mysql',
    'redis': 'https://cdn.simpleicons.org/redis',
    'mongodb': 'https://cdn.simpleicons.org/mongodb',
    'nginx': 'https://cdn.simpleicons.org/nginx',
    'apache': 'https://cdn.simpleicons.org/apache',
    'vim': 'https://cdn.simpleicons.org/vim',
    'emacs': 'https://cdn.simpleicons.org/gnuemacs',
    'curl': 'https://cdn.simpleicons.org/curl',
    'wget': 'https://cdn.simpleicons.org/gnu',
    'cmake': 'https://cdn.simpleicons.org/cmake',
    'make': 'https://cdn.simpleicons.org/gnu',
    'autoconf': 'https://cdn.simpleicons.org/gnu',
    'automake': 'https://cdn.simpleicons.org/gnu',
    'pkg-config': 'https://cdn.simpleicons.org/gnu',
    'openssl': 'https://cdn.simpleicons.org/openssl',
    'zsh': 'https://cdn.simpleicons.org/zsh',
    'bash': 'https://cdn.simpleicons.org/gnubash',
    'fish': 'https://cdn.simpleicons.org/fishshell',
    'tmux': 'https://cdn.simpleicons.org/tmux',
    'screen': 'https://cdn.simpleicons.org/gnu',
    'htop': 'https://cdn.simpleicons.org/htop',
    'neofetch': 'https://icons.duckduckgo.com/ip3/github.com.ico',
    'ffmpeg': 'https://cdn.simpleicons.org/ffmpeg',
    'imagemagick': 'https://cdn.simpleicons.org/imagemagick',
    'graphicsmagick': 'https://cdn.simpleicons.org/imagemagick',
    'graphviz': 'https://cdn.simpleicons.org/graphviz',
    'pandoc': 'https://icons.duckduckgo.com/ip3/pandoc.org.ico',
    'latex': 'https://cdn.simpleicons.org/latex',
    'texlive': 'https://cdn.simpleicons.org/latex',
  };
  
  // Direct match
  if (iconMap[token]) {
    return iconMap[token];
  }
  
  // Try without common suffixes
  const cleanToken = token.replace(/-cli$|-tools?$|-dev$/, '');
  if (iconMap[cleanToken]) {
    return iconMap[cleanToken];
  }
  
  // If we have a homepage, try to get favicon
  if (homepage) {
    try {
      const domain = new URL(homepage).hostname;
      return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
    } catch {
      // Invalid URL, fallback
    }
  }
  
  // Try simple icon based on first word
  const firstWord = token.split('-')[0];
  if (iconMap[firstWord]) {
    return iconMap[firstWord];
  }
  
  // Final fallback - no icon
  return null;
}

export function FullCatalogInfoPopover({ package: pkg }: FullCatalogInfoPopoverProps) {
  const [open, setOpen] = useState(false);

  // Only fetch when popover opens
  const {
    data: brewInfo,
    isLoading,
    error,
  } = useFullCatalogInfo(pkg.token, open);

  const homebrewUrl = brewInfo?.url ?? getHomebrewUrl(pkg.token, pkg.type);
  const description = getDescription(brewInfo, error);
  const brewCommand = generateBrewCommand(pkg.token, brewInfo?.kind || pkg.type);
  const displayName = brewInfo?.name || pkg.name;
  const iconUrl = getIconForPackage(pkg.token, brewInfo?.homepage);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        openOnHover
        delay={120}
        aria-label={`More about ${displayName}`}
        render={
          <Button
            variant="ghost"
            size="icon-sm"
            className="rounded-full border border-transparent hover:border-muted-foreground/60"
          />
        }
      >
        <Info className="size-3.5" weight="bold" />
      </PopoverTrigger>
      <PopoverContent
        align="end"
        side="top"
        sideOffset={12}
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className="pointer-events-auto"
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border bg-card">
            {iconUrl ? (
              <AppIcon iconUrl={iconUrl} size="md" />
            ) : (
              <div className="size-6 rounded-sm bg-primary/20" />
            )}
          </div>
          <div className="min-w-0 space-y-1">
            <div className="flex items-center gap-2">
              <p className="truncate text-sm font-semibold">
                {displayName}
              </p>
              <Badge variant="secondary" className="uppercase tracking-wider">
                {brewInfo?.kind ?? pkg.type}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{description}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="max-w-full truncate font-mono"
              >
                {brewCommand}
              </Badge>
              {brewInfo?.version && (
                <Badge variant="outline" className="max-w-full truncate">
                  v{brewInfo.version}
                </Badge>
              )}
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={homebrewUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                className="text-[11px] font-medium text-primary hover:underline"
              >
                Homebrew page
              </a>
              {brewInfo?.homepage && (
                <a
                  href={brewInfo.homepage}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e: React.MouseEvent) => e.stopPropagation()}
                  className="text-[11px] font-medium text-muted-foreground hover:underline"
                >
                  Homepage
                </a>
              )}
            </div>
            {isLoading && (
              <p className="text-[11px] text-muted-foreground">
                Loading Homebrew data...
              </p>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}