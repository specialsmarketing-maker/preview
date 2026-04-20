import type { Metadata } from "next";
import Link from "next/link";
import { ClassicsAndDips } from "@/components/menu/ClassicsAndDips";
import { Desserts } from "@/components/menu/Desserts";
import { FooterInfo } from "@/components/menu/FooterInfo";
import { MainDishes } from "@/components/menu/MainDishes";
import { MenuSection } from "@/components/menu/MenuSection";
import { SharePlatters } from "@/components/menu/SharePlatters";
import { SidesBreadSalads } from "@/components/menu/SidesBreadSalads";
import type { MenuItemData } from "@/components/menu/MenuItem";

export const metadata: Metadata = {
  title: "Speisekarte | Hari1090 by Kumar's Kitchen - Wien",
  description:
    "Vorspeisen, Hauptspeisen, Biryanis, Klassiker, vegetarische Gerichte und mehr - Hari1090 Wien.",
};

const VORSPEISEN_ITEMS: MenuItemData[] = [
  {
    name: "Hari's Mango-Avocado Tartare mit gegrillten Garnelen",
    description: "knusprig, gegrillte Garnelen, Koriander, Chili",
    price: "14,90",
    allergens: "(G, M)",
    isVeg: false,
    isNew: false,
  },
  {
    name: "Burratina mit Roter Beete & Dattel-Honig Chutney",
    description: "Dattel-Honig-Chutney, frische Kraeuter",
    price: "12,50",
    allergens: "(G)",
    isVeg: true,
    isNew: true,
  },
  {
    name: "Fried Shrimps im Panko-Mantel",
    description: "Knusprig, Minze-Avocado, Tamarinde",
    price: "11,90",
    allergens: "(A, B, C, G)",
    isVeg: false,
    isNew: true,
  },
  {
    name: "Malai Paneer Tikka",
    description: "Cremige Marinade, im Tandoor gegrillt",
    price: "9,90",
    allergens: "(G)",
    isVeg: true,
    isNew: true,
  },
  {
    name: "Grilled Chicken Tikka",
    description: "Joghurt-Gewuerze, Minze-Dip",
    price: "9,90",
    allergens: "(G, M)",
    isVeg: false,
    isNew: false,
  },
  {
    name: "Golden Mini Samosa",
    description: "Kartoffel, Erbsen, Tamarinde",
    price: "8,50",
    allergens: "(A, M, vegan)",
    isVeg: true,
    isNew: false,
  },
  {
    name: "Aloo Tikki Tokri Chat",
    description:
      "Handgeformte Kartoffel-Kraeuter-Tikkis, Kartoffelkorb, Minze-, Knoblauch- und Tamarindenchutney.",
    price: "10,90",
    allergens: "(A, G, M)",
    isVeg: false,
    isNew: false,
  },
  {
    name: "Papadam mit Mango-Chutney",
    description: "Knusprig-duennes Linsenbrot, Mango-Chutney",
    price: "3,90",
    allergens: "",
    isVeg: true,
    isNew: false,
  },
];

export default function SpeisekartePage() {
  return (
    <>
      <section>
        <div className="ak-commmon-hero ak-style1 ak-bg" data-src="/assets/img/banner_top_all.png">
          <div className="ak-commmon-heading">
            <div className="ak-section-heading ak-style-1 ak-type-1 ak-color-1 page-top-title">
              <div className="ak-section-subtitle">
                <Link href="/">Startseite</Link> / Speisekarte
              </div>
              <h1 className="ak-section-title page-title-anim">Speisekarte</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ak-about-bg-color">
        <div className="ak-height-100 ak-height-lg-50"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <MenuSection title="VORSPEISEN" items={VORSPEISEN_ITEMS} />
              <SharePlatters />
              <MainDishes />
              <ClassicsAndDips />
              <SidesBreadSalads />
              <Desserts />
              <FooterInfo />
            </div>
          </div>
        </div>
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>
    </>
  );
}
