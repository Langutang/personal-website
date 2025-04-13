const PROJECTS_DATA = [
  {
    title: 'Rocket PSA',
    description: 'Cloud based AI, CRM tool built at scale and efficiency',
    about:
      'RocketPSA is a cloud-based SaaS/PaaS platform that leverages AI to eliminate manual data entry by replacing traditional CRM forms with intelligent, conversational automation. Keeping work moving and tech checks minimal.',
    link: 'https://piggment.co',
    imageUrl: 'https://i.ibb.co/WNL1KxSQ/fileupload.png',
    github: 'https://rocket-command.com',
    type: ['ai-ml'],
    technologies: ['Python', 'Django','NextJS', 'Cloud GPU and Filesystem', 'AI / ML Agent'],
  },
  {
    title: 'Physical Assistant',
    about: 'A Raspberry Pi computer capable of object following, conversation, as well as updates',
    description:
      'A computer capable of object following up to 1000 different objects, conversing with LLMs, as well as updating you about your daily agenda if provided to the bot.',
    link: 'https://scoutbar.co',
    github: 'https://github.com/adenekan41/scoutbar',
    imageUrl: 'https://i.ibb.co/MkNCHLs0/IMG-0377-1.jpg',
    type: ['ai-ml', 'robotics'],
    technologies: ['Python', 'Coral TPU', 'ChatGPT'],
  },
  {
    title: 'Smart Mirror',
    description: 'Smart mirror capable of holding conversations and providing information on attached widgets.',
    github: 'https://github.com/adenekan41/shoprrr',
    about:
      'Conversational based smart mirror that identifies users by profile type, as well as surrounding object awareness using PIR sensor. Set your day and maintenence by mirror to own your day.',
    link: 'https://shoprrr.netlify.com',
    imageUrl: 'https://i.ibb.co/WpcG5bVZ/IMG-2734.jpg',
    type: ['ai-ml', 'robotics'],
    technologies: ['Python', 'Raspberry Pi', 'PIR Sensor', 'APIs'],
  },
    {
    title: 'H.AI.D.E.S',
    description:
      'Autonomy in safety and defense',
    about:
      'HAIDES is a safety first build robotics system. Identifying individuals and classifying actions as threatening or safe. Built with AI, classification, object detection and following, as well as paint.',
    link: 'https://audiomack.com',
    imageUrl:
      'https://i.ibb.co/Nd6vFLrR/P2120607.jpg',
    type: ['ai-ml', 'robotics'],
    technologies: ['Python', 'Muli TPU', 'Raspberry Pi', 'Object Detection'],
  },
  {
    title: 'Facial Recognition v0',
    description: 'My first video walkthrough on my computer vision facial recognition - 2019',
    about:
      'Highlight the importance of image preprocessing, layer identification, and feature selection. Walking through various use cases depending on application need',
    link: 'https://www.youtube.com/watch?v=PeZaGmBD03s',
    imageUrl:
      'https://i.ibb.co/4Z0py7pP/1-f-ZT8f-Z5-EGJq-M6-J0c392-Wg.webp',
    type: ['ai-ml'],
    technologies: ['Python', 'ai-ml'],
  },
  {
    title: 'Healthcare Claims Scanner',
    github: 'https://github.com/adenekan41/piggment-chrome',
    description: 'Automating the physical world into the digital one',
    about:
      'Using edge computing to identify a healthcare claim document, parse out information to text, only capture important information, network transfer data to databricks post analysis to cloud for further computing.',
    link:
      'https://chrome.google.com/webstore/detail/piggment-crafted-to-inspi/eifkhhlfjplpakoddkndkgjhfajnhffg',
    imageUrl: 'https://i.ibb.co/CpWJ1WVF/IMG-5811.jpg',
    type: ['ai-ml', 'robotics'],
    technologies: ['Python', 'Coral TPU', 'Databricks', 'Raspberry Pi'],
  },
  {
    title: 'XGo Lite Robot Dog',
    description: 'Deep Learning into a Quadreuped Robot',
    about:      "",
    link:
      'https://magic.link',
    imageUrl: 'https://i.ibb.co/GQ056767/Capture3.png"',
     type: ['ai-ml', 'robotics'],
    technologies: ['Python', 'CM4', 'OpenCV', 'GraphCMS'],
  },
  {
    title: 'Procedure & Cost Expectation from Skin Image or Chest X-Ray',
    description: 'Give me an image and profile, I will give you cost',
    about:      "Deep Learning into taking a patient profile, location, as well as a medical image to estimate the likely cost of care for likely diagnosis.",
    link:
      'https://github.com/jordanholbrook/CV_Med',
    imageUrl: 'https://i.ibb.co/pvzC3R05/32234234.png',
     type: ['ai-ml'],
    technologies: ['Python', 'Django', 'MLFlow', 'Databricks'],
  },
  {
    title: 'Voquo.io - Transparency in Diplomacy with Data',
    description: 'Highlighting policy transparency aggregating data across government agencies ',
    about:      "Tangential to the government transparency act, voquo was founded to partner with Databricks and Snowflake to offer free government datasets for easier, public access.",
    link:
      'https://www.voquo.io/',
    imageUrl: 'https://i.ibb.co/rDW5Zcz/23d23.png',
     type: ['open-source'],
    technologies: ['Python', 'Django', 'Snowflake', 'Databricks', 'scipy'],
  },
  {
    title: 'High Encryption Password Manager',
    description: 'SHA-265 and PostgreSQL MD5 Encryption for Dual-Serialization',
    about:      "A password manager with two step serialization for passwords using SHA-256 on the intake and MD5 on the database update. Build on encryption through network and SSL of course.",
    link:
      'https://www.voquo.io/',
    imageUrl: 'https://i.ibb.co/Kzsjy1sY/68747470733a2f2f692e6962622e636f2f774a524832776e2f686f6d652e706e67.png',
     type: ['open-source'],
    technologies: ['Python', 'Django', 'Snowflake', 'Databricks', 'scipy'],
  },
  {
    title: 'Great Expectations - Contributor',
    description: 'Contributor on the great expectations data validation framework',
    about:      "Created PRs for validation checks that I needed in various work pipelines. Ended up becoming a contributor on the framework",
    link:
      'https://greatexpectations.io/expectations/',
    imageUrl: 'https://i.ibb.co/W42kH7PW/qwef.png',
     type: ['open-source'],
    technologies: ['Python'],
  },
];

export default PROJECTS_DATA;
