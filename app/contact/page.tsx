import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.contact.title,
};

export default function ContactPage() {
  const html = loadTemplateBody("contact.body.html");
  return <TemplatePageBody html={html} />;
}
