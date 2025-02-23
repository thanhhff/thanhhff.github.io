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
          section: "News",},{id: "news-i-received-qualified-teaching-assistant-certification-valid-for-1-year-for-higher-education-teaching-from-the-qta-gsi-training-center-tokai-national-higher-education-and-research-system",
          title: 'I received Qualified Teaching Assistant certification (valid for 1 year) for higher education...',
          description: "",
          section: "News",},{id: "news-my-paper-zero-pima-was-accepted-in-the-journal-ieee-access",
          title: 'My paper Zero-PIMA was accepted in the journal IEEE Access.',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-on-temporal-action-detection-at-the-university-of-tokyo-japan",
          title: 'I presented our paper on “Temporal Action Detection” at the University of Tokyo,...',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-on-open-vocabulary-action-detection-at-ieee-fg2024-turkey",
          title: 'I presented our paper on “Open-vocabulary Action Detection” at IEEE FG2024, Turkey.',
          description: "",
          section: "News",},{id: "news-on-a-business-trip-to-riken-grp-until-sep-20-japan",
          title: 'On a business trip to RIKEN GRP until Sep 20, Japan.',
          description: "",
          section: "News",},{id: "news-i-graduated-with-a-master-39-s-degree-as-the-honorary-valedictorian-of-the-graduate-school-of-informatics-nagoya-university-japan",
          title: 'I graduated with a Master&amp;#39;s degree as the Honorary Valedictorian of the Graduate...',
          description: "",
          section: "News",},{id: "news-i-am-starting-my-phd-at-nagoya-university-japan",
          title: 'I am starting my PhD at Nagoya University, Japan.',
          description: "",
          section: "News",},{id: "news-i-presented-our-multiasl-paper-at-acm-mmasia2024-new-zealand",
          title: 'I presented our MultiASL paper at ACM MMAsia2024, New Zealand.',
          description: "",
          section: "News",},{id: "news-on-a-business-trip-to-riken-grp-until-feb-21-japan",
          title: 'On a business trip to RIKEN GRP until Feb 21, Japan.',
          description: "",
          section: "News",},{id: "news-i-presented-our-cpdm-paper-at-ieee-cvf-wacv2025-united-states",
          title: 'I presented our CPDM paper at IEEE/CVF WACV2025, United States.',
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
