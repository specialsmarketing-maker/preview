import type { Metadata } from "next";
import { TemplatePageBody } from "@/components/TemplatePageBody";
import { loadTemplateBody } from "@/lib/loadTemplateBody";
import pageMeta from "@/content/page-meta.json";

export const metadata: Metadata = {
  title: pageMeta.blog.title,
};

export default function BlogPage() {
  const html = loadTemplateBody("blog.body.html");
  return <TemplatePageBody html={html} />;
}
