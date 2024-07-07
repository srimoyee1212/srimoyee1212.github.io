// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'srimoyee1212', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['srimoyee1212/Computer-Vision', 'srimoyee1212/VectorRAG', 'srimoyee1212/Whisper-Fairness-Eval', 'srimoyee1212/GameRL', 'srimoyee1212/Art-Speak', 'srimoyee1212/AMoD-Rebalancing']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Srimoyee Mukhopadhyay',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'srimoyee-mukhopadhyay',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://srimoyee1212.github.io/',
    phone: '',
    email: 'srimoyeem1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1yDl7G_JmqjuJTTNafql05mzzVfYFDYBe/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'MongoDB',
    'Hadoop',
    'AWS SageMaker',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Tableau',
  ],
  experiences: [
    {
      company: 'RapidReview',
      position: 'Machine Learning Research Engineer',
      from: 'January 2024',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Cornell Tech',
      position: 'Course Assistant',
      from: 'August 2023',
      to: 'May 2024',
      companyLink: 'https://example.com',
    },
    {
      company: 'Radical AI',
      position: 'Machine Learning Engineer Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'Nutanix Inc',
      position: 'Software Engineer',
      from: 'August 2020',
      to: 'June 2022',
      companyLink: '',
    },
  ],

  educations: [
    {
      institution: 'Cornell University',
      degree: 'Master of Science in Computer and Information Science',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Manipal Institute of Technology',
      degree: 'Bachelor of Technology in Computer Science',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Industrial Control Protocol Fuzzing using Deep Adversarial Networks',
      conferenceName: '2021 International Conference on Advances in Computing, Communication, and Control (ICAC3)',
      journalName: 'IEEE Xplore',
      authors: 'Srimoyee Mukhopadhyay',
      link: 'https://ieeexplore.ieee.org/document/9697297',
      description:
        'The security strength of Industrial Control Protocol (ICP) directly impacts the robustness of Industrial Control Systems (ICS). The security metrics of ICS rely on ICP’s structure, so the security levels of ICS can be incremented with a powerful ICP. This notion begs for a need to develop an effective vulnerability detection system for ICPs. To this end, fuzz testing has emerged as the most conspicuous method for identifying the vulnerabilities in ICPs, as present in the literature. However, ICP specifications are a dominant part of the fuzzing methods and analyzing them becomes very tedious and time-consuming. In this research, we propose a novel WassersteinGAN-based neural network framework - the GANFuzzer. This time-saving and computationally efficient framework helps augment the probability of triggering vulnerabilities. Conclusively, a comparative analysis was performed by assessing the performance of varied ICPs. The effectiveness of the GANFuzzer is also proven by the wide range of tests conducted as a part of this research.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
