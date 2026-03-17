import type { ExperienceItemType } from "@/registry/components/work-experience"
import { WorkExperience } from "@/registry/components/work-experience"

export default function WorkExperienceDemo() {
  return <WorkExperience className="w-full" experiences={WORK_EXPERIENCE} />
}

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "binghamton",
    companyName: "Binghamton University, SUNY",
    positions: [
      {
        id: "1",
        title: "Graduate Student",
        employmentPeriod: "08.2024 — present",
        employmentType: "Full-time",
        icon: "education",
        description:
          "Master of Science in Computer Science, focusing on advanced algorithms, database systems, and modern programming paradigms.",
        skills: [
          "Algorithms",
          "Database Systems",
          "Distributed Systems",
          "Software Engineering",
        ],
      },
    ],
    isCurrentEmployer: true,
  },
]
