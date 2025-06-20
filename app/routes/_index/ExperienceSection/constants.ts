import type { ExperienceItemProps } from "./ExperienceItem";

export const EXPERIENCE_DATA: ExperienceItemProps[] = [
  {
    dates: ["September 2022", "May 2025"],
    title: "Senior Software Engineer I",
    description:
      "As a founding engineer on Censys's new flagship product, I helped lead a complete rebuild of the legacy platform—establishing front-end standards and design systems to ensure long-term scalability. I spearheaded key initiatives like a frontend SAML integration, RBAC for personal access tokens, and a major redesign of the host history log page, all built with Remix and TypeScript to support a new product-led growth motion that drove over 110 customer conversions within the first month. Beyond feature development, I overhauled our bug triage system to reduce lingering critical issues by over 300%, and led onboarding efforts that cut new engineer ramp-up time from two weeks to just three days.",
    tags: ["Remix", "React", "TypeScript", "Node.js"],
  },
  {
    dates: ["May 2021", "September 2022"],
    title: "Software Engineer II",
    description:
      "At Censys, I collaborated directly with customers to identify major gaps in our Risks feature—like unclear asset exposure and insufficient remediation guidance—and led a comprehensive redesign that significantly improved user confidence and engagement. I also accelerated our end-to-end testing pipeline by implementing parallelization strategies, reducing test run time by nearly 400%. To further improve engineering velocity, I modernized over 40 legacy components by developing a developer-friendly, accessible component library that was adopted across multiple teams.",
    tags: ["React", "TypeScript", "Node.js", "Scala", "Go"],
  },
  {
    dates: ["May 2020", "May 2021"],
    title: "Software Engineer I",
    description:
      "Earlier in my time at Censys, I aligned our Software Development Kits with public APIs, doubling customer adoption rates and streamlining integration workflows. I also built two internet-facing service scanners that uncovered millions of new service fingerprints, significantly expanding our global scan coverage. Beyond engineering, I partnered with leadership to launch the company’s first Employee Resource Group (ERG) and laid the foundation for future ERGs, helping foster a more inclusive and supportive workplace culture.",
    tags: ["Go", "Python", "TypeScript", "React", "Node.js"],
  },
];
