import {
  bulletPoint1,
  bulletPoint2,
  bulletPoint3,
  icoComment,
  icoDashboard,
  icoFacebook,
  icoFolders,
  icoInstagram,
  icoLinkedin,
  icoProfiles,
  icoStatistic,
  icoTailored,
  icoX,
  logoAmazon,
  logoGoogle,
  logoNetflix,
  logoSlack,
  logoZoom,
} from "../assets";

export const branding = [
  {
    id: "0",
    alt: "Logo Google",
    image: logoGoogle,
  },
  {
    id: "1",
    alt: "Logo Slack",
    image: logoSlack,
  },
  {
    id: "2",
    alt: "Logo Amazon",
    image: logoAmazon,
  },
  {
    id: "3",
    alt: "Logo Zoom",
    image: logoZoom,
  },
  {
    id: "4",
    alt: "Logo Netflix",
    image: logoNetflix,
  },
];

export const features = [
  {
    id: "0",
    alt: "Icon Dashboard",
    image: icoDashboard,
    title: "Conception & Développement Web",
    text: `Nous concevons des sites qui combinent esthétique, ergonomie et performance 
    Sites vitrines parfaits pour les entreprises souhaitant présenter leurs services et renforcer leur crédibilité.
    Sites e- commerce avec gestion des stocks, paiements sécurisés, zones de livraison personnalisées, etc.
    Sites institutionnels pour collectivités, ONG, écoles ou ministères. `,
  },
  {
    id: "1",
    alt: "Icon Comment",
    image: icoComment,
    title: "Communication & Marketing Digital",
    text: ` Stratégie de contenu** : calendrier éditorial, storytelling, voix de marque.
      Community management: animation, modération et interactions avec vos audiences sur Facebook, Instagram, LinkedIn, TikTok.
      Design graphique
      Publicité digitale: campagnes Facebook Ads, Google Search & Display, retargeting.`,
  },
  {
    id: "2",
    alt: "Icon Tailored",
    image: icoTailored,
    title: "Applications Mobiles & Solutions SaaS",
    text: `Nous développons des outils pratiques et intuitifs :
      Applications mobiles natives et hybrides: Android, iOS, Flutter .
      reporting et alertes.
      Connexion API : intégration avec Stripe, Google Maps, Twilio, etc.
      Maintenance & mises à jour continues** : pour garantir la sécurité et l’évolutivité.`,
  },
  {
    id: "3",
    alt: "Icon Statistic",
    image: icoStatistic,
    title: "Optimisation & Visibilité en ligne",
    text: `Parce qu’avoir un site, c’est bien… mais être trouvé, c’est mieux :

      SEO éditorial rédaction d’articles optimisés, stratégie de mots-clés, netlinking.
      Audit de référencement** : analyse concurrentielle, erreurs SEO, axes d’amélioration.
      racking avancé Google Analytics 4, Google Tag Manager, pixels publicitaires.
`,
  },
  {
    id: "4",
    alt: "Icon Profiles",
    image: icoProfiles,
    title: "Automatisation & Digitalisation des processus",
    text: `Nous boostons la productivité de vos équipes :
      CRM & ERP sur mesure gestion commerciale, suivi client, facturation, ressources humaines.
      Automatisation des tâches emails transactionnels, notifications automatiques, rappels clients.
      suivi des documents, workflows automatisés.
      Formation & accompagnement sessions personnalisées pour vos équipes, guides d’utilisation.
      `,
  },
  {
    id: "5",
    alt: "Icon Folders",
    image: icoFolders,
    title: "Folders",
    text: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise layouts for previewing layouts and visual mockups.",
  },
];

export const bulletPoints = [
  {
    id: "0",
    alt: "Saas Bullet Point 1",
    image: bulletPoint1,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
  {
    id: "1",
    alt: "Saas Bullet Point 2",
    image: bulletPoint2,
    width: 542,
    height: 348,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
  {
    id: "2",
    alt: "Saas Bullet Point 3",
    image: bulletPoint3,
    width: 550,
    height: 300,
    title: "How does it work?",
    text: "Our landing page template works on all devices, so you only have to set it up once and get beautiful results.",
  },
];

export const pricing = [
  {
    id: "0",
    plan: "Free",
    amount: 0,
    featured: false,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: "1",
    plan: "basic",
    amount: 23,
    featured: true,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
  {
    id: "2",
    plan: "Premium",
    amount: 59,
    featured: false,
    features: [
      "7,000,000+ Events",
      "4 Custom Domains",
      "Dedicated Support Agent",
      "12 Months Data History",
      "1 Dedicated SSL",
    ],
  },
];

export const social = [
  {
    id: "0",
    ico: icoFacebook,
    alt: "Facebook",
    link: "#/",
  },
  {
    id: "1",
    ico: icoX,
    alt: "X",
    link: "#/",
  },
  {
    id: "2",
    ico: icoInstagram,
    alt: "Instagram",
    link: "#/",
  },
  {
    id: "3",
    ico: icoLinkedin,
    alt: "Linkedin",
    link: "#/",
  },
];
