require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
  return (
    new Sitemap(router)
      .build("https://staging.kathekon.in")
      .save("./public/sitemap.xml")
  );
}

generateSitemap();
