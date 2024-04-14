import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:grid md:grid-cols-4 gap-10 px-10">
        <ProjectCard
          src="/wellnessafriq.webp"
          title="Wellness Africa"
          description={`Wellness Africa is your ultimate companion for a healthy lifestyle tailored to the African context. From fitness and nutrition to mental well-being.`}
        />

        <ProjectCard
          src="/bustleup.png"
          title="BustleUp"
          description={`one-stop destination for all your service needs. Whether you're looking for professionals to help with home repairs, tutoring sessions, event planning, or any other service, our platform connects you with skilled service providers`}
        />
        <ProjectCard
          src="/qwip.png"
          title="Qwip"
          description={`An ultimate fleet management solution created to bridge the gap between NEMT brokers and patients, ensuring every trip is a smooth journ`}
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
