export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: "https://cladcan.ca/sitemap.xml",
    host: "https://cladcan.ca",
  };
}
