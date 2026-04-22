/**
 * projects.js — Edit this file to manage your portfolio projects.
 *
 * Each project has:
 *   slug        Unique URL-friendly identifier used in /projects/:slug
 *   title       Display title
 *   shortDesc   One-sentence description shown on the project card
 *   description Full description shown on the project detail page
 *   tech        Array of technology/tool names used
 *   github      GitHub repo URL (set to null to hide the button)
 *   live        Live demo URL (set to null to hide the button)
 *   image       Path to a thumbnail image, e.g. '/images/project-one.jpg'
 *               Place images in the /public/images/ folder.
 *               Set to null to show an auto-generated placeholder.
 *   category    Used for filtering: 'branding' | 'web-design' | 'app-design' | 'streaming'
 *   imageFit    Optional image fit mode for thumbnails: 'cover' | 'contain'
 */
export const projects = [
  {
    slug: 'project-one',
    title: 'Mini-Me',
    shortDesc: 'An illustrated mini version of myself created in Adobe Illustrator as one of my first design projects.',
    description:
      'Mini-Me was one of my first projects during my education, created in Adobe Illustrator as a way to explore illustration, self-presentation, and visual identity. I used the project to experiment with shape, proportion, and color while turning a simple idea into a clean and recognizable design piece.',
    tech: ['Adobe Illustrator', 'Vector Illustration', 'Graphic Design'],
    github: 'https://github.com/Mogensan',
    live: null,
    image: '/Mini me AM.png',
    imageFit: 'contain',
    category: 'branding',
  },
  {
    slug: 'project-two',
    title: 'Brødrende Løvehjerte',
    shortDesc: 'A promotional website for an amateur theater production of Brødrende Løvehjerte that I designed and built as a school project.',
    description:
      'This project was a promotional website for an amateur theater production of Brødrende Løvehjerte (The Brothers Lionheart). I focused on creating a strong visual identity for the production, presenting the story clearly, and making the site feel inviting, informative, and easy to navigate for visitors.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    github: 'https://github.com/Mogensan/broedrende-loevehjerte',
    live: 'https://mogensan.github.io/broedrende-loevehjerte/',
    image: '/Brødrende løvehjerte.png',
    category: 'web-design',
  },
  {
    slug: 'project-three',
    title: 'SoMe app',
    shortDesc: 'An app in development called Crawlmate for planning pub crawls, sharing photos, and keeping track of your favorite spots.',
    description:
      'Crawlmate is an app concept I am developing for social drinking and pub crawl planning. The goal is to make it easy to create or join crawls with friends, share photos from the night, and keep track of the places people enjoy most, all in one organized experience.',
    tech: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    github: null,
    live: null,
    image: '/Crawlmate app.png',
    category: 'app-design',
  },
  {
    slug: 'project-four',
    title: 'Recipe site',
    shortDesc: 'A recipe website for a fictional restaurant created as part of my education.',
    description:
      'This recipe website was designed for a fictional restaurant as part of my education. I wanted the site to feel appetizing, structured, and practical, with a layout that helps users quickly find dishes while still supporting a polished restaurant brand.',
    tech: ['Vue 3', 'Web Design', 'Content Structure'],
    github: 'https://github.com/Mogensan/recipe-site',
    live: 'https://mogensan.github.io/recipe-site/',
    image: '/Recipe site.png',
    category: 'web-design',
  },
  {
    slug: 'project-five',
    title: 'Streaming Profile',
    shortDesc: 'My streaming, YouTube, and social media profile design, including banners, profile pictures, and stream graphics.',
    description:
      'This project covers the visual identity I created for my streaming presence across Twitch, YouTube, and social media. It includes banners, profile images, and stream graphics designed to keep the brand consistent, professional, and recognizable across every platform.',
    tech: ['Branding', 'Stream Graphics', 'Social Media Design'],
    github: null,
    live: 'https://twitch.tv/mogensann',
    image: '/Twitch navn.png',
    category: 'streaming',
  },
]
