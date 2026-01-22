export const projects = [

]

export const hard_skills = [
  "<b>Deep Learning</b> with PyTorch and TensorFlow",
  "<b>Computer Vision</b> with OpenCV and YOLO",
  "<b>Robotics Simulation</b> with MuJoCo, RoboSuite, and RoboMimic",
  "<b>Vehicle Simulation</b> with CARLA, OPV2V, and DAIR-V2X",
  "<b>Data Analysis</b> with Pandas, NumPy, and SciPy",
  "<b>CNNs</b>, <b>RNNs</b>, and <b>Transformers</b>",
];

export const soft_skills = [
  "<b>Literature Review</b> and Research Synthesis",
  "<b>Technical Writing</b> and Documentation",
  "<b>Publishing Research</b> Papers and Posters",
  "<b>Public Speaking</b> and Presentations",
  "<b>Project Management</b> and Organization",
  "<b>Academic Leadership</b> and Mentoring",
]

export const publications = [
  {
    title: "Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception",
    authors: ["Everett Richards", "Syed Rahman", "Yeyin Xu", "Sabur Baidya"],
    venue: "IEEE EDGE 2024",
    venueType: "Conference",
    year: 2024,
    abstract: "This paper presents ECOD (Edge-Enabled Collaborative Object Detection), a novel framework for enhancing autonomous vehicle perception through multi-vehicle collaboration via edge computing. We developed two algorithms: Perceptive Aggregation and Collaborative Estimation (PACE) and Variable Object Tally and Evaluation (VOTE). PACE aggregates object detection results from multiple vehicles to improve accuracy, while VOTE provides a confidence-based ranking system. Experimental results demonstrate significant improvements in object detection accuracy compared to single-vehicle perception, particularly in scenarios with occlusion and varying environmental conditions.",
    thumbnail: "./research_videos/reu_video.gif",
    pdfLink: "./papers/Richards_ECOD.pdf",
    officialLink: "https://ieeexplore.ieee.org/document/11120480",
    posterLink: "./posters/UDEL.jpg",
    citations: {
      bibtex: `@inproceedings{richards2024ecod,
  title={Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception},
  author={Richards, Everett and Rahman, Syed and Xu, Yeyin and Baidya, Sabur},
  booktitle={2024 IEEE 8th International Conference on Edge Computing and Scalable Cloud (EDGE)},
  pages={1--8},
  year={2024},
  organization={IEEE}
}`,
      apa: "Richards, E., Rahman, S., Xu, Y., & Baidya, S. (2024). Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception. In 2024 IEEE 8th International Conference on Edge Computing and Scalable Cloud (EDGE) (pp. 1-8). IEEE.",
      mla: 'Richards, Everett, et al. "Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception." 2024 IEEE 8th International Conference on Edge Computing and Scalable Cloud (EDGE). IEEE, 2024.',
      chicago: "Richards, Everett, Syed Rahman, Yeyin Xu, and Sabur Baidya. \"Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception.\" In 2024 IEEE 8th International Conference on Edge Computing and Scalable Cloud (EDGE), pp. 1-8. IEEE, 2024."
    }
  },
  {
    title: "From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training",
    authors: ["Everett Richards", "Zixuan Wang", "Xiaowei Yuan", "Xiaonan Huang"],
    venue: "MIT URTC 2025",
    venueType: "Conference",
    year: 2025,
    abstract: "This paper addresses the challenge of sensor degradation in collaborative autonomous vehicle perception systems. We propose a novel noise-aware training curriculum that enhances the robustness of multimodal collaborative object detection algorithms. By systematically injecting Gaussian noise into 3D LiDAR point clouds during training, we simulate real-world conditions such as low-resolution sensors and adverse weather. Our approach integrates LiDAR-camera sensor fusion with collaborative perception frameworks. Experimental results demonstrate up to a 40% improvement in model robustness under challenging scenarios, significantly enhancing the reliability of autonomous vehicle perception systems in real-world deployment.",
    thumbnail: "./research_videos/carla.gif",
    pdfLink: "./papers/Richards_BM2CP.pdf",
    officialLink: null,
    posterLink: "./posters/WPI.jpg",
    citations: {
      bibtex: `@inproceedings{richards2025chaos,
  title={From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training},
  author={Richards, Everett and Wang, Zixuan and Yuan, Xiaowei and Huang, Xiaonan},
  booktitle={MIT Undergraduate Research Technology Conference 2025},
  year={2025}
}`,
      apa: "Richards, E., Wang, Z., Yuan, X., & Huang, X. (2025). From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training. In MIT Undergraduate Research Technology Conference 2025.",
      mla: 'Richards, Everett, et al. "From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training." MIT Undergraduate Research Technology Conference 2025. 2025.',
      chicago: "Richards, Everett, Zixuan Wang, Xiaowei Yuan, and Xiaonan Huang. \"From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training.\" In MIT Undergraduate Research Technology Conference 2025, 2025."
    }
  },
  {
    title: "Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation",
    authors: ["Everett Richards", "Yuke Zhu"],
    venue: "MIT URTC 2025",
    venueType: "Conference",
    year: 2025,
    abstract: "This work investigates the impact of demonstration quality on robotic imitation learning performance. We systematically inject Gaussian noise into expert demonstrations and analyze the resulting performance degradation. Through extensive experiments using MuJoCo, RoboSuite, RoboMimic, and MimicGen frameworks, we discover that performance degradation follows a predictable sigmoid curve. We optimize this relationship using statistical methods including Pandas, NumPy, MatPlotLib, and SciPy, achieving R² values between 0.91 and 0.99. This mathematical model provides insights into the robustness requirements for imitation learning systems and can inform data collection strategies for real-world robotic applications.",
    thumbnail: "./research_videos/mimicgen_coffee.gif",
    pdfLink: "./papers/Richards_MimicGen.pdf",
    officialLink: null,
    posterLink: null,
    citations: {
      bibtex: `@inproceedings{richards2025modeling,
  title={Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation},
  author={Richards, Everett and Zhu, Yuke},
  booktitle={MIT Undergraduate Research Technology Conference 2025},
  year={2025}
}`,
      apa: "Richards, E., & Zhu, Y. (2025). Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation. In MIT Undergraduate Research Technology Conference 2025.",
      mla: 'Richards, Everett, and Yuke Zhu. "Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation." MIT Undergraduate Research Technology Conference 2025. 2025.',
      chicago: "Richards, Everett, and Yuke Zhu. \"Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation.\" In MIT Undergraduate Research Technology Conference 2025, 2025."
    }
  }
];

