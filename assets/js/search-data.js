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
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-services",
          title: "Services",
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
        },{id: "nav-",
          title: "✈",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/flights/";
          },
        },{id: "post-presenting-at-ieee-fg-2026",
      
        title: "🇯🇵 Presenting at IEEE FG 2026",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/FG/";
        
      },
    },{id: "post-attending-the-freiburg-rising-stars-conference",
      
        title: "🇩🇪 Attending the Freiburg Rising Stars Conference",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/Freiburg/";
        
      },
    },{id: "post-presenting-at-ieee-cvf-wacv-2026",
      
        title: "🇺🇸 Presenting at IEEE/CVF WACV 2026",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/WACV/";
        
      },
    },{id: "post-attending-acm-asian-school-on-hpc-and-ai-2026",
      
        title: "🇯🇵 Attending ACM Asian School on HPC and AI 2026",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/ACM/";
        
      },
    },{id: "post-attending-sca-hpcasia-2026",
      
        title: "🇯🇵 Attending SCA/HPCAsia 2026",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/SCA/";
        
      },
    },{id: "post-best-oral-award-at-acm-multimedia-asia-2025",
      
        title: "🇲🇾 Best Oral Award at ACM Multimedia Asia 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/MMAsia/";
        
      },
    },{id: "post-international-summer-school-2025-at-academia-sinica",
      
        title: "🇹🇼 International Summer School 2025 at Academia Sinica",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/AcademiaSinica/";
        
      },
    },{id: "post-best-student-paper-award-at-ieee-fg-2025",
      
        title: "🇺🇸 Best Student Paper Award at IEEE FG 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/FG/";
        
      },
    },{id: "post-presenting-at-ieee-cvf-wacv-2025",
      
        title: "🇺🇸 Presenting at IEEE/CVF WACV 2025",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/WACV/";
        
      },
    },{id: "post-presenting-at-acm-multimedia-asia-2024",
      
        title: "🇳🇿 Presenting at ACM Multimedia Asia 2024",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/MMAsia/";
        
      },
    },{id: "post-master-s-graduation-from-nagoya-university",
      
        title: "🎓 Master’s Graduation from Nagoya University",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Meidai/";
        
      },
    },{id: "post-presenting-at-ieee-fg-2024",
      
        title: "🇹🇷 Presenting at IEEE FG 2024",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/FG/";
        
      },
    },{id: "post-data-science-training-at-north-carolina-state-university",
      
        title: "🇺🇸 Data Science Training at North Carolina State University",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/NCState/";
        
      },
    },{id: "news-my-new-website-has-been-released-the-news-will-be-updated-from-2024-onward",
          title: 'My new website has been released. The news will be updated from 2024...',
          description: "",
          section: "News",},{id: "news-i-received-acceptance-for-the-mext-scholarship-for-my-phd-at-nagoya-university-japan",
          title: 'I received acceptance for the MEXT Scholarship for my PhD at Nagoya University,...',
          description: "",
          section: "News",},{id: "news-i-received-a-certificate-for-completing-data-at-work-data-science-amp-amp-ai-for-industry-from-nc-state-university-united-states",
          title: 'I received a certificate for completing “Data at Work: Data Science &amp;amp;amp; AI...',
          description: "",
          section: "News",},{id: "news-our-paper-zero-pima-was-accepted-in-the-ieee-access-journal",
          title: 'Our paper Zero-PIMA was accepted in the IEEE Access journal.',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-on-temporal-action-detection-at-the-university-of-tokyo-japan",
          title: 'I presented our paper on “Temporal Action Detection” at the University of Tokyo,...',
          description: "",
          section: "News",},{id: "news-i-presented-our-paper-on-open-vocabulary-action-detection-at-ieee-fg2024-turkey",
          title: 'I presented our paper on “Open-vocabulary Action Detection” at IEEE FG2024, Turkey.',
          description: "",
          section: "News",},{id: "news-i-graduated-with-a-master-s-degree-as-the-honorary-valedictorian-of-the-graduate-school-of-informatics-nagoya-university-japan",
          title: 'I graduated with a Master’s degree as the Honorary Valedictorian of the Graduate...',
          description: "",
          section: "News",},{id: "news-i-am-starting-my-phd-at-nagoya-university-japan",
          title: 'I am starting my PhD at Nagoya University, Japan.',
          description: "",
          section: "News",},{id: "news-i-presented-our-multiasl-paper-at-acm-mmasia2024-new-zealand",
          title: 'I presented our MultiASL paper at ACM MMAsia2024, New Zealand.',
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
          section: "News",},{id: "news-i-was-selected-for-the-doctoral-consortium-at-the-ieee-biometrics-council-s-conference-united-states",
          title: 'I was selected for the Doctoral Consortium at the IEEE Biometrics Council’s conference,...',
          description: "",
          section: "News",},{id: "news-i-received-an-invitation-from-tsinghua-university-for-the-2025-make-it-shenzhen-program-china",
          title: 'I received an invitation from Tsinghua University for the 2025 MAKE IT SHENZHEN...',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-participate-in-the-mediterranean-machine-learning-program-croatia",
          title: 'I was selected to participate in the Mediterranean Machine Learning program, Croatia.',
          description: "",
          section: "News",},{id: "news-i-presented-our-multisensor-home-paper-at-ieee-fg2025-united-states",
          title: 'I presented our MultiSensor-Home paper at IEEE FG2025, United States.',
          description: "",
          section: "News",},{id: "news-our-paper-multisensor-home-won-the-best-student-paper-award-at-ieee-fg2025-united-states",
          title: 'Our paper “MultiSensor-Home” won the Best Student Paper Award at IEEE FG2025, United...',
          description: "",
          section: "News",},{id: "news-our-paper-on-mmasl-was-accepted-by-the-acm-tomm-if-6-0-journal",
          title: 'Our paper on MMASL was accepted by the ACM TOMM (IF: 6.0) journal....',
          description: "",
          section: "News",},{id: "news-on-a-business-trip-to-academia-sinica-until-jul-16-taiwan",
          title: 'On a business trip to Academia Sinica until Jul 16, Taiwan.',
          description: "",
          section: "News",},{id: "news-i-received-a-certificate-of-achievement-from-academia-sinica-taiwan",
          title: 'I received a     Certificate of Achievement  from Academia Sinica, Taiwan.',
          description: "",
          section: "News",},{id: "news-i-received-a-letter-of-appreciation-from-riken-in-recognition-of-outstanding-research-achievements",
          title: 'I received a Letter of Appreciation from RIKEN in recognition of outstanding research...',
          description: "",
          section: "News",},{id: "news-we-presented-2-papers-is3-038-is3-148-at-miru2025-japan",
          title: 'We presented 2 papers (IS3-038, IS3-148) at MIRU2025, Japan.',
          description: "",
          section: "News",},{id: "news-i-was-awarded-a-research-grant-from-thers-national-university-corporation-japan",
          title: 'I was awarded a research grant from THERS (National University Corporation), Japan.',
          description: "",
          section: "News",},{id: "news-i-was-awarded-a-research-grant-from-murata-foundation-est-1970-japan",
          title: 'I was awarded a research grant from Murata Foundation (est. 1970), Japan.',
          description: "",
          section: "News",},{id: "news-our-paper-vimed-pet-has-been-accepted-to-neurips-united-states",
          title: 'Our paper ViMed-PET has been accepted to NeurIPS, United States.',
          description: "",
          section: "News",},{id: "news-our-paper-q-adapter-has-been-accepted-to-acm-mmasia-malaysia",
          title: 'Our paper Q-Adapter has been accepted to ACM MMAsia, Malaysia.',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-present-my-phd-research-at-the-doctoral-symposium-of-acm-mmasia-malaysia",
          title: 'I was selected to present my PhD research at the Doctoral Symposium of...',
          description: "",
          section: "News",},{id: "news-i-was-selected-as-a-rising-star-for-the-freiburg-rising-stars-academy-universität-freiburg-germany",
          title: 'I was selected as a Rising Star for the Freiburg Rising Stars Academy,...',
          description: "",
          section: "News",},{id: "news-our-paper-hotad-has-been-accepted-to-acm-tomm-if-6-0-journal",
          title: 'Our paper HOTAD has been accepted to ACM TOMM (IF: 6.0) journal.',
          description: "",
          section: "News",},{id: "news-2-papers-vicokd-and-padm-have-been-accepted-to-ieee-cvf-wacv2026-united-states",
          title: '2 papers — ViCoKD and PADM — have been accepted to IEEE/CVF WACV2026,...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-completed-my-phd-pre-defense-onward-to-the-final-defense",
          title: 'I have successfully completed my PhD pre-defense. Onward to the final defense!',
          description: "",
          section: "News",},{id: "news-our-paper-q-adapter-won-the-best-oral-award-at-acm-mmasia-malaysia",
          title: 'Our paper Q-Adapter won the Best Oral Award at ACM MMAsia, Malaysia.',
          description: "",
          section: "News",},{id: "news-i-was-invited-by-riken-r-css-to-attend-the-sca-hpc-asia-2026-and-the-acm-asia-school-on-hpc-and-ai-japan",
          title: 'I was invited by RIKEN R-CSS to attend the SCA/HPC Asia 2026 and...',
          description: "",
          section: "News",},{id: "news-i-have-received-a-certificate-of-completion-from-the-acm-asian-school-on-hpc-and-ai-japan",
          title: 'I have received a Certificate of Completion from the ACM Asian School on...',
          description: "",
          section: "News",},{id: "news-my-interview-in-a-special-feature-the-reality-of-the-doctoral-program-in-japanese-by-nagoya-university-is-now-published-on-tamatebako-玉手箱",
          title: 'My interview in a special feature “The Reality of the Doctoral Program” (in...',
          description: "",
          section: "News",},{id: "news-universität-freiburg-international-researchers-are-networking-at-the-freiburg-rising-stars-academy",
          title: '🇩🇪 Universität Freiburg: “International researchers are networking at the Freiburg Rising Stars Academy”...',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-present-my-phd-research-at-the-doctoral-consortium-of-ieee-fg2026-kyoto",
          title: 'I was selected to present my PhD research at the Doctoral Consortium of...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-multisensor-home-dataset-was-accepted-in-pattern-recognition-if-7-6",
          title: 'Our paper on the MultiSensor-Home dataset was accepted in Pattern Recognition (IF: 7.6)....',
          description: "",
          section: "News",},{id: "news-our-paper-prims-physics-guided-representation-for-fluid-identification-in-multimodal-sensing-has-been-accepted-to-ecml-pkdd-2026-naples",
          title: 'Our paper, “PRIMS: Physics-guided Representation for Fluid Identification in Multimodal Sensing,” has been...',
          description: "",
          section: "News",},{id: "news-our-paper-trara-trajectory-level-recognition-aggregation-for-video-text-spotting-in-urban-surveillance-has-been-accepted-to-ieee-avss-2026-lecce",
          title: 'Our paper, “TraRA: Trajectory-level Recognition Aggregation for Video Text Spotting in Urban Surveillance,”...',
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
