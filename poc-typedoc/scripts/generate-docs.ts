const TypeDoc = require("typedoc");
// import TypeDoc from "typedoc";

async function main() {
  // Application.bootstrap also exists, which will not load plugins
  // Also accepts an array of option readers if you want to disable
  // TypeDoc's tsconfig.json/package.json/typedoc.json option readers
  const app = await TypeDoc.Application.bootstrapWithPlugins({
    entryPoints: ["src/components/**/*.tsx"],
    // Found typedoc-plugin-markdown which can be used to generate the docs as markdown
    // We can use markdown in storybook mdx
    plugin: ["typedoc-plugin-markdown"],
  });

  const project = await app.convert();

  if (project) {
    // Project contains the three of files. Might be able to use it to generate the html for each component
    console.log(project);
    // Project may not have converted correctly
    const outputDir = "docs";

    // Rendered docs
    await app.generateDocs(project, outputDir);
    // Alternatively generate JSON output
    await app.generateJson(project, outputDir + "/documentation.json");
  }
}

main().catch(console.error);