export const researches = [
  {
    title: "From Chaos to Clarity: Strengthening 3D Collaborative Autonomous Vehicle Perception with Noise-Aware Training",
    lab: "NSF REU in Applied Artificial Intelligence for Advanced Applications",
    university: "Worcester Polytechnic Institute (WPI)",
    when: "Fall 2024 -- Spring 2025",
    description:
      "Developed and analyzed a multimodal collaborative object detection algorithm integrating LiDAR-camera sensor fusion to enhance 3D perception in autonomous vehicles. Conducted robustness evaluations through targeted injection of Gaussian noise into 3D LiDAR point clouds, simulating sensor degradation due to low-resolution sensors and adverse weather conditions. Proposed and empirically validated a novel noise-aware training curriculum, achieving up to a 40% improvement in model robustness under challenging real-world scenarios. Resulting paper accepted at MIT URTC 2025.",
    image: "./research_videos/carla.gif",
    links: {
      "Paper": "./papers/Richards_BM2CP.pdf",
      "Poster": "./posters/WPI.jpg"
    },
    //main_link: "./papers/Richards_BM2CP.pdf",
  },
  {
    title: "Modeling Imitation Learning Robustness to Noisy Demonstrations via Sigmoid Degradation",
    lab: "NSF REU in Interdisciplinary Artificial Intelligence",
    university: "University of California San Diego (UCSD)",
    when: "Fall 2024 -- Spring 2025",
    description:
      "Conducted experiments on the impact of Gaussian noise injection in robotic imitation learning models. Optimized a sigmoid approximation curve relating noise amplitude to performance, yielding statistically significant R^2 values between 0.91 and 0.99. Used Pandas, NumPy, MatPlotLib, and SciPy for data analysis and optimization. Used MuJoCo, RoboSuite, RoboMimic, and MimicGen for robotic simulation and imitation learning. Resulting paper accepted at MIT URTC 2025.",
    image: "./research_videos/mimicgen_coffee.gif",
    links: {
      "Paper": "./papers/Richards_MimicGen.pdf",
    },
    //main_link: "https://mimicgen.github.io/",
  },
  {
    title: "Edge-Enabled Collaborative Object Detection for Real-Time Multi-Vehicle Perception",
    lab: "NSF REU in Sustainable Resilient Transportation Systems",
    university: "University of Delaware (UD)",
    when: "Summer 2024",
    description:
      "At the NSF REU, I developed and tested an interdisciplinary framework to improve autonomous vehicle object labeling accuracy by combining multiple vehicles' perspectives via an edge server. I accomplished this by developing two algorithms, called Perceptive Aggregation and Collaborative Estimation (PACE) and Variable Object Tally and Evaluation (VOTE). I presented a poster at the University of Delaware Undergraduate Research Symposium in August 2024, and presented my work at the IEEE EDGE conference in Helsinki, Finland in July 2025.",
    image: "./research_videos/reu_video.gif",
    links: {
      "IEEE Xplore": "https://ieeexplore.ieee.org/document/11120480",
      "Paper": "./papers/Richards_ECOD.pdf",
      "Poster": "./posters/UDEL.jpg",
      "Code": "https://github.com/EverettRichards/Edge-CAV",
    },
    //main_link: "./papers/Richards_ECOD.pdf",
  },
  {
    title: "Enhancing Construction Worker Safety Through Sensor Fusion and Machine Learning",
    lab: "Data-informed Construction Engineering (DiCE) Laboratory",
    university: "San Diego State University (SDSU)",
    when: "Spring 2024",
    description:
      "At the DiCE Lab, I designed a data analytics program that fuses IMU sensors and camera input to classify and predict the movements of construction workers. I also developed a 3D simulation to visualize IMU data in real-time, allowing for the data to be validated.",
    image: "./research_videos/dice_video.gif",
    links: {
      "Lab": "https://dice.sdsu.edu/",
      "Code": "https://github.com/EverettRichards/DiCE",
      "Demo": "https://www.youtube.com/watch?v=3qlrGciOR84",
    },
    //main_link: "https://github.com/EverettRichards/DiCE",
  },
];

