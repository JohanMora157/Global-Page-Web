import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

const routes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/servicios",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/contacto",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/nosotros",
    priority: 0.7,
    changeFrequency: "monthly",
  },
] satisfies Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
}>

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}

