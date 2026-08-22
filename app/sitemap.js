import fs from "fs";
import path from "path";

const baseUrl = "https://cladcan.ca";

function collectPublicRoutes(directory) {
  const routes = new Set(["/"]);

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        if (
          entry.name === "api" ||
          entry.name.startsWith("(") ||
          entry.name.startsWith("[") ||
          entry.name.startsWith("_") ||
          entry.name.startsWith(".")
        ) {
          continue;
        }

        walk(fullPath);
        continue;
      }

      if (!entry.isFile()) continue;
      if (!/page\.[jt]sx?$/.test(entry.name)) continue;

      const relativePath = path.relative(directory, fullPath).replace(/\\/g, "/");
      const route = relativePath.replace(/\/page\.[jt]sx?$/, "") || "/";
      const normalizedRoute = route === "/" ? "/" : `/${route.replace(/^\/+|\/+$/g, "")}`;

      if (!normalizedRoute.startsWith("/api") && !normalizedRoute.includes("/api/")) {
        routes.add(normalizedRoute);
      }
    }
  }

  walk(directory);
  return [...routes].sort((a, b) => {
    if (a === "/") return -1;
    if (b === "/") return 1;
    return a.localeCompare(b);
  });
}

export default function sitemap() {
  const appDirectory = path.join(process.cwd(), "app");
  const routes = collectPublicRoutes(appDirectory);

  return routes.map((route) => {
    const isHome = route === "/";

    return {
      url: `${baseUrl}${route === "/" ? "" : route}`,
      lastModified: new Date(),
      changeFrequency: isHome ? "daily" : "weekly",
      priority: isHome ? 1 : route.split("/").filter(Boolean).length <= 2 ? 0.8 : 0.6,
    };
  });
}
