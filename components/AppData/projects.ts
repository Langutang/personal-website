const PROJECTS_DATA = [
  {
    title: 'AI.ME',
    description:
      'Universal MCP connections and goal-aware agents tailored to how a person or organization works',
    about:
      'AI.ME is a durable agent platform for turning personal goals, organizational constraints, policies, and preferred ways of working into practical agent behavior. It combines persisted conversations with universal MCP connections so an agent can work across systems such as Notion, Linear, Sentry, and Slack while preserving human review, access boundaries, and task context. The aim is not a generic assistant; it is an adaptable operating layer that learns what success means for a specific person or team and then helps execute toward it.',
    link: 'https://github.com/Langutang/aime',
    github: 'https://github.com/Langutang/aime',
    imageUrl: '/media/projects/aime-agent-platform.png',
    type: ['ai-ml', 'open-source'],
    imageDisplay: 'cover',
    technologies: [
      'TypeScript',
      'MCP',
      'Durable Agents',
      'Next.js',
      'Vercel Connect',
      'Postgres',
    ],
  },
  {
    title: 'TestAId',
    description:
      'Privacy-aware AI coaching for radiology, MCAT, and medical board or licensure practice',
    about:
      'TestAId is a Chrome extension and FastAPI learning service that evaluates visible practice questions, images, fill-in-the-blank responses, and essays. It is tailored first to radiologic technologist board preparation, with an extensible grading and vision architecture for MCAT and other medical board or licensure exams. Configurable OpenAI, hybrid, and local Ollama lanes support different privacy and performance needs, while conditional vision activates only when the question requires medical imagery. Strict schemas, parser adapters, image redaction, and privacy-aware persistence keep the feedback dependable and focused on learning rather than answer extraction.',
    link: 'https://github.com/Langutang/graduate-bun',
    github: 'https://github.com/Langutang/graduate-bun',
    imageUrl: '/media/projects/testaid-medical-learning.png',
    type: ['ai-ml', 'open-source'],
    imageDisplay: 'cover',
    technologies: [
      'Chrome MV3',
      'FastAPI',
      'Ollama',
      'Vision LLMs',
      'OpenAI',
      'TypeScript',
    ],
  },
  {
    title: 'Atlas',
    description:
      'Contract intelligence, conversational editing, and provision-level risk analysis for AIA documents',
    about:
      'I built Atlas as the AI assistant for AIA Contract Documents. It lets authorized users ask questions across contracts and application data, propose contract edits through chat, highlight AI-authored changes for human review, and analyze risk provision by provision. A multi-system whole-text embedding architecture supports contract and application understanding, while an RBAC-aware MCP layer limits tools and data to each user\'s credentials. The source repository remains private under company policy; the linked AIA article describes the public workflow and product direction.',
    link:
      'https://learn.aiacontracts.com/articles/how-to-use-ai-assistant-construction-contracts/',
    imageUrl: '/media/projects/atlas-ai-assistant.jpg',
    type: ['ai-ml'],
    imageDisplay: 'cover',
    technologies: [
      'Azure AI Foundry',
      'MCP',
      'RAG',
      'Vector Databases',
      'RBAC',
      'Document Intelligence',
    ],
  },
  {
    title: 'Return of the Mesh',
    description:
      'Residential plans to reviewed IFC and FBX based game-ready homes',
    about:
      'A human-in-the-loop system that reads dense plan PDFs, classifies and reconciles millions of native vector primitives, resolves walls, rooms, doors, windows, fixtures, and dimensions, and authors validated IFC4. A deterministic Blender baker then rebuilds clean, dimensionally accurate FBX and glTF assets with game-ready topology, pivots, UVs, naming, instancing, and QA gates. I trained and tested ViT, RT-DETR, VecFormer, RoomFormer, PolyRoom, and Gemini/VLM approaches, learning where a model should propose and where geometry must remain deterministic.',
    link: 'https://github.com/Arcway-ai/return-of-the-mesh',
    github: 'https://github.com/Arcway-ai/return-of-the-mesh',
    imageUrl: '/media/projects/return-of-the-mesh-house.png',
    imageUrls: [
      '/media/projects/return-of-the-mesh-house.png',
      '/media/projects/return-of-the-mesh-fixtures.png',
    ],
    imageDisplay: 'gallery',
    type: ['ai-ml', 'game-design'],
    technologies: [
      'Python',
      'VecFormer',
      'RT-DETR',
      'Gemini',
      'IFC4',
      'Blender',
      'Unreal Engine',
    ],
  },
  {
    title: 'Holoprojector Model Bake-Off',
    description:
      'Furniture and fixtures generated, normalized, and ranked across leading image-to-3D models',
    about:
      'A model bake-off for real retail furniture and fixtures. The same reference image and product dimensions are routed through TRELLIS.2, Rodin Gen-2.5, Meshy 6, Tripo 3.1, or a parametric Blender build. Each GLB is cleaned only when necessary, rescaled to the real specification, re-pivoted at floor-bottom-center, imported into Unreal, and visually scored against the source. The tests showed that no single model wins every category: Rodin can lead on finish and silhouette, TRELLIS.2 can preserve rich PBR detail, Meshy is useful for rapid volume, and parametric geometry remains best for exact rectilinear products.',
    link: 'https://github.com/Arcway-ai/holoprojector',
    github: 'https://github.com/Arcway-ai/holoprojector',
    imageUrl: '/media/projects/holoprojector-rodin-chair.png',
    imageUrls: [
      '/media/projects/holoprojector-trellis-chair.png',
      '/media/projects/holoprojector-rodin-chair.png',
      '/media/projects/holoprojector-meshy-chair.png',
    ],
    imageDisplay: 'gallery',
    type: ['ai-ml', 'game-design'],
    technologies: [
      'TRELLIS.2',
      'Rodin Gen-2.5',
      'Meshy 6',
      'Tripo 3.1',
      'GLB',
      'PBR',
    ],
  },
  {
    title: 'Unreal MCP Game-Ready Pipeline',
    description:
      'Fast, accurate placement and runtime validation for generated 3D assets',
    about:
      'An Unreal Engine 5.8 MCP toolset that turns generated GLBs into trustworthy game assets. It imports and places meshes, verifies centimeter-scale dimensions and floor pivots, enables Nanite where appropriate, configures collision, reports triangles and UVs, captures consistent QA views, and hot-reloads cleanup tools without restarting the editor. The goal is to add life to a digital world quickly while keeping geometry, memory, collision, and rendering costs under control.',
    link: 'https://github.com/Arcway-ai/holoprojector',
    github: 'https://github.com/Arcway-ai/holoprojector',
    imageUrl: '/media/projects/unreal-mcp-game-ready.png',
    imageUrls: [
      '/media/projects/unreal-mcp-game-ready.png',
      '/media/projects/holoprojector-pipeline.png',
    ],
    imageDisplay: 'gallery',
    type: ['ai-ml', 'game-design'],
    technologies: [
      'Unreal Engine 5.8',
      'MCP',
      'Nanite',
      'Blender',
      'Trimesh',
      'QA Automation',
    ],
  },
  {
    title: 'Rocket PSA',
    description: 'Cloud based AI, CRM tool built at scale and efficiency',
    about:
      'RocketPSA is a cloud-based SaaS/PaaS platform that leverages AI to eliminate manual data entry by replacing traditional CRM forms with intelligent, conversational automation. Keeping work moving and tech checks minimal.',
    link: 'https://piggment.co',
    imageUrl: 'https://i.ibb.co/WNL1KxSQ/fileupload.png',
    github: 'https://rocket-command.com',
    type: ['ai-ml'],
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
    technologies: ['Python', 'Coral TPU', 'Databricks', 'Raspberry Pi'],
  },
  {
    title: 'XGo Lite Robot Dog',
    description: 'Deep learning for a quadruped robot',
    about:
      'A quadruped pet robot that combines motion control, computer vision, object tracking, and conversational AI in an embedded CM4 platform.',
    link:
      'https://magic.link',
    imageUrl: 'https://i.ibb.co/GQ056767/Capture3.png',
     type: ['ai-ml', 'robotics'],
    imageDisplay: 'cover',
    technologies: ['Python', 'CM4', 'OpenCV', 'GraphCMS'],
  },
  {
    title: 'Hugging Face - Contributor',
    description: 'Model and dataset contributor focusing on robots, deep learning, and computer vision',
    about:      "Adding to the superfluous ML and AI industry adding sensor data from IoT devices, as well as publishing my own developed models for robotics and computer vision",
    link:
      'https://huggingface.co/langutang/',
    imageUrl: 'https://i.ibb.co/KpPQr4fL/2432343.png',
     type: ['ai-ml','robotics','open-source'],
    imageDisplay: 'thumbnail',
    technologies: ['Python','GPU','TPU','Embedded Engineering'],
  },
  {
    title: 'Procedure & Cost Expectation from Skin Image or Chest X-Ray',
    description: 'Give me an image and profile, I will give you cost',
    about:      "Deep Learning into taking a patient profile, location, as well as a medical image to estimate the likely cost of care for likely diagnosis.",
    link:
      'https://github.com/jordanholbrook/CV_Med',
    imageUrl: 'https://i.ibb.co/pvzC3R05/32234234.png',
     type: ['ai-ml'],
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
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
    imageDisplay: 'thumbnail',
    technologies: ['Python'],
  },
];

export default PROJECTS_DATA;
