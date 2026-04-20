"use client";

import { useMemo, useState } from "react";
import styles from "./gallery-tabs.module.css";

type GalleryCategory = "all" | "desserts" | "food" | "drinks" | "garden" | "location";

type GalleryItem = {
  src: string;
  category: Exclude<GalleryCategory, "all">;
};

const TAB_ORDER: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "ALL" },
  { id: "desserts", label: "DESSERTS" },
  { id: "food", label: "FOOD" },
  { id: "drinks", label: "DRINKS" },
  { id: "garden", label: "GARDEN" },
  { id: "location", label: "LOCATION" },
];

export function GalleryTabs({ items }: { items: GalleryItem[] }) {
  const [activeTab, setActiveTab] = useState<GalleryCategory>("all");

  const visibleItems = useMemo(() => {
    if (activeTab === "all") return items;
    return items.filter((i) => i.category === activeTab);
  }, [items, activeTab]);

  return (
    <>
      <div className={styles.tabsWrap}>
        {TAB_ORDER.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div id="static-thumbnails">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
          {visibleItems.map((item) => (
            <div key={item.src} className="col ak-border drop-anim-gallery">
              <div className="gallery ak-bg" data-src={item.src}>
                <div className="gallery style-1">
                  <div className="gallery-hover">
                    <div className="gallery-hover-icon">
                      <a href={item.src}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                          <rect x="0.507812" y="19.7305" width="40" height="1" fill="#FFD28D" />
                          <rect x="20.0078" y="0.730469" width="1" height="40" fill="#FFD28D" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
