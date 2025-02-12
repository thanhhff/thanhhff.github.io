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
          section: "News",},{id: "news-my-paper-zero-pima-was-accepted-in-ieee-access",
          title: 'My paper Zero-PIMA was accepted in IEEE Access.',
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
