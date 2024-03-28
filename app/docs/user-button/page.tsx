import React from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import UserButtonDemo from "@/components/demos/UserButtonDemo";
import RevealDemo2 from "@/components/demos/RevealDemo2";
import CLI from "@/components/CLI";
import { Metadata } from "next";
import UserButtonDemo2 from "@/components/demos/UserButtonDemo2";

export const metadata: Metadata = {
  title: "User Button",
  description:
    "The UserButton component serves as a versatile solution for managing user authentication and profile interactions within Next.js applications. Seamlessly integrating with Next.js authentication library and Firebase authentication, this component empowers developers to create tailored user experiences that align with their application's requirements and design aesthetics.",
  openGraph: {
    title: "User Button",
    description:
      "The UserButton component serves as a versatile solution for managing user authentication and profile interactions within Next.js applications. Seamlessly integrating with Next.js authentication library and Firebase authentication, this component empowers developers to create tailored user experiences that align with their application's requirements and design aesthetics.",
    siteName: "JRui",
    type: "website",
  },
};

const RevealComponent = () => {
  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8 relative">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">User Button</h1>
          <Reveal className="flex flex-row flex-wrap gap-2">
            <button className="btn-hover mt-2 md:mt-0 border-gradient px-4 py-2">
              Next/OAuth/Firebase
            </button>
          </Reveal>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <Reveal className="text-lg mb-4 mt-[-1rem]">
              Component Type:{" "}
              <span className="text-primary font-bold">
                Next/OAuth/Firebase
              </span>
            </Reveal>
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            <p>
              The UserButton component serves as a versatile solution for
              managing user authentication and profile interactions within
              Next.js applications. Seamlessly integrating with Next.js
              authentication library and Firebase authentication, this component
              empowers you to create tailored user experiences that align with
              their application's requirements and design aesthetics. With its
              flexible design and powerful functionality, the UserButton
              component empowers you to create immersive and user-centric
              experiences that drive engagement and satisfaction.
            </p>
            <DemoTemplate
              title="Demo"
              code={`
`}
            >
              <UserButtonDemo />
            </DemoTemplate>
            <Reveal className="mt-6">
              <CLI
                command={"jrui add userButton userAvatarNextOAuthFirebase"}
              />
              <p className="my-2 font-bold">
                Note: This may override any custom styles you have in your
                globals.css file. Make sure to have those ready to paste back in
                after installing.
              </p>
            </Reveal>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">Props</h3>
            <p className="mb-4">
              The `UserButton` component accepts the following props for
              controlling its behavior:
            </p>
            <ul>
              <li>
                <strong>
                  size?: number
                  <br />
                </strong>
                The size of the user avatar in pixels. Defaults to 50 if not
                provided.
              </li>
              <li>
                <strong>
                  className?: string
                  <br />
                </strong>
                Additional CSS classes to apply to the user avatar for custom
                styling.
              </li>
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component File
            </h3>
            <CodeTemplate
              fileName="components > UserButton.tsx"
              code={`"use client";
import React from "react";
import {
DropdownMenu,
DropdownMenuContent,
DropdownMenuSeparator,
DropdownMenuItem,
DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";
import UserAvatar from "./UserAvatarNextOAuthFirebase";
import { CircleUserRound } from "lucide-react";

interface UserButtonProps {
size?: number;
className?: string;
}

function UserButton({ size = 50, className }: UserButtonProps) {
const { data: session } = useSession();
const userName = session?.user.name;

return (
    <DropdownMenu>
    {session ? (
        <DropdownMenuTrigger>
        <UserAvatar size={size} className={className} />
        </DropdownMenuTrigger>
    ) : (
        // User is not signed in, render the Open button
        <button onClick={() => signIn()}>
        <CircleUserRound
            size={size}
            className={\`\${className} rounded-full\`}
            strokeWidth={1}
        />
        </button>
    )}

    {session && (
        <DropdownMenuContent>
        <DropdownMenuItem className="text-primary font-semibold">
            {userName}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="#">
            <DropdownMenuItem>Profile</DropdownMenuItem>
        </Link>
        <Link href={"#"}>
            <DropdownMenuItem>Billing</DropdownMenuItem>
        </Link>
        <Link href={"#"}>
            <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem
            className={"text-primary hover:cursor-pointer"}
            onClick={() => signOut()}
        >
            Log out
        </DropdownMenuItem>
        </DropdownMenuContent>
    )}
    </DropdownMenu>
);
}

export default UserButton;
              `}
            />
            <br />
            <CodeTemplate
              fileName="components > UserAvatar.tsx"
              code={`"use client";
import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

interface UserAvatarProps {
  size?: number;
  className?: string;
  alt?: string;
}

function UserAvatar({
  size = 50,
  className,
  alt = "User profile image",
}: UserAvatarProps) {
  const { data: session } = useSession();
  const imgUrl = session?.user?.image;

  return (
    <>
      {imgUrl && (
        <Image
          alt={alt}
          src={imgUrl}
          width={size}
          height={size}
          className={\`\${className} shadow-sm border rounded-full\`}
          loading="lazy"
        />
      )}
    </>
  );
}

export default UserAvatar;
`}
            />
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Example Use Case
            </h3>
            <CodeTemplate
              fileName="Example.tsx"
              code={`import React from "react";
import UserButton from "./UserButton"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <UserButton size={45} className={"border border-white"}/>
  );
};

export default Example;
              
`}
            />
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default RevealComponent;
