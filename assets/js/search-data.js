// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-my-new-website-has-been-released-the-news-will-be-updated-from-2024-onward",
          title: 'My new website has been released. The news will be updated from 2024...',
          description: "",
          section: "News",},{id: "news-i-received-acceptance-for-the-mext-scholarship-for-my-phd-at-nagoya-university-japan",
          title: 'I received acceptance for the MEXT Scholarship for my PhD at Nagoya University,...',
          description: "",
          section: "News",},{id: "news-on-a-business-trip-to-nc-state-university-united-states",
          title: 'On a business trip to NC State University, United States.',
          description: "",
          section: "News",},{id: "news-i-received-a-certificate-for-completing-data-at-work-data-science-amp-amp-ai-for-industry-from-nc-state-university-united-states",
          title: 'I received a certificate for completing “Data at Work: Data Science &amp;amp;amp; AI...',
          description: "",
          section: "News",},{id: "news-i-received-qualified-teaching-assistant-certification-for-higher-education-teaching-from-the-qta-gsi-training-center-tokai-national-higher-education-and-research-system-valid-for-1-year",
          title: 'I received Qualified Teaching Assistant certification for higher education teaching from the QTA/GSI...',
          description: "",
          section: "News",},{id: "news-my-paper-zero-pima-was-accepted-in-the-journal-ieee-access",
          title: 'My paper Zero-PIMA was accepted in the journal IEEE Access.',
          description: "",
          section: "News",},{id: "news-my-paper-on-temporal-action-detection-was-presented-at-the-university-of-tokyo-japan",
          title: 'My paper on “Temporal Action Detection” was presented at The University of Tokyo,...',
          description: "",
          section: "News",},{id: "news-my-paper-on-open-vocabulary-action-detection-was-presented-at-ieee-fg2024-turkey",
          title: 'My paper on “Open-vocabulary Action Detection” was presented at IEEE FG2024, Turkey.',
          description: "",
          section: "News",},{id: "news-on-a-business-trip-to-riken-kyoto-until-sep-20",
          title: 'On a business trip to RIKEN (Kyoto) until Sep 20.',
          description: "",
          section: "News",},{id: "news-i-graduated-with-a-master-s-degree-as-the-honorary-valedictorian-of-the-graduate-school-of-informatics-nagoya-university-japan",
          title: 'I graduated with a Master’s degree as the Honorary Valedictorian of the Graduate...',
          description: "",
          section: "News",},{id: "news-i-am-starting-my-phd-at-nagoya-university-japan",
          title: 'I am starting my PhD at Nagoya University, Japan.',
          description: "",
          section: "News",},{id: "news-my-paper-multiasl-was-presented-at-acm-mmasia2024-new-zealand",
          title: 'My paper MultiASL was presented at ACM MMAsia2024, New Zealand.',
          description: "",
          section: "News",},{id: "news-on-a-business-trip-to-riken-kyoto-until-feb-21",
          title: 'On a business trip to RIKEN (Kyoto) until Feb 21.',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/thanhhff", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8976-2922", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=QSV452QAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
