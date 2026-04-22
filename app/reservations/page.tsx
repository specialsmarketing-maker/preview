import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.reservations.title,
};

export default function ReservationsPage() {
  const html = loadTemplateBody("reservations.body.html");
  return <TemplatePageBody html={html} />;
}
