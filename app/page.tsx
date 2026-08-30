import { SiteHeader } from "@/components/chrome/site-header";
import { BackToTop } from "@/components/chrome/back-to-top";
import { CookieBanner } from "@/components/chrome/cookie-banner";
import { KeyboardShortcuts } from "@/components/chrome/keyboard-shortcuts";
import { PortfolioPage } from "@/components/portfolio-page";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <PortfolioPage />
      <BackToTop />
      <CookieBanner />
      <KeyboardShortcuts />
    </>
  );
}
