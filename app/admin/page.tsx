"use client";
import React, { useEffect, useState } from "react";
import {
  getIncompleteIdeas,
  getIncompleteIssues,
  completeIdea,
  completeIssue,
  deleteIdea,
  deleteIssue,
} from "@/utils/firebaseUtils";
import { db } from "@/firebase";
import Reveal from "@/components/Reveal";
import { Trash2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Jrui from "@/imgs/JRuiLogo.png";
import Image from "next/image";

type Idea = {
  name: string;
  description: string;
  timestamp: string;
  id: string;
};

type Issue = {
  name: string;
  description: string;
  timestamp: string;
  id: string;
};

const Dashboard: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log("Session:", session);
    } else {
      console.log("No session");
    }
  }, [session]);

  useEffect(() => {
    const fetchIncompleteData = async () => {
      try {
        const incompleteIdeas = await getIncompleteIdeas(db);
        const incompleteIssues = await getIncompleteIssues(db);
        setIdeas(incompleteIdeas as Idea[]);
        setIssues(incompleteIssues as Issue[]);
        console.log("Incomplete ideas:", incompleteIdeas);
        console.log("Incomplete issues:", incompleteIssues);
      } catch (error) {
        console.error("Error fetching incomplete data:", error);
      }
    };

    fetchIncompleteData();
  }, []);

  const handleIdeaComplete = async (ideaId: string) => {
    try {
      await completeIdea(db, ideaId);
      const updatedIdeas = ideas.filter((idea) => idea.id !== ideaId);
      setIdeas(updatedIdeas);
    } catch (error) {
      console.error("Error marking idea as completed:", error);
    }
  };

  const handleIssueComplete = async (issueId: string) => {
    try {
      await completeIssue(db, issueId);
      const updatedIssues = issues.filter((issue) => issue.id !== issueId);
      setIssues(updatedIssues);
    } catch (error) {
      console.error("Error marking issue as completed:", error);
    }
  };

  const handleIdeaDelete = async (ideaId: string) => {
    try {
      await deleteIdea(db, ideaId);
      const updatedIdeas = ideas.filter((idea) => idea.id !== ideaId);
      setIdeas(updatedIdeas);
    } catch (error) {
      console.error("Error deleting idea:", error);
    }
  };

  const handleIssueDelete = async (issueId: string) => {
    try {
      await deleteIssue(db, issueId);
      const updatedIssues = issues.filter((issue) => issue.id !== issueId);
      setIssues(updatedIssues);
    } catch (error) {
      console.error("Error deleting issue:", error);
    }
  };

  return (
    <>
      {session && session.user?.id === "PqMnl7Wc32CVIzhMAic8" ? (
        <Reveal className="container mt-8 flex flex-wrap md:flex-nowrap justify-between gap-2">
          <div className="w-full md:max-w-[50%]">
            <h2 className="text-4xl font-semibold mb-4 text-center ">
              Incomplete Ideas
            </h2>
            <ul>
              {ideas.map((idea, index) => (
                <Reveal key={index} delay={0.3 * index}>
                  <li className="border-gradient px-2 pt-2 relative">
                    <h3 className=" text-primary text-2xl font-semibold mb-1">
                      {idea.name}
                    </h3>
                    <p>{idea.description}</p>
                    <p className="opacity-50">{idea.timestamp}</p>
                    <button
                      className="absolute top-1 right-9 text-red-500"
                      onClick={() => handleIdeaDelete(idea.id)}
                    >
                      <Trash2 />
                    </button>
                    <button
                      className="absolute top-1 right-1 text-green-500"
                      onClick={() => handleIdeaComplete(idea.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-circle-check-big"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                    </button>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="w-full md:max-w-[50%]">
            <h2 className="text-4xl font-semibold mb-4 text-center">
              Incomplete Issues
            </h2>
            {issues.length === 0 ? (
              <p className="text-gray-500 text-lg text-center">
                No incomplete issues found.
              </p>
            ) : (
              <ul>
                {issues.map((issue, index) => (
                  <Reveal delay={0.2 * index} key={index}>
                    <li className="border-gradient px-2 pt-2 relative">
                      <h3 className="text-primary text-2xl font-semibold mb-1">
                        {issue.name}
                      </h3>
                      <p>{issue.description}</p>
                      <p className="opacity-50">{issue.timestamp}</p>
                      <button
                        className="absolute top-1 right-9 text-red-500"
                        onClick={() => handleIssueDelete(issue.id)}
                      >
                        <Trash2 />
                      </button>
                      <button
                        className="absolute top-1 right-1 text-green-500"
                        onClick={() => handleIssueComplete(issue.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-circle-check-big"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                          <path d="m9 11 3 3L22 4" />
                        </svg>
                      </button>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      ) : (
        <Reveal className="w-full h-[80dvh] flex-col center">
          <p className="text-4xl">
            Hmmmm... It seems as though you are not an admin.{" "}
          </p>
          <Reveal delay={2}>
            <p className="text-2xl">Please kindly GTFO!</p>
          </Reveal>
          <Reveal delay={4}>
            <p className="text-2xl">Or Jrui will come for you!</p>
          </Reveal>
          <Reveal delay={6} duration={2} className="absolute bottom-[-22.5rem]">
            <Image src={Jrui} alt="Jrui is coming for you!" width={600} />
          </Reveal>
        </Reveal>
      )}
    </>
  );
};

export default Dashboard;
