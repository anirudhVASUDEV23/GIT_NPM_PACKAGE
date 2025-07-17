const fs = require("fs-extra");
const path = require("path");
const { transform } = require("@svgr/core");
const simpleIcons = require("simple-icons");

const outputFile = path.resolve(__dirname, "./logo.tsx");

async function generate() {
  const iconEntries = Object.entries(simpleIcons).filter(([key]) =>
    key.startsWith("si")
  );

  const cases = [];

  for (const [key, icon] of iconEntries) {
    const slug = icon.slug;
    const svgPath = icon.path;

    const svgCode = `<svg width = {s} height = {s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill = {color} d="${svgPath}" /></svg>`;

    const jsx = await transform(
      svgCode,
      {
        icon: true,
        svgProps: {
          size: "{s}",
          fill: "{color}",
        },
        prettier: false,
        jsxRuntime: "classic",
      },
      { componentName: slug }
    );

    cases.push(`
    case "${slug}":
      return (
        ${jsx.trim()}
      );`);
  }

  const content = `
  import * as React from "react";

  interface BrandProps {
    name: string;
    s?: number;
    color?: string;
  }

  export function Brand({ brand, s = 24, color = "currentColor" }: BrandProps) {
    switch (brand) {
      ${cases.join("\n")}
      default:
        return null;
    }
  }
  `;

  await fs.ensureDir(path.dirname(outputFile));
  await fs.writeFile(outputFile, content);
  console.log("✅ LogoIcon.tsx generated with", iconEntries.length, "icons.");
}

generate();
