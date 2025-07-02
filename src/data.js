export const projects = [

]

export const skills = [
  "Python Machine Learning & Data Analytics with TensorFlow and OpenCV",
  "Developing and deploying Ethereum smart contracts with Solidity",
  "OOP with Java, C++, and JavaScript/Node.js",
  "Computer networking and edge computing",
  "Research practices and presentation",
  "Independent and group project management",
  "Group leadership experience",
  "Tutoring and peer mentoring",
  "Written and oral communication",
];

export const researches = [
  {
    title: "Modality-Aware Collaborative Perception for Autonomous Vehicles",
    lab: "NSF REU in Applied Artificial Intelligence for Advanced Applications",
    university: "Worcester Polytechnic Institute (WPI)",
    when: "Fall 2024 -- Spring 2025",
    description:
      "Currently working on a project that aims to improve collaborative perception in autonomous vehicles by leveraging multiple modalities of sensor data. In particular, my model introduces robust modality-aware collaborative perception, which uses a novel attention mechanism to fuse data from multiple vehicles, regardless of which sensors they are equipped with. This approach enhances object detection accuracy and robustness in dynamic environments.",
    image: "./research_videos/carla.gif",
    links: {
      "OPV2V": "https://mobility-lab.seas.ucla.edu/opv2v/",
      "DAIR-V2X": "https://github.com/AIR-THU/DAIR-V2X?tab=readme-ov-file",
    },
    // main_link: "https://mimicgen.github.io/",
  },
  {
    title: "Evaluating Performance of the Nvidia MimicGen Imitation Learning Algorithm when Subjected to Gaussian Noise",
    lab: "NSF REU in Interdisciplinary Artificial Intelligence",
    university: "University of California San Diego (UCSD)",
    when: "Fall 2024 -- Spring 2025",
    description:
      "Conducted experiments on the impact of Gaussian noise injection in robotic imitation learning models. Optimized a sigmoid approximation curve relating noise amplitude to performance, yielding statistically significant R^2 values between 0.91 and 0.99. Used Pandas, NumPy, MatPlotLib, and SciPy for data analysis and optimization. Used MuJoCo, RoboSuite, RoboMimic, and MimicGen for robotic simulation and imitation learning",
    image: "./research_videos/mimicgen_coffee.gif",
    links: {
      "MimicGen": "https://mimicgen.github.io/",
    },
    main_link: "https://mimicgen.github.io/",
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
      "Abstract": "https://www.arxiv.org/abs/2506.06474",
      "Paper": "https://www.arxiv.org/pdf/2506.06474",
      "Poster": "https://drive.google.com/file/d/1bp1082myhzq6jsimDbMJyHCFLieBaZvd/view?usp=sharing",
      "Code": "https://github.com/EverettRichards/Edge-CAV",
    },
    main_link: "https://drive.google.com/file/d/1TXZwE9rR3KcFgkUGBsVSHjd14-IFY3uG/view?usp=sharing",
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
    main_link: "https://github.com/EverettRichards/DiCE",
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
