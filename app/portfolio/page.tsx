import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.portfolio.title,
};

export default function PortfolioPage() {
  const html = loadTemplateBody("portfolio.body.html");
  return <TemplatePageBody html={html} />;
}