export const contacts = [
  {
    title: "Email",
    value: "ehrichards9@gmail.com",
    url: "mailto:ehrichards9@gmail.com",
    icon: "./icons/gmail.svg",
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/everett-richards",
    url: "https://www.linkedin.com/in/everett-richards",
    icon: "./icons/linkedin.svg",
  },
  {
    title: "GitHub",
    value: "github.com/EverettRichards",
    url: "https://github.com/EverettRichards",
    icon: "./icons/github.svg",
  },
  {
    title: "Instagram",
    value: "@the_everett_richards",
    url: "https://www.instagram.com/the_everett_richards/",
    icon: "./icons/instagram.svg",
  },
  {
    title: "Google Scholar",
    value: "Google Scholar",
    url: "https://scholar.google.com/citations?user=iowXMSwAAAAJ&hl=en",
    icon: "./icons/google-scholar.svg",
  },
  {
    title: "ORCID",
    value: "ORCID",
    url: "https://orcid.org/0009-0009-9743-5636",
    icon: "./icons/orcid.svg",
  }
]

export const slides = [
  {"photo": "./slideshow/acm_meeting.jpg",
    "caption": "President of the ACM Chapter at SDSU",},
  {"photo": "./slideshow/Teddie2.jpg",
    "caption": "Exploring the nation's capital with a family member's dog, Teddie.",},
  {"photo": "./slideshow/ud_symposium.jpg",
    "caption": "Presenting my research at the University of Delaware Undergraduate Research Symposium in August 2024.",},
  {"photo": "./slideshow/kayaking_providence.jpg",
    "caption": "Kayaking on the Providence River in Rhode Island.",},
  {"photo": "./slideshow/acm_lecture.jpg",
    "caption": "Presenting a workshop on machine learning at the SDSU ACM Chapter.",},
    {"photo": "./slideshow/tutoring.jpg",
    "caption": "Tutoring Discrete Mathematics at the Math & Science Learning Center (MSLC) at San Diego State University.",},
  {"photo": "./slideshow/EstesPark.jpg",
    "caption": "Adventuring at Estes Park in the Colorado Rocky Mountains.",},
  {"photo": "./slideshow/NICU.jpg",
    "caption": "Celebrating my receipt of the North Island Credit Union scholarship.",},
  // {"photo": "./slideshow/WyomingCapitol.jpg",
  //   "caption": "Touring the Wyoming State Capitol in Cheyenne.",},
  {"photo": "./slideshow/AtWorkREU.jpg",
    "caption": "Working on my research project for the NSF REU at the University of Delaware.",},
];
