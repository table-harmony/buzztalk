import { ModeToggle } from "@/components/mode-toggle";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="sticky mb-4 top-0 z-50 w-full border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font bold">{siteConfig.name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
