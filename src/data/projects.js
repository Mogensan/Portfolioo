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
 *   category    Used for filtering: 'frontend' | 'backend' | 'fullstack' | 'other'
 */
export const projects = [
  {
    slug: 'project-one',
    title: 'Project One',
    shortDesc: 'A brief one-line description of what this project does and the problem it solves.',
    description:
      'A more detailed description of the project goes here. Explain the purpose, the challenges you overcame, and the impact or outcome. You can write multiple sentences.',
    tech: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Mogensan',
    live: null,
    image: null,
    category: 'fullstack',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    shortDesc: 'A brief one-line description of what this project does and the problem it solves.',
    description:
      'A more detailed description of the project goes here. Explain the purpose, the challenges you overcame, and the impact or outcome.',
    tech: ['React', 'TypeScript', 'Firebase'],
    github: 'https://github.com/Mogensan',
    live: 'https://example.com',
    image: null,
    category: 'frontend',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    shortDesc: 'A brief one-line description of what this project does and the problem it solves.',
    description:
      'A more detailed description of the project goes here. Explain the purpose, the challenges you overcame, and the impact or outcome.',
    tech: ['Python', 'FastAPI', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/Mogensan',
    live: null,
    image: null,
    category: 'backend',
  },
  {
    slug: 'project-four',
    title: 'Project Four',
    shortDesc: 'A brief one-line description of what this project does and the problem it solves.',
    description:
      'A more detailed description of the project goes here. Explain the purpose, the challenges you overcame, and the impact or outcome.',
    tech: ['Vue 3', 'Express', 'MongoDB'],
    github: 'https://github.com/Mogensan',
    live: 'https://example.com',
    image: null,
    category: 'fullstack',
  },
  {
    slug: 'project-five',
    title: 'Project Five',
    shortDesc: 'A brief one-line description of what this project does and the problem it solves.',
    description:
      'A more detailed description of the project goes here. Explain the purpose, the challenges you overcame, and the impact or outcome.',
    tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/Mogensan',
    live: 'https://example.com',
    image: null,
    category: 'frontend',
  },
]
