/**
 * Central content configuration for Ananya Murali A T's portfolio.
 * Edit text, links, or swap in real image paths (from src/assets/) here
 * without touching any JSX components.
 */

export const siteContent = {
  navigation: {
    links: [
      { label: 'MY WORK', href: '#my-work' },
      { label: 'CASE STUDY', href: '#case-study' },
      { label: 'TESTIMONIALS', href: '#testimonials' },
      { label: 'CONTACT', href: '#contact' },
    ],
  },

  hero: {
    role: 'JOURNALIST & CONTENT CREATOR',
    headline: 'PORTFOLIO',
    tagline:
      'Creating clear, credible content that helps brands and newsrooms tell stories people trust.',
    cutoutPhoto: {
      // Swap null for an imported transparent PNG or path, e.g. '/assets/hero-cutout.png'
      src: null,
      alt: 'Ananya Murali A T cutout portrait',
      placeholderLabel: 'Cutout photo',
    },
    socials: [
      {
        id: 'instagram',
        label: 'Instagram',
        shortLabel: 'ig',
        href: 'https://www.instagram.com/reel/DfzagkmCmlO/?cnvx=MTZ6dHgycWUwZm9xMA==',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        shortLabel: 'in',
        href: 'https://www.linkedin.com/in/ananya-murali-a-t',
      },
      {
        id: 'email',
        label: 'Email',
        shortLabel: '@',
        href: 'mailto:06ananyamurali@gmail.com',
      },
    ],
  },

  about: {
    headingLine1: "Hi, I'm",
    headingLine2: 'Ananya',
    paragraphs: [
      "I'm a journalist and content creator from Kochi, working across news reporting, ad copy, video scripts and digital media.",
      'I believe the best content starts with a true story told clearly.',
    ],
    stats: [
      { value: '4', label: 'ROLES IN MEDIA' },
      { value: '4', label: 'ORGANISATIONS' },
      { value: '2', label: 'LANGUAGES', sublabel: 'MAL · ENG' },
    ],
    workedWithLabel: 'WORKED WITH',
    organisations: ['Mathrubhumi', 'Media7', 'EURECO', 'EDBE'],
    portraitPhoto: {
      src: null,
      alt: 'Portrait of Ananya Murali A T',
      placeholderLabel: 'Portrait photo',
    },
    handwrittenTag: 'get to know me',
  },

  niches: {
    heading: 'CONTENT NICHES',
    items: [
      { id: 'news-reporting', label: 'NEWS REPORTING', icon: 'newspaper' },
      { id: 'digital-content', label: 'DIGITAL CONTENT', icon: 'fileText' },
      { id: 'ad-copywriting', label: 'AD COPYWRITING', icon: 'penTool' },
      { id: 'video-scripts', label: 'VIDEO SCRIPTS', icon: 'playSquare' },
      { id: 'anchoring', label: 'ANCHORING', icon: 'mic' },
    ],
    fullLengthPhoto: {
      src: null,
      alt: 'Full-length photo of Ananya Murali A T',
      placeholderLabel: 'Full-length photo',
    },
    editorialCopy: {
      leadBold: 'As a content creator, I bring a',
      highlight: "reporter's eye for facts and an ad writer's ear for hooks.",
      body: "I've worked with newsrooms, a branding agency and an education brand, in Malayalam and English.",
    },
    educationBar: [
      { title: 'PG Diploma', subtitle: 'JOURNALISM & COMMUNICATION' },
      { title: '2024–25', subtitle: 'KERALA MEDIA ACADEMY' },
      { title: 'BA', subtitle: 'POLITICAL SCIENCE' },
    ],
  },

  gallery: {
    heading: 'PORTFOLIO GALLERY',
    subtitle:
      'A selection of recent articles, scripts, ads and presentations created for newsrooms and brands.',
    categories: ['All', 'News', 'Ads', 'Videos', 'Anchoring'],
    items: [
      {
        id: 'work-1',
        title: 'Work 1',
        category: 'News',
        src: null,
        alt: 'News work sample 1',
      },
      {
        id: 'work-2',
        title: 'Work 2',
        category: 'Ads',
        src: null,
        alt: 'Advertising work sample 2',
      },
      {
        id: 'work-3',
        title: 'Work 3',
        category: 'Videos',
        src: null,
        alt: 'Video script work sample 3',
      },
      {
        id: 'work-4',
        title: 'Work 4',
        category: 'Anchoring',
        src: null,
        alt: 'Anchoring work sample 4',
      },
      {
        id: 'work-5',
        title: 'Work 5',
        category: 'News',
        src: null,
        alt: 'News work sample 5',
      },
      {
        id: 'work-6',
        title: 'Work 6',
        category: 'Ads',
        src: null,
        alt: 'Advertising work sample 6',
      },
      {
        id: 'work-7',
        title: 'Work 7',
        category: 'Videos',
        src: null,
        alt: 'Video work sample 7',
      },
      {
        id: 'work-8',
        title: 'Work 8',
        category: 'Anchoring',
        src: null,
        alt: 'Anchoring work sample 8',
      },
    ],
  },

  process: {
    heading: 'MY CREATIVE PROCESS',
    steps: [
      {
        number: '01',
        title: 'Research',
        description: 'Understanding the topic, audience and goal.',
      },
      {
        number: '02',
        title: 'Writing',
        description: 'Drafting the story, script or copy with a hook.',
      },
      {
        number: '03',
        title: 'Editing',
        description: 'Checking facts and shaping it per platform.',
      },
      {
        number: '04',
        title: 'Publishing',
        description: 'Delivering on time with editors and designers.',
      },
    ],
  },

  caseStudies: {
    kicker: 'CASE STUDIES',
    headingLine1: 'REAL WORK',
    headingLine2: 'CREATED WITH PURPOSE',
    subtitle:
      'A look at the roles where I wrote, reported and created content for real audiences.',
    cards: [
      {
        id: 'media7',
        org: 'MEDIA7',
        subOrg: 'NEWS & ENTERTAINMENTS',
        projectLabel: 'THE PROJECT',
        projectDescription:
          'News Reporter & Content Creator for the digital news portal: research, writing, editing, publishing, promo concepts and ad videos.',
        heroImage: {
          src: null,
          alt: 'MEDIA7 News & Entertainments work sample',
          placeholderLabel: 'Work sample',
        },
        numbersHeading: 'THE ROLE IN NUMBERS',
        metrics: [
          { value: '8', label: 'MONTHS' },
          { value: '1', label: 'NEWS PORTAL' },
          { value: '3', label: 'TEAMS' },
          { value: '6', label: 'DUTIES' },
        ],
        snapshotHeading: 'CONTENT SNAPSHOT',
        snapshots: [
          { id: 'm7-1', src: null, alt: 'MEDIA7 content snapshot 1' },
          { id: 'm7-2', src: null, alt: 'MEDIA7 content snapshot 2' },
          { id: 'm7-3', src: null, alt: 'MEDIA7 content snapshot 3' },
          { id: 'm7-4', src: null, alt: 'MEDIA7 content snapshot 4' },
        ],
        deliverablesHeading: 'DELIVERABLES',
        deliverables: [
          { label: 'NEWS ARTICLES', icon: 'newspaper' },
          { label: 'PROMO CONCEPTS', icon: 'lightbulb' },
          { label: 'AD VIDEOS', icon: 'play' },
          { label: 'DIGITAL CONTENT', icon: 'layoutGrid' },
        ],
        testimonial: {
          quote: 'Add a note from an editor or colleague here.',
          author: 'Name, Designation',
        },
      },
      {
        id: 'eureco',
        org: 'EURECO',
        subOrg: 'BRANDING & ADVERTISING',
        projectLabel: 'THE PROJECT',
        projectDescription:
          'Content Creator for ad campaigns: concepts, ad copy, video scripts and bilingual content for education brands.',
        heroImage: {
          src: null,
          alt: 'EURECO Branding & Advertising work sample',
          placeholderLabel: 'Work sample',
        },
        numbersHeading: 'THE ROLE IN NUMBERS',
        metrics: [
          { value: '3', label: 'MONTHS' },
          { value: '2', label: 'LANGUAGES' },
          { value: '5', label: 'DUTIES' },
          { value: '1', label: 'AGENCY' },
        ],
        snapshotHeading: 'CONTENT SNAPSHOT',
        snapshots: [
          { id: 'eu-1', src: null, alt: 'EURECO content snapshot 1' },
          { id: 'eu-2', src: null, alt: 'EURECO content snapshot 2' },
          { id: 'eu-3', src: null, alt: 'EURECO content snapshot 3' },
          { id: 'eu-4', src: null, alt: 'EURECO content snapshot 4' },
        ],
        deliverablesHeading: 'DELIVERABLES',
        deliverables: [
          { label: 'AD COPY', icon: 'penTool' },
          { label: 'VIDEO SCRIPTS', icon: 'film' },
          { label: 'CALLS TO ACTION', icon: 'megaphone' },
          { label: 'BILINGUAL CONTENT', icon: 'languages' },
        ],
        testimonial: {
          quote: 'Add a note from the agency team here.',
          author: 'Name, Designation',
        },
      },
    ],
    edbeBanner: {
      title: 'PRESENTING FOR EDBE',
      description: "Freelance anchor for EDBE's digital content.",
      ctaLabel: 'WATCH THE LATEST AD',
      ctaHref:
        'https://www.instagram.com/reel/DfzagkmCmlO/?cnvx=MTZ6dHgycWUwZm9xMA==',
    },
  },

  careerGrowth: {
    heading: 'CAREER GROWTH',
    chartPoints: [
      { date: '08/25', roles: 1, label: '1 role' },
      { date: '02/26', roles: 2, label: '2 roles' },
      { date: '09/26', roles: 3, label: '3 roles' },
      { date: '10/26', roles: 4, label: '4 roles' },
    ],
    stats: [
      { title: '4 roles', subtitle: 'since Aug 2025' },
      { title: '4 organisations', subtitle: 'worked with' },
      { title: 'PG Diploma', subtitle: 'Journalism' },
      { title: '2 languages', subtitle: 'Malayalam, English' },
    ],
  },

  contact: {
    heading: "LET'S WORK TOGETHER",
    email: '06ananyamurali@gmail.com',
    phoneDisplay: '82812 66923',
    phoneHref: 'tel:+918281266923',
    linkedinLabel: 'CONNECT ON LINKEDIN',
    linkedinHref: 'https://www.linkedin.com/in/ananya-murali-a-t',
  },

  footer: {
    copyright: '© 2026 Ananya Murali A T — Kochi, Kerala',
  },
};
