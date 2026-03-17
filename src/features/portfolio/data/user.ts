import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Dev Krishna",
  lastName: "Nagi",
  displayName: "Dev Krishna Nagi",
  username: "devnagi",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer, Data Engineer, Cloud Engineer",
  flipSentences: [
    "Full Stack Developer",
    "Data Engineer",
    "Cloud Enthusiast",
    "Graduate Student",
  ],
  address: "Binghamton, NY",
  phoneNumber: "KzEgKDYwNykgNzc0LTc2NDE=", // E.164 format, base64 encoded: +1 (607) 774-7641
  email: "ZG5hZ2lAYmluZ2hhbXRvbi5lZHU=", // base64 encoded: dnagi@binghamton.edu
  website: "https://devnagi.com",
  jobTitle: "Full Stack Developer",
  jobs: [
    {
      title: "Graduate Student",
      company: "Binghamton University",
      website: "https://binghamton.edu",
    },
  ],
  about: `
- **MS in Computer Science** at Binghamton University, SUNY (GPA: 3.66/4.0), with a BS in Electronics and Telecommunication Engineering from KJ Somaiya College of Engineering, Mumbai (GPA: 8.5/10).
- Skilled in **React**, **Node.js**, **Python**, **TypeScript**, **AWS**, and modern full-stack technologies; building production-ready web applications and data pipelines.
- Creator of [EventHub](https://github.com/DevNagi31/eventhub) (2026): Full-stack event discovery platform with geospatial search, Faktory job queue, and real-time Socket.io chat
- Creator of [BU Campus Map](https://github.com/DevNagi31/BU-Map) (2026): Interactive 3D campus map with 115 buildings, 700+ rooms, and GPS navigation
- Creator of [Chess Toxicity Analysis](https://github.com/DevNagi31/chess-toxicity-analysis) (2025): NLP pipeline analyzing 164K+ posts with Google Perspective API — research for CS 515
`,
  avatar: "/images/avatar.svg",
  ogImage: "/images/og-image.svg",
  namePronunciationUrl: "",
  keywords: [
    "Dev Krishna Nagi",
    "devnagi",
    "Full Stack Developer",
    "Data Engineer",
    "Cloud Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
  ],
  timeZone: "America/New_York",
  dateCreated: "2024-08-01",
} satisfies User

export const NAME = USER.displayName
export const FULL_NAME = `${USER.firstName} ${USER.lastName}`
export const GITHUB_USERNAME = "DevNagi31"
export const NICKNAME = USER.firstName
export const LOCATION = USER.address
export const EMAIL = USER.email
export const PHONE = USER.phoneNumber
export const WEBSITE = USER.website
export const PRONOUNS = USER.pronouns
export const BIO = USER.bio
export const ROLE = USER.jobTitle
export const COMPANY = USER.jobs[0].company
export const COMPANY_LINK = USER.jobs[0].website
