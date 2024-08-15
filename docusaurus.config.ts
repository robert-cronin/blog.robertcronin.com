import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Robert Cronin",
  tagline: "Senior Software Engineer",
  favicon: "img/favicon.ico",

  url: "https://blog.robertcronin.com",
  baseUrl: "/",

  organizationName: "robert-cronin",
  projectName: "robertcronin.com",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
          editUrl:
            "https://github.com/robert-cronin/robertcronin.com/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "Robert Cronin",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          href: "https://github.com/robert-cronin",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/users/7644072/robbie-cronin",
            },
            {
              label: "Code Wars",
              href: "https://www.codewars.com/users/robert-cronin",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/robert-cronin/robertcronin.com",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Robert Cronin. Built with Docusaurus. <a href="/rasberry-pi-k8s-cluster">Hosted on MicroK8s</a>.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
