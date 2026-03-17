import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://devnagi.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
]

export const GITHUB_USERNAME = "DevNagi31"
export const SOURCE_CODE_GITHUB_REPO = "DevNagi31/dev-portfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/DevNagi31/dev-portfolio"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "devnagi.com",
}
