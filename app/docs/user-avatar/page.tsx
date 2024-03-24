"use client";
import React, { useEffect, useState } from "react";
import DocLayout from "../DocLayout";
import Reveal from "@/components/Reveal";
import CodeTemplate from "@/components/CodeTemplate";
import DemoTemplate from "@/components/DemoTemplate";
import UserAvatarDemo from "@/components/demos/UserAvatarDemo";
import UserAvatarDemo2 from "@/components/demos/UserAvatarDemo2";
import UserAvatarNextOAuthFirebaseDemo from "@/components/demos/UserAvatarNextOAuthFirebaseDemo";
import CLI from "@/components/CLI";
import { useSession } from "next-auth/react";

const UserAvatar = () => {
  const [avatarState, setAvatarState] = useState("Default");
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      setAvatarState("Next/OAuth/Firebase");
    } else {
      setAvatarState("Default");
    }
  }, [session]);

  const handleDefaultButtonClick = () => {
    setAvatarState("Default");
    console.log("avatarState: " + avatarState);
  };

  const handleNextButtonClick = () => {
    setAvatarState("Next/OAuth/Firebase");
    console.log("avatarState: " + avatarState);
  };

  const changeState = (state: string) => {
    if (state === "Default") {
      setAvatarState("Next/OAuth/Firebase");
    }
    if (state === "Next/OAuth/Firebase") {
      setAvatarState("Default");
    }
  };

  return (
    <DocLayout>
      <Reveal className="container mx-auto py-8">
        <Reveal className="flex min-w-full flex-col md:flex-row md:justify-between mb-4">
          <h1 className="text-4xl font-bold ">User Avatar</h1>

          <Reveal className="flex flex-row flex-wrap gap-2">
            <button
              className="btn-hover mt-2 md:mt-0 border-gradient px-4 py-2"
              onClick={handleDefaultButtonClick}
            >
              Default
            </button>
            <button
              className="btn-hover mt-2 md:mt-0 border-gradient px-4 py-2"
              onClick={handleNextButtonClick}
            >
              Next/OAuth/Firebase
            </button>
          </Reveal>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className=" text-primary text-2xl font-semibold mb-4">
              Overview
            </h3>
            {avatarState === "Default" && (
              <Reveal>
                <p>
                  The User Avatar component is a versatile and reusable React
                  component designed to display user profile images with ease.
                  With customizable size, alt text, and optional className
                  properties, this component offers flexibility in adapting to
                  various design requirements. Leveraging the power of Next.js'
                  Image component, User Avatar ensures optimized loading and
                  rendering of images while maintaining a sleek and polished
                  appearance. Whether used in social networking applications,
                  user profiles, or online communities, User Avatar simplifies
                  the integration of profile images, enhancing the visual appeal
                  and user experience of web applications.
                </p>
                <Reveal>
                  <DemoTemplate
                    title="Demo"
                    code={`import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatar";

const RevealDemo = () => {
  return (
    <Reveal className="container relative p-5 flex gap-16 flex-col md:flex-row center no-scroll">
      <Reveal delay={0.5}>
        <UserAvatar img={Jrui} size={25} className="hover:animate-ping" />
      </Reveal>
      <Reveal delay={0.75}>
        <UserAvatar
          img={Jrui}
          size={50}
          className=" border-4 border-[#9333ea] p-1 hover:animate-spin"
        />
      </Reveal>
      <Reveal delay={1}>
        <UserAvatar
          img={Jrui}
          size={75}
          className=" hover:translate-y-[-1rem] duration-100"
        />
      </Reveal>
      <Reveal delay={1.25}>
        <UserAvatar
          img={Jrui}
          size={100}
          className="border-2 border-white p-4 hover:p-2 hover:scale-125 transition-all duration-300"
        />
      </Reveal>
    </Reveal>
  );
};

export default RevealDemo;

`}
                  >
                    <UserAvatarDemo />
                  </DemoTemplate>
                </Reveal>
              </Reveal>
            )}
            {avatarState === "Next/OAuth/Firebase" && (
              <Reveal>
                <p>
                  The User Avatar Next/OAuth/Firebase component extends the
                  functionality of the default User Avatar component by
                  integrating with Next.js' authentication library and Firebase
                  authentication. While the default User Avatar component allows
                  users to display profile images stored locally or provided
                  through props, the User Avatar Next/OAuth/Firebase component
                  leverages the NextAuth.js library to fetch user session data,
                  including profile images stored in external authentication
                  providers like OAuth and Firebase. This enables seamless
                  integration with authentication features, providing a dynamic
                  and personalized user experience. By utilizing session data
                  from NextAuth.js, the User Avatar Next/OAuth/Firebase
                  component ensures that user profile images are always
                  up-to-date and reflective of the user's authentication status.
                  Developers can easily incorporate this component into their
                  applications to enhance user profile management and
                  authentication workflows.
                </p>
                <Reveal>
                  <DemoTemplate
                    title="Demo"
                    code={`"use client";
import React from "react";
import Reveal from "../Reveal";
import Jrui from "@/imgs/JRuiLogo.png";
import UserAvatar from "@/app/demo/components/UserAvatarNextOAuthFirebase";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const RevealDemo = () => {
  const { data: session } = useSession();
  return (
    <>
      {!session && (
        <Reveal className="flex flex-col center">
          <h1 className="text-center">Login to view this demo!</h1>
          <button
            onClick={() => signIn()}
            className="btn-hover border-gradient px-4 py-2 mt-2"
          >
            Login
          </button>
        </Reveal>
      )}
      <Reveal className="container relative p-5 flex gap-16 flex-col md:flex-row center no-scroll">
        <Reveal delay={0.5}>
          <UserAvatar size={25} className="hover:animate-ping" />
        </Reveal>
        <Reveal delay={0.75}>
          <UserAvatar
            size={50}
            className=" border-4 border-[#9333ea] p-1 hover:animate-spin"
          />
        </Reveal>
        <Reveal delay={1}>
          <UserAvatar
            size={75}
            className=" hover:translate-y-[-1rem] duration-100"
          />
        </Reveal>
        <Reveal delay={1.25}>
          <UserAvatar
            size={100}
            className="border-2 border-white p-4 hover:p-2 hover:scale-125 transition-all duration-300"
          />
        </Reveal>
      </Reveal>
    </>
  );
};

export default RevealDemo;

`}
                  >
                    <UserAvatarNextOAuthFirebaseDemo />
                  </DemoTemplate>
                </Reveal>
              </Reveal>
            )}
          </section>
        </Reveal>

        {avatarState === "Default" && (
          <Reveal className="mb-6">
            <CLI command={"jrui add userAvatar"} componentState={avatarState} />
          </Reveal>
        )}

        {avatarState === "Next/OAuth/Firebase" && (
          <Reveal className="mb-6">
            <CLI
              command={"jrui add userAvatarNextOAuthFirebase"}
              componentState={avatarState}
            />
            <p className=" font-bold">
              Note: Running this command will modify your next.config.mjs file
              to enable the component to display Google images. If you haven't
              customized this file for image handling, you're all set. However,
              any existing customizations will be overwritten. Consider backing
              up your current next.config.mjs file before proceeding.
            </p>
          </Reveal>
        )}
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">Props</h3>
            <p className="mb-4">
              The <code>UserAvatar</code> component accepts the following props
              for controlling its appearance and behavior:
            </p>
            <ul>
              <li>
                <strong>
                  size: (number) <br />
                </strong>{" "}
                The size of the user avatar in pixels. Defaults to 50 if not
                provided.
              </li>
              <li>
                <strong>
                  className: (string) <br />
                </strong>{" "}
                Additional CSS classes to apply to the user avatar for custom
                styling.
              </li>
              <li>
                <strong>
                  alt: (string) <br />
                </strong>{" "}
                The alternative text for the user avatar image, used for
                accessibility purposes.
              </li>
              <li>
                <strong>
                  img: (string | StaticImageData) <br />
                </strong>{" "}
                The source of the image for the user avatar. This can be a URL
                string or a StaticImageData object.
              </li>
            </ul>
            <Reveal>
              <DemoTemplate title="Props Demo" code={""}>
                <UserAvatarDemo2 />
              </DemoTemplate>
            </Reveal>
          </section>
        </Reveal>

        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Component Files
            </h3>
            <Reveal className="text-lg mb-4">
              Component Type:{" "}
              <span className="text-primary font-bold">{avatarState}</span>
              <br />
              <button
                className="btn-hover border-gradient px-4 py-2 mt-2"
                onClick={() => changeState(avatarState)}
              >
                Change Type
              </button>
            </Reveal>
            {avatarState === "Default" && (
              <CodeTemplate
                fileName="components > UserAvatar.tsx"
                code={`import React from "react";
import Image, { StaticImageData } from "next/image";

interface UserAvatarProps {
  size?: number;
  className?: string;
  alt?: string;
  img: string | StaticImageData;
}

function UserAvatar({
  size = 50,
  className,
  alt = "User profile image",
  img,
}: UserAvatarProps) {
  return (
    <Image
      alt={alt}
      src={img}
      width={size}
      height={size}
      className={\`\${className} shadow-sm border rounded-full\`}
      loading="lazy"
    />
  );
}

export default UserAvatar;
              
`}
              />
            )}
            {avatarState === "Next/OAuth/Firebase" && (
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
            )}
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-8">
            <h3 className="text-primary text-2xl font-semibold mb-4">
              Example Use Case
            </h3>
            <Reveal className="text-lg mb-4">
              Component Type:{" "}
              <span className="text-primary font-bold">{avatarState}</span>
              <br />
              <button
                className="btn-hover border-gradient px-4 py-2 mt-2"
                onClick={() => changeState(avatarState)}
              >
                Change Type
              </button>
            </Reveal>
            {avatarState === "Default" && (
              <CodeTemplate
                fileName="Example.tsx"
                code={`import React from "react";
import UserAvatar from "@/components/UserAvatar"; // Adjust the import path based on your project structure
import Img from '@/imgs/yourImg.png';

const Example: React.FC = () => {
  return (
    <Reveal className="center h-[80dvh]">
      <UserAvatar
        img={Img}
        size={200}
        alt="This is my alt text"
        className=" border-4 border-white"
      />
    </Reveal>
  );
};

export default Example;
              
`}
              />
            )}
            {avatarState === "Next/OAuth/Firebase" && (
              <CodeTemplate
                fileName="Example.tsx"
                code={`import React from "react";
import UserAvatar from "@/components/UserAvatar"; // Adjust the import path based on your project structure

const Example: React.FC = () => {
  return (
    <Reveal className="center h-[80dvh]">
      <UserAvatar
        size={200}
        alt="This is my alt text"
        className=" border-4 border-white"
      />
    </Reveal>
  );
};

export default Example;
              
`}
              />
            )}
          </section>
        </Reveal>
      </Reveal>
    </DocLayout>
  );
};

export default UserAvatar;
