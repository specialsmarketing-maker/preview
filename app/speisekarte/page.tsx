import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speisekarte | Hari1090 by Kumar's Kitchen - Wien",
  description: "Speisekarte – Hari1090 by Kumar's Kitchen, Wien.",
};

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
        <div className="ak-height-150 ak-height-lg-80"></div>
      </section>
    </>
  );
}
