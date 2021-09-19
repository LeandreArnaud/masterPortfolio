/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Léandre ARNAUD",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Léandre Arnaud Portfolio",
    type: "website",
    url: "http://LeandreArnaud.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Léandre ARNAUD",
  logo_name: "Leandre",
  //nickname: "Léandre",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  //resumeLink: "",
  portfolio_repository: "https://github.com/LeandreArnaud/masterPortfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/LeandreArnaud",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/leandre-arnaud/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/channel/UC_amoXmmxSY9KusoDczDTXQ",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:pro.leandre.arnaud@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
  //   backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision, Clustering, Regression, Classification and Scoring projects",
        "⚡ Accustomed to present powerful presentations to interpret complex modeling and statistical report to guide decision-makers' choices"
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos:tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "cib:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#f38839"
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            backgroundColor: "transparent",
            color: "#0091f2"
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "carbon:sql",
          style: {
            backgroundColor: "transparent",
            color:"#f7a326"
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing cross-platform mobile applications using React Native",
        "⚡ Building resposive website front end using React",
        "⚡ Creating application backend in Flask and Node.js",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "flat-color-icons:android-os",
          style: {
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "ant-design:apple-filled",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
      ],
    },
    {
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Google certified professional cloud data engineer on Google Cloud Platform ",
        "⚡ Hosting and maintaining websites and API on app engine instances along with integration of databases",
        "⚡ Using Firebase services like authentification and real time document-oriented databases for mobile development",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "logos:google-cloud",
          style: {
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    
  ],
};

const degrees = {
  degrees: [
    {
      title: "CentraleSupélec - Paris Saclay",
      subtitle: "French 'Diplôme d'ingenieur' in Electrical and Computer Sciences",
      logo_path: "centrale-supelec.png",
      backgroundColor: "#FFFFFF",
      alt_name: "CentraleSupélec",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ I also studied electical engineering subjects like analogic and numerical circuit design, signal processing, electrical power grid, electrical motors commands etc.",
        "⚡ More generally I studied mathematics and physics like probabilities, statistics, quantum physics, semiconductor physics",
        "⚡ During my last year, I deep dived in microelectronics and nanoSciences fields",
      ],
      website_link: "https://centralesupelec.fr/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Professional Data Engineer",
      subtitle: "Thomas Kurian",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.credential.net/3981454a-9c09-452c-89ac-1b9a4f3707de",
      alt_name: "GCP",
      color_code: "#222288",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have worked with several evolving startups and well established companies mostly as a Data Scientist.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Freelance Data Scientist and Fullstack Developer",
          company: "Me",
          company_url: "https://www.malt.fr/profile/leandrearnaud",
          logo_path: "malt.png",
          duration: "August 2021 - Today",
          location: "🇷🇪 La Réunion and 🇫🇷 Paris",
          description:
            "",
          color: "#db243e",
        },
        {
          title: "Data Scientist Mentor",
          company: "Openclassrooms",
          company_url: "https://openclassrooms.com",
          logo_path: "Logo_OpenClassrooms.png",
          duration: "August 2021 - Today",
          location: "🇷🇪 La Réunion and 🇫🇷 Paris",
          description:
            "I am coaching Data Scientist students and helping them on: data cleaning, feature engineering, scoring, clustering, regression, classificaiton and model deployment in cloud services.",
          color: "#db243e",
        },
        {
          title: "Data Scientist",
          company: "Nova Consulting",
          company_url: "https://www.nova-consulting.eu",
          logo_path: "logo-nova-consulting.jpg",
          duration: "April 2020 - July 2021",
          location: "🇫🇷 Paris",
          description:
            "I created a Marketing Mix Modeling (MMM), I made a marketing-channel scoring, I also created a GeoMarketing tool to automately benchmark museums in a city, I made client clusterings, I gave advisory about cloud provision to financial institutions.",
          color: "#db243e",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Research Aid - Data Scientist",
          company: "Argonne National Laboratory",
          company_url: "https://www.anl.gov",
          logo_path: "logo-Argonne.webp",
          duration: "February 2019 - August 2019",
          location: "🇺🇸 Chicago",
          description:
            "I analysed and transformed on-road Data to build a high fidelity human driver model. It included: object detection in a vidéo stream with neural networks, time series filtering and interpolation, visualisation dashboard creation for time series, video stream, GPS and radar signal.",
          color: "#00a7ea",
        },
        {
          title: "Data Scientist",
          company: "Polynom",
          company_url: "https://polynom.io",
          logo_path: "logo-polynom.webp",
          duration: "July 2018 - January 2019",
          location: "🇫🇷 Paris",
          description:
            "I managed several pricing algorithms for major firms and I developed a ML model to predict the impact of packaging changes.",
          color: "#00bc85",
        },
      ],
    },
    {
      title: "Volunteership",
      experiences: [
        {
          title: "Volonrary Firefighter",
          company: "SDIS 78",
          company_url: "http://www.sdis78.fr/",
          logo_path: "logo-sdis78.jpg",
          duration: "August 2013 - Today",
          location: "🇫🇷 Yvelines",
          description:
            "I started my training when I was 13 in 2009. Since 2013 (17) I intervene on fire, road rescue and first aid missions.",
          color: "#00063b",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "leandre-arnaud.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, React Native, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
