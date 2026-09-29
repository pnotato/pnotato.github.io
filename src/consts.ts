export const SITE = {
  title: "Nicholas Chan",
  description: "Personal portfolio and blog of Nicholas Chan.",
  url: "https://nickchan.ca",
} as const;

export const NAV_LINKS = [
  { href: "/writing/about-me", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/writing", label: "Blog" },
] as const;

export function pageName(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (!segment) return "Home";
  return segment.charAt(0).toUpperCase() + segment.slice(1);
}
