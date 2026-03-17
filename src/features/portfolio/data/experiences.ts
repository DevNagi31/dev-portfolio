import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "binghamton",
    companyName: "Binghamton University, SUNY",
    companyWebsite: "https://binghamton.edu",
    positions: [
      {
        id: "1",
        title: "Master of Science in Computer Science",
        employmentPeriod: {
          start: "08.2024",
        },
        employmentType: "Full-time",
        icon: "education",
        description:
          "GPA: 3.66/4.0\n- Relevant Coursework: Cloud Computing, Database Systems, Social Media Data Science Pipelines, Design & Analysis of Algorithms, Programming Languages",
        skills: [
          "Cloud Computing",
          "Database Systems",
          "Data Science",
          "Algorithms",
        ],
        isExpanded: true,
      },
      {
        id: "1b",
        title: "International Student Orientation Leadership Volunteer",
        employmentPeriod: {
          start: "08.2024",
          end: "08.2024",
        },
        employmentType: "Volunteer",
        icon: "idea",
        description:
          "Led orientation activities for 50+ international students, providing guidance on university systems and technology resources.",
        skills: ["Leadership", "Mentoring", "Communication"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "kjsomaiya",
    companyName: "KJ Somaiya College of Engineering",
    companyWebsite: "https://kjsce.somaiya.edu",
    positions: [
      {
        id: "3",
        title:
          "Bachelor of Science in Electronics and Telecommunication Engineering",
        employmentPeriod: {
          start: "08.2020",
          end: "05.2024",
        },
        employmentType: "Full-time",
        icon: "education",
        description:
          "Minor in Information Technology — GPA: 8.5/10\n- Relevant Coursework: Programming in C, Python Programming, Data Structures and Algorithms, Database Management Systems, Web & App Development, Data Science, Machine Learning",
        skills: [
          "Data Structures",
          "Machine Learning",
          "Web Development",
          "Database Management",
        ],
      },
    ],
  },
  {
    id: "talenthome",
    companyName: "TalentHome Solutions LLP",
    positions: [
      {
        id: "2",
        title: "Software Development Intern",
        employmentPeriod: {
          start: "06.2023",
          end: "08.2023",
        },
        employmentType: "Internship",
        icon: "code",
        description:
          "- Designed and developed multiple sections of the TalentHome Training website including Home, Kids Program, Courses, Academics, Workshops, and Contact pages using HTML, CSS, JavaScript, and PHP\n- Built responsive page layouts, carousel elements, course cards, and interactive UI components across 10+ site pages\n- Implemented optimized front-end architecture with reusable components, collaborating with team members to integrate dynamic content",
        skills: ["HTML", "CSS", "JavaScript", "PHP", "Full Stack"],
      },
    ],
  },
]
