import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.gallery.title,
};

const html = loadTemplateBody("gallery.body.html");
const galleryImages = [
  "/assets/img/gallery/Hari1090-Restaurant-by-Kumars-Kitchen-Aperol-Sommer-Garten-Chicken-Pakore-Huhnchen-gebacken-1-scaled-1.jpg",
  "/assets/img/gallery/Hari1090-Restaurant-by-Kumars-Kitchen-Avocado-Lachs-Tartare-Salmon-1-scaled-1.jpg",
  "/assets/img/gallery/Hari1090-Restaurant-by-Kumars-Kitchen-Avocado-Taco-1-scaled-1.jpg",
  "/assets/img/gallery/Hari1090-Restaurant-by-Kumars-Kitchen-Chicken-Pakora-Huhnchen-gebacken-Gastgarten-1-scaled-1.jpg",
  "/assets/img/gallery/Hari1090-Restaurant-by-Kumars-Kitchen-Chicken-Taco-1-scaled-1.jpg",
  "/assets/img/gallery/Hari1090-Restaurant-by-Kumars-Kitchen-Cocktail-Lical-Spritz-Sommer-1-scaled-1.jpg",
];

const localGalleryHtml = html
  .replaceAll("/assets/img/gallery_1.jpg", galleryImages[0])
  .replaceAll("/assets/img/gallery_2.jpg", galleryImages[1])
  .replaceAll("/assets/img/gallery_3.jpg", galleryImages[2])
  .replaceAll("/assets/img/gallery_4.jpg", galleryImages[3])
  .replaceAll("/assets/img/gallery_5.jpg", galleryImages[4])
  .replaceAll("/assets/img/gallery_6.jpg", galleryImages[5]);

export default function GalleryPage() {
  return <TemplatePageBody html={localGalleryHtml} />;
}
