import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import NotFoundDemo from "@/components/demos/NotFoundDemo";
import TypedDemo2 from "@/components/demos/TypedDemo2";
import CLI from "@/components/CLI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description:
    "By creating a custom 404 error page in Next.js, you can enhance the user experience by providing informative messages and navigation options when users encounter pages that do not exist. This helps maintain user engagement and ensures a seamless browsing experience within your application.",
  openGraph: {
    title: "404",
    description:
      "By creating a custom 404 error page in Next.js, you can enhance the user experience by providing informative messages and navigation options when users encounter pages that do not exist. This helps maintain user engagement and ensures a seamless browsing experience within your application.",
    siteName: "JRui",
    type: "website",
  },
};

const RevealComponent = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8 relative">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">404 Handling</h1>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              In Next.js, handling 404 errors involves creating a custom error
              page that is displayed when a user navigates to a URL that does
              not exist within the application. This custom error page provides
              a user-friendly message informing the user that the requested page
              could not be found and typically includes options for navigating
              back to the home page or other relevant sections of the site.
            </p>
            <br />
            <DemoTemplate
              title="Demo"
              code={`import Link from "next/link";
import React from "react";
import Image from "next/image";
import Error from "@/imgs/404.png";
import Reveal from "@/app/demo/components/Reveal";

const NotFoundPage = () => {
return (
    <Reveal className="center flex-col h-full mt-10">
    <Reveal
        delay={0.2}
        className="text-4xl text-primary font-bold text-center mb-4"
    >
        Oops!
    </Reveal>
    <Reveal delay={0.4} className="text-2xl font-semibold text-center mb-4">
        It seems you're lost in cyberspace...
    </Reveal>
    <Reveal delay={0.6} className="text-lg text-center mb-4">
        <div className="btn-hover border-gradient px-4 py-2">
        <Link href="/">Take me home</Link>
        </div>
    </Reveal>
    <Reveal delay={0.8}>
        <Image width={500} src={Error} alt="404 error message" />
    </Reveal>
    </Reveal>
);
};

export default NotFoundPage;
`}
            >
              <NotFoundDemo />
            </DemoTemplate>
            <Reveal className="mt-6">
              <CLI command={"jrui create not-found"} />
            </Reveal>
            <Reveal className="mt-6">
              <p>
                If you'd like to have the reveal component for the animations
                you can run the following command as well. Otherwise, remove the
                reveal import from the 'not-found.tsx' file.
              </p>
            </Reveal>
            <Reveal className="mt-6">
              <CLI command={"jrui add reveal"} />
            </Reveal>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component File
            </h3>
            <CodeTemplate
              fileName="app > not-found.tsx"
              code={`import Link from "next/link";
import React from "react";
import Image from "next/image";
import Error from "@/imgs/404.png";
import Reveal from "@/app/demo/components/Reveal";

const NotFoundPage = () => {
return (
    <Reveal className="center flex-col h-full mt-10">
    <Reveal
        delay={0.2}
        className="text-4xl text-primary font-bold text-center mb-4"
    >
        Oops!
    </Reveal>
    <Reveal delay={0.4} className="text-2xl font-semibold text-center mb-4">
        It seems you're lost in cyberspace...
    </Reveal>
    <Reveal delay={0.6} className="text-lg text-center mb-4">
        <div className="btn-hover border-gradient px-4 py-2">
        <Link href="/">Take me home</Link>
        </div>
    </Reveal>
    <Reveal delay={0.8}>
        <Image width={500} src={Error} alt="404 error message" />
    </Reveal>
    </Reveal>
);
};

export default NotFoundPage;                            
`}
            />
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default RevealComponent;
