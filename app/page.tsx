import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.home.title,
};

export default function HomePage() {
  const homeHtml = loadTemplateBody("home.body.html");
  return <TemplatePageBody html={homeHtml} />;
}
