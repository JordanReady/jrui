import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoPreview from "@/components/demos/DemoPreview";
import CLI from "@/components/CLI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap & Robots",
  description:
    "Learn about the importance of using sitemap.ts and robots.ts files in Next.js for enhancing search engine optimization (SEO) and improving the discoverability of web applications. Understand how these files contribute to efficient indexing by search engines and provide developers with better control over the visibility and accessibility of their web content.",
  openGraph: {
    title: "Sitemap & Robots",
    description:
      "Learn about the importance of using sitemap.ts and robots.ts files in Next.js for enhancing search engine optimization (SEO) and improving the discoverability of web applications. Understand how these files contribute to efficient indexing by search engines and provide developers with better control over the visibility and accessibility of their web content.",
    siteName: "JRui",
    type: "website",
  },
};

const Sitemap = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8 relative">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">Sitemap and Robots</h1>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              In Next.js, the sitemap.ts and robots.ts files serve crucial roles
              in enhancing the discoverability and search engine optimization
              (SEO) of web applications. The sitemap.ts file enables developers
              to generate and maintain a structured sitemap, providing search
              engines with clear navigation paths to all accessible pages within
              the application. This facilitates efficient indexing by search
              engine crawlers, leading to improved visibility and ranking in
              search engine results. On the other hand, the robots.ts file
              allows developers to define directives for search engine bots,
              regulating which pages should be crawled and indexed. By
              strategically configuring the robots.ts file, developers can
              prevent search engines from indexing sensitive or irrelevant
              content, ensuring better control over the visibility and
              accessibility of their web application. Incorporating these files
              into a Next.js project is paramount for maximizing online
              presence, user engagement, and overall success in the digital
              landscape.
            </p>
            <p>
              Simply run the command, and these essential SEO files will be
              automatically generated for you. All that's left for you to do is
              navigate to the newly created sitemap.ts file and replace the
              example text with your site URLs. Take control of your website's
              SEO strategy effortlessly, saving time and ensuring your site is
              properly indexed by search engines
            </p>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <CLI command="jrui create sitemap"></CLI>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Component Files
            </h3>
            <CodeTemplate
              fileName="app > sitemap.ts"
              code={`import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain-name.whatever/",
    },
    {
      url: "https://your-domain-name.whatever/docs",
    },
    {
      url: "https://your-domain-name.whatever/docs/pick-a-template",
    },
  ];
}`}
            />
            <br />
            <CodeTemplate
              fileName="app > robots.ts"
              code={`import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://your-domain-name.whatever/sitemap.xml",
  };
}`}
            />
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default Sitemap;
