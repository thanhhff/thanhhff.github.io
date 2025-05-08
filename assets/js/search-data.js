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
  },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "dropdown-international",
              title: "international",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-domestic",
              title: "domestic",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-all",
              title: "all",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-services",
          title: "services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-presenting-at-ieee-cvf-wacv-2025",
      
        title: "Presenting at IEEE/CVF WACV 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/WACV/";
        
      },
    },{id: "post-presenting-at-acm-multimedia-asia-2024",
      
        title: "Presenting at ACM Multimedia Asia 2024",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/MMAsia/";
        
      },
    },{id: "post-master-s-graduation-from-nagoya-university",
      
        title: "Master’s Graduation from Nagoya University 🎓",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Meidai/";
        
      },
    },{id: "post-presenting-at-ieee-fg-2024",
      
        title: "Presenting at IEEE FG 2024",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/FG/";
        
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
          section: "News",},{id: "news-renewed-certification-in-higher-education-teaching-valid-for-1-year-from-the-tokai-national-higher-education-and-research-system-japan",
          title: 'Renewed certification in higher education teaching (valid for 1 year) from the Tokai...',
          description: "",
          section: "News",},{id: "news-our-zero-pima-paper-was-accepted-in-the-journal-ieee-access",
          title: 'Our Zero-PIMA paper was accepted in the journal IEEE Access.',
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
          section: "News",},{id: "news-our-grand-challenge-proposal-intentvc-has-been-accepted-at-acm-mm2025-ireland",
          title: 'Our Grand Challenge proposal “IntentVC” has been accepted at ACM MM2025, Ireland.',
          description: "",
          section: "News",},{id: "news-i-presented-our-cpdm-paper-at-ieee-cvf-wacv2025-united-states",
          title: 'I presented our CPDM paper at IEEE/CVF WACV2025, United States.',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-on-multi-modal-multi-view-action-recognition-at-shiga-university-japan",
          title: 'I presented our paper on “Multi-modal Multi-view Action Recognition” at Shiga University, Japan....',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-academia-sinica-for-a-summer-school-on-biomedical-artificial-intelligence-taiwan",
          title: 'I was invited to Academia Sinica for a Summer School on Biomedical Artificial...',
          description: "",
          section: "News",},{id: "news-i-received-a-certificate-for-supporting-toyota-industries-corporation-from-the-mda-center-japan",
          title: 'I received a certificate for supporting Toyota Industries Corporation from the MDA Center,...',
          description: "",
          section: "News",},{id: "news-renewed-certification-in-higher-education-teaching-valid-for-1-year-from-the-tokai-national-higher-education-and-research-system-japan",
          title: 'Renewed certification in higher education teaching (valid for 1 year) from the Tokai...',
          description: "",
          section: "News",},{id: "news-i-was-selected-for-the-doctoral-consortium-at-the-ieee-biometrics-council-united-states",
          title: 'I was selected for the Doctoral Consortium at the IEEE Biometrics Council, United...',
          description: "",
          section: "News",},{id: "news-i-received-an-invitation-from-tsinghua-university-for-the-2025-make-it-shenzhen-program-china",
          title: 'I received an invitation from Tsinghua University for the 2025 MAKE IT SHENZHEN...',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-participate-in-the-mediterranean-machine-learning-program-croatia",
          title: 'I was selected to participate in the Mediterranean Machine Learning program, Croatia.',
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
