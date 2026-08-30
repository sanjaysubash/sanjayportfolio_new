import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const pcImages = [
  "/pc-build/0DA5F8DC-057A-4C90-B406-6DB19D66ADB9_1_105_c.jpeg",
  "/pc-build/228364BF-D5D0-4F48-BDD2-7199AACA3409_1_105_c.jpeg",
  "/pc-build/37491C6B-82A5-47C4-B0AE-9CC19C4681A2_1_105_c.jpeg",
  "/pc-build/37E11621-9AB4-445B-B55E-F971F984E0FA_1_105_c.jpeg",
];

export default function PCBuildPage() {
  return (
    <main className="section-shell section-gap">
      <div className="mx-auto max-w-[980px] px-0">
        <h1 className="editorial-title mb-4 text-[clamp(1.6rem,3.2vw,3.4rem)] font-semibold">Custom High-Performance Workstation Build</h1>
        <p className="muted-copy mb-6 text-base sm:text-lg text-[color:var(--ink-soft)]">
          Designed and assembled a custom high-performance workstation optimized for full-stack development, AI experimentation, 3D rendering, gaming, and multitasking workflows. Built with RTX graphics, liquid cooling, RGB airflow optimization, and a modern performance-focused architecture.
        </p>

        <div className="mb-8 grid gap-6 md:gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-lg">Features</h3>
            <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-[color:var(--ink-soft)] space-y-2">
              <li>RTX-powered graphics setup</li>
              <li>Liquid cooling with RGB thermal management</li>
              <li>High airflow optimized cabinet and multi-fan architecture</li>
              <li>Development + gaming hybrid workstation tuned for AI and rendering</li>
            </ul>

            <h3 className="mt-8 font-semibold text-lg">Tech / Hardware Stack</h3>
            <ul className="mt-3 list-disc pl-5 text-sm sm:text-base text-[color:var(--ink-soft)] space-y-2">
              <li>NVIDIA GeForce RTX GPU</li>
              <li>ASUS Graphics Card</li>
              <li>Liquid CPU Cooler</li>
              <li>Cooler Master MWE Gold 750W PSU</li>
              <li>RGB Cooling System</li>
              <li>High-Airflow Cabinet</li>
            </ul>

            <div className="mt-8">
              <Link href="/" className="inline-flex h-10 sm:h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-4 sm:px-6 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 gap-2">
                Back to portfolio
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Build Gallery</h3>
            <div className="grid gap-3 sm:gap-4">
              {pcImages.map((src) => (
                <div key={src} className="rounded-[12px] overflow-hidden">
                  <Image src={src} alt="PC build" width={1200} height={800} className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
