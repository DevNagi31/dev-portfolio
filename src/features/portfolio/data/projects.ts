import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "eventhub",
    title: "EventHub",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/DevNagi31/eventhub",
    skills: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Socket.io",
      "Redis",
      "Faktory",
      "Tailwind CSS",
      "JWT",
      "Claude AI",
    ],
    description:
      "Full-stack event discovery platform for sports and esports events with geospatial search.\n- Location-based search with Haversine formula (1–200 mile radius)\n- Faktory job queue for automated web scraping every 4 hours\n- Real-time group chat with Socket.io and persistent PostgreSQL storage\n- AI-powered event recommendations via Claude integration\n- 15+ REST API endpoints for auth, events, groups, and chat",
    isExpanded: true,
  },
  {
    id: "bu-map",
    title: "BU Campus Map",
    period: {
      start: "01.2026",
    },
    link: "https://github.com/DevNagi31/BU-Map",
    skills: ["JavaScript", "MapLibre GL JS", "GeoJSON", "Vite"],
    description:
      "Interactive 3D campus map for Binghamton University with room-level navigation.\n- 115 buildings rendered as 3D extrusions with color-coded categories\n- 700+ searchable rooms across 18 buildings with floor-level directions\n- GPS-enabled route planning with real-time updates\n- 27 parking lots, 9 dining locations, and 15 bus stops with live schedules",
    isExpanded: true,
  },
  {
    id: "chess-toxicity-analysis",
    title: "Chess Toxicity Analysis",
    period: {
      start: "09.2025",
      end: "12.2025",
    },
    link: "https://github.com/DevNagi31/chess-toxicity-analysis",
    skills: [
      "Python",
      "Flask",
      "PostgreSQL",
      "Google Perspective API",
      "Matplotlib",
      "NLP",
      "Data Analysis",
    ],
    description:
      "End-to-end data science pipeline analyzing toxicity patterns across 164,368 chess discussion posts from Reddit and 4chan.\n- Custom crawlers for Reddit API and 4chan endpoints collecting 3.5M+ posts\n- Batch toxicity scoring with Google Perspective API\n- Interactive Flask dashboard with real-time toxicity predictor and temporal trend visualizations\n- Research finding: platform culture drives 106% higher toxicity on 4chan vs Reddit",
  },
  {
    id: "leetcode-arena",
    title: "LeetCode Arena",
    period: {
      start: "06.2024",
    },
    link: "https://github.com/DevNagi31/leetcode-arena",
    skills: ["React", "Express.js", "MongoDB", "Socket.io", "JWT", "Axios"],
    description:
      "Developer growth platform that syncs with LeetCode to track progress and compete with peers.\n- Activity heatmap with streak metrics and weekly goal tracking\n- Leaderboards filterable by global, country, or university\n- Real-time messaging with Socket.io\n- Personal code snippet repository with problem descriptions",
  },
  {
    id: "facial-emotion-recognition",
    title: "Facial Emotion Recognition System",
    period: {
      start: "01.2023",
      end: "06.2023",
    },
    link: "https://github.com/DevNagi31/Facial-Emotion-Recognition-System",
    skills: ["Python", "Machine Learning", "Computer Vision", "Haar Cascades"],
    description:
      "ML pipeline for real-time facial emotion detection using computer vision.\n- Trained classification models on labeled facial image datasets\n- Real-time emotion recognition via Haar Cascade face detection\n- End-to-end pipeline: training, evaluation, and deployment",
  },
  {
    id: "myfit",
    title: "MyFIT",
    period: {
      start: "01.2023",
      end: "06.2023",
    },
    link: "https://github.com/DevNagi31/MyFIT",
    skills: ["Dart", "Flutter", "iOS", "Android"],
    description:
      "Cross-platform fitness mobile application built with Flutter for iOS, Android, and web.",
  },
  {
    id: "sked",
    title: "SKeD",
    period: {
      start: "01.2023",
      end: "06.2023",
    },
    link: "https://github.com/DevNagi31/SKeD",
    skills: ["HTML", "CSS", "JavaScript"],
    description:
      "E-commerce website prototype for online product sales, built with vanilla HTML, CSS, and JavaScript.",
  },
  {
    id: "color-game",
    title: "Color Game",
    period: {
      start: "01.2023",
      end: "06.2023",
    },
    link: "https://github.com/DevNagi31/Color-Game",
    skills: ["Python", "Tkinter"],
    description:
      "GUI color guessing game built with Python Tkinter featuring score tracking and timed gameplay.",
  },
]
