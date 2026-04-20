import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { GalleryTabs } from "@/components/gallery/GalleryTabs";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.gallery.title,
};

const galleryDir = path.join(process.cwd(), "public", "assets", "img", "gallery");

type GalleryCategory = "desserts" | "food" | "drinks" | "garden" | "location";

function inferCategory(fileName: string): GalleryCategory {
  const n = fileName.toLowerCase();

  const hasAny = (keywords: string[]) => keywords.some((k) => n.includes(k));

  const dessertKeywords = ["dessert", "tiramisu", "halwa", "strudel", "cheese-cake", "profiteroles", "sweet"];
  const drinkKeywords = [
    "cocktail",
    "spritz",
    "martini",
    "shot",
    "whiskey",
    "tequila",
    "vodka",
    "aperol",
    "paloma",
    "italicus",
    "champagne",
    "lilet",
    "lilac",
    "drinks",
    "getranke",
    "bar",
    "lassi",
  ];
  const gardenKeywords = ["garten", "garden", "gastgarten", "outdoor", "terrace", "sommer"];
  const locationKeywords = [
    "speisesaal",
    "tables",
    "tisch",
    "eingang",
    "althanstrase",
    "restaurant",
    "interior",
    "ambience",
    "location",
  ];

  if (hasAny(dessertKeywords)) return "desserts";
  if (hasAny(drinkKeywords)) return "drinks";
  if (hasAny(gardenKeywords)) return "garden";
  if (hasAny(locationKeywords)) return "location";

  if (
    n.includes("food") ||
    n.includes("speise") ||
    n.includes("chicken") ||
    n.includes("biryani") ||
    n.includes("samosa") ||
    n.includes("taco") ||
    n.includes("lachs") ||
    n.includes("shrimp")
  ) {
    return "food";
  }

  return "food"; // default category for uncategorized gallery images
}

const galleryImages = fs
  .readdirSync(galleryDir)
  .filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
  .sort((a, b) => a.localeCompare(b))
  .map((name) => ({
    src: `/assets/img/gallery/${encodeURIComponent(name)}`,
    category: inferCategory(name),
  }));

export default function GalleryPage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Home</Link> / Gallery
              </div>
              <h2 className="ak-section-title page-title-anim">Gallery</h2>
            </div>
          </div>
        </div>
      </section>

      <div className="ak-height-180 ak-height-lg-90"></div>

      <section className="container">
        <GalleryTabs items={galleryImages} />
      </section>
    </>
  );
}
