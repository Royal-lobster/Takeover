/** biome-ignore-all lint/a11y/useKeyWithClickEvents: Fine here */

"use client";

import { useFullCatalog } from "@/app/(landing)/_hooks/use-full-catalog";
import { favicon, simpleIcon } from "@/lib/helpers/icons";
import { cn } from "@/lib/utils";
import { AppIcon } from "./app-icon";
import { FullCatalogInfoPopover } from "./full-catalog-info-popover";
import { SelectionCheckbox } from "./selection-checkbox";

interface FullCatalogSelectionCardProps {
  package: {
    token: string;
    name: string;
    type: "cask" | "formula";
  };
  isSelected: boolean;
  onToggle: (token: string) => void;
}

export function FullCatalogSelectionCard({
  package: pkg,
  isSelected,
  onToggle,
}: FullCatalogSelectionCardProps) {
  const { getPackage } = useFullCatalog();
  
  // Try to get enhanced info from homebrew catalog
  const catalogPackage = getPackage(pkg.token);
  const displayName = catalogPackage?.name || pkg.name;
  const description = catalogPackage?.desc;
  
  // Try to infer an icon based on common patterns
  const getIconForPackage = (token: string, homepage?: string) => {
    // Common icon mappings based on package names
    const iconMap: Record<string, string> = {
      'docker': simpleIcon('docker'),
      'docker-desktop': simpleIcon('docker'),
      'gcloud-cli': simpleIcon('googlecloud'),
      'google-cloud-sdk': simpleIcon('googlecloud'),
      'ngrok': simpleIcon('ngrok'),
      'vscodium': simpleIcon('vscodium'),
      'antigen': simpleIcon('zsh'),
      'biome': simpleIcon('biome'),
      'boost': simpleIcon('cplusplus'),
      'cairo': simpleIcon('cairo'),
      'git': simpleIcon('git'),
      'gcc': simpleIcon('gnu'),
      'glib': simpleIcon('gnome'),
      'glog': simpleIcon('google'),
      'gmp': simpleIcon('gnu'),
      'node': simpleIcon('nodedotjs'),
      'npm': simpleIcon('npm'),
      'yarn': simpleIcon('yarn'),
      'python': simpleIcon('python'),
      'ruby': simpleIcon('ruby'),
      'go': simpleIcon('go'),
      'rust': simpleIcon('rust'),
      'java': simpleIcon('openjdk'),
      'postgresql': simpleIcon('postgresql'),
      'mysql': simpleIcon('mysql'),
      'redis': simpleIcon('redis'),
      'mongodb': simpleIcon('mongodb'),
      'nginx': simpleIcon('nginx'),
      'apache': simpleIcon('apache'),
      'vim': simpleIcon('vim'),
      'emacs': simpleIcon('gnuemacs'),
      'curl': simpleIcon('curl'),
      'wget': simpleIcon('gnu'),
      'cmake': simpleIcon('cmake'),
      'make': simpleIcon('gnu'),
      'autoconf': simpleIcon('gnu'),
      'automake': simpleIcon('gnu'),
      'pkg-config': simpleIcon('gnu'),
      'openssl': simpleIcon('openssl'),
      'zsh': simpleIcon('zsh'),
      'bash': simpleIcon('gnubash'),
      'fish': simpleIcon('fishshell'),
      'tmux': simpleIcon('tmux'),
      'screen': simpleIcon('gnu'),
      'htop': simpleIcon('htop'),
      'neofetch': favicon('github.com'),
      'ffmpeg': simpleIcon('ffmpeg'),
      'imagemagick': simpleIcon('imagemagick'),
      'graphicsmagick': simpleIcon('imagemagick'),
      'graphviz': simpleIcon('graphviz'),
      'pandoc': favicon('pandoc.org'),
      'latex': simpleIcon('latex'),
      'texlive': simpleIcon('latex'),
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
        return favicon(domain);
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
  };
  
  const iconUrl = getIconForPackage(pkg.token, catalogPackage?.homepage);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Fine here
    <div
      onClick={(e) => {
        // Prevent toggle if clicking on interactive elements
        if ((e.target as HTMLElement).closest('button, a, [role="button"]')) {
          return;
        }
        onToggle(pkg.token);
      }}
      className={cn(
        "group flex cursor-pointer select-none items-center gap-2.5 border px-2.5 py-2 text-left transition-colors",
        "hover:bg-muted/50",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        isSelected ? "border-primary/50 bg-primary/5" : "border-border bg-card",
      )}
    >
      <div className="flex size-5 shrink-0 items-center justify-center">
        {iconUrl ? (
          <AppIcon iconUrl={iconUrl} size="sm" />
        ) : (
          <div className="size-4 rounded-sm bg-primary/20" />
        )}
      </div>
      <span className="min-w-0 flex-1 truncate font-mono text-xs">
        {pkg.token}
      </span>
      <div className="flex items-center gap-2">
        <FullCatalogInfoPopover package={pkg} />
        <SelectionCheckbox
          isSelected={isSelected}
          onToggle={() => onToggle(pkg.token)}
          appId={pkg.token}
        />
      </div>
    </div>
  );
}
