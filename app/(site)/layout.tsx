import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";

/**
 * The marketing/site layout — the shared chrome for every public page
 * (`/` and `/docs`): the max-width container, the SiteHeader (wordmark +
 * tagline + Dashboard pill) and the SiteFooter. Routes outside this group
 * (e.g. `/dashboard`) don't get any of it.
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-6 pb-16 pt-10 sm:pt-14">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
