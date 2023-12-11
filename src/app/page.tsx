"use client";

import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Overview from "@/components/Overview";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Accordian from "@/module/components/Accordian";

export default function Home() {
  const segments = [
    {
      title: "Education",
      components: <Education />,
    },
    {
      title: "Experience",
      components: <Experience />,
    },
    {
      title: "Projects",
      components: <Projects />,
    },
    {
      title: "Skills",
      components: <Skills />,
    },
  ];
  return (
    <div>
      <Overview />
      {segments.map((item, index) => (
        <Accordian key={index} title={item.title} component={item.components} />
      ))}
    </div>
  );
}

//parallax overviewc | custom cursor
// Accordian -> Skills -> Contacts
