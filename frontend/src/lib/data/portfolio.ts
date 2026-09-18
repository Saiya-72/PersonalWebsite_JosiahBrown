export type PortfolioItem = {
	slug: string;
	title: string;
	eyebrow: string;
	category: 'Experience' | 'Project';
	period: string;
	summary: string;
	description: string[];
	highlights: string[];
	skills: string[];
	visual: string;
	visualAlt: string;
};

export const portfolioItems = {
	googleCalendarEventsManager: {
		slug: 'googleCalendarEventsManager',
		title: 'Google Calendar Events Management Platform',
		eyebrow: 'Software Development Internship',
		category: 'Experience',
		period: 'University software development',
		summary:
			'A full-stack university event platform for creating events, managing registration and permissions, and keeping Google Calendar in sync.',
		description: [
			'I contributed across both sides of a university event management platform built around role-based access and Google Calendar integration. The objective was to provide a more unified workflow for students and administrators creating, registering for, and managing events.',
			'On the backend, I built and refined FastAPI endpoints, worked on role-based access control, and wrote pytest coverage using a Red-Green-Refactor workflow. On the frontend, I worked in SvelteKit on authentication, profile editing, and the main user experience.',
			'Many of the most involved issues crossed application layers. When a calendar event did not appear or did not disappear as expected, I traced the behavior through authentication, API logic, Firestore state, and Google Calendar integration.'
		],
		highlights: [
			'Built event CRUD endpoints with role-based access control',
			'Wrote pytest coverage with a Red-Green-Refactor TDD workflow',
			'Debugged authentication, authorization, and Google Calendar synchronization',
			'Implemented authentication, profile editing, and core frontend flows'
		],
		skills: [
			'FastAPI',
			'Python',
			'SvelteKit',
			'TypeScript',
			'Firebase Authentication',
			'Cloud Firestore',
			'Google Calendar API',
			'Role-Based Access Control',
			'pytest',
			'Test-Driven Development',
			'API Debugging',
			'Full-Stack Development'
		],
		visual: '/visuals/calendar-platform.svg',
		visualAlt: 'Calendar and API integration illustration'
	},
	misoXternChallenge: {
		slug: 'misoXternChallenge',
		title: 'MISO Xtern Challenge',
		eyebrow: 'TechPoint Xtern Challenge',
		category: 'Experience',
		period: 'October 2025',
		summary:
			'A fast-moving data project using public information, social signals, and sentiment analysis to look for early changes in Midwest energy discussion.',
		description: [
			'I collaborated with students from other universities through TechPoint’s Xtern Challenge on a prompt from the Midcontinent Independent System Operator (MISO). The project focused on identifying signals of changing stakeholder strategy before those changes appeared in formal proposals.',
			'My part of the project was heavily data-focused. I built Python scripts to gather news and social data, cleaned and filtered it around MISO-relevant grid stressors, and used sentiment analysis and visualizations to compare public discussion with more formal energy-sector information.',
			'The project required adapting to incomplete data and restrictive APIs. It strengthened my ability to distinguish useful signals from noise and present findings from imperfect datasets under a short deadline.'
		],
		highlights: [
			'Built Python pipelines for news, social, and public energy data',
			'Applied sentiment analysis to public and stakeholder-facing communication',
			'Created visuals around transmission, resource adequacy, and large-load indicators',
			'Presented findings with a cross-university team under a short deadline'
		],
		skills: [
			'Python',
			'pandas',
			'Requests / REST APIs',
			'NewsAPI',
			'PRAW / Reddit API',
			'VADER',
			'TextBlob',
			'Data Cleaning',
			'Sentiment Analysis',
			'Data Visualization',
			'Generative AI / LLMs',
			'Team Collaboration'
		],
		visual: '/visuals/miso-data.svg',
		visualAlt: 'Energy-grid data and sentiment analysis illustration'
	},
	tutoring: {
		slug: 'tutoring',
		title: 'UIndy Peer Tutoring',
		eyebrow: 'Academic Tutoring',
		category: 'Experience',
		period: 'University of Indianapolis',
		summary:
			'Peer tutoring in software engineering, computer science, and physics, with the focus on understanding the reasoning instead of memorizing an answer.',
		description: [
			'I tutor students in software engineering, computer science, and physics. Sessions focus on identifying the point of confusion and developing a solution strategy rather than providing an answer without context.',
			'This work has strengthened my ability to explain technical ideas clearly and without unnecessary jargon. It also reinforces the importance of understanding the reasoning behind code, algorithms, and physical models.'
		],
		highlights: [
			'Explain programming and engineering concepts in approachable terms',
			'Help students debug root causes instead of patching symptoms',
			'Adjust explanations for different experience levels and learning styles',
			'Build problem-solving habits students can reuse on their own'
		],
		skills: [
			'Technical Communication',
			'Problem Decomposition',
			'Debugging',
			'Computer Science Fundamentals',
			'Software Engineering Concepts',
			'Physics Problem Solving',
			'Mentoring',
			'Active Listening'
		],
		visual: '/visuals/tutoring.svg',
		visualAlt: 'Tutoring and problem-solving illustration'
	},
	krogerExperience: {
		slug: 'krogerExperience',
		title: 'Kroger',
		eyebrow: 'Cashier & Courtesy Clerk',
		category: 'Experience',
		period: 'Customer service experience',
		summary:
			'Fast-paced retail work that taught me a lot about accuracy, customer communication, and staying useful when several things need attention at once.',
		description: [
			'At Kroger I worked directly with customers and operated point-of-sale systems in a high-volume environment. The role required accuracy, efficiency, professional communication, and situational awareness.',
			'I also trained more than ten new employees on register operations and customer-service expectations, strengthening my ability to communicate processes clearly and support consistent performance.'
		],
		highlights: [
			'Mentored 10+ new employees on POS operations and customer service',
			'Handled point-of-sale transactions efficiently and accurately',
			'Balanced speed, attention to detail, and communication during busy shifts'
		],
		skills: [
			'Customer Service',
			'Employee Mentoring',
			'Point-of-Sale Operations',
			'Professional Communication',
			'Accuracy Under Pressure',
			'Teamwork',
			'Time Management'
		],
		visual: '/visuals/retail.svg',
		visualAlt: 'Retail point-of-sale illustration'
	},
	learExperience: {
		slug: 'learExperience',
		title: 'Lear Corporation',
		eyebrow: 'Summer Production Help',
		category: 'Experience',
		period: 'Summer 2026',
		summary:
			'Hands-on automotive manufacturing work that gave me a close look at just-in-time production, quality, and what happens when one part of a system falls behind.',
		description: [
			'During summer 2026 I worked in automotive seat production. The role provided direct experience with a physical production system in which each station depends on the preceding process and the finished product must maintain a steady flow.',
			'I learned how just-in-time manufacturing affects inventory, scheduling, quality, and line efficiency. Over the summer I contributed to the production of more than 28,000 seats used in the GMC Sierra line.',
			'The experience also reinforced systems-thinking principles familiar from software: clear handoffs, quality checks, bottlenecks, process failures, and downstream dependencies.'
		],
		highlights: [
			'Contributed to production of 28,000+ GMC Sierra seats',
			'Worked inside a high-throughput just-in-time manufacturing process',
			'Learned how quality issues and delays affect downstream production'
		],
		skills: [
			'Just-in-Time Manufacturing',
			'Production Workflows',
			'Quality Awareness',
			'Process Discipline',
			'Team Coordination',
			'Operational Efficiency',
			'Workplace Safety'
		],
		visual: '/visuals/manufacturing.svg',
		visualAlt: 'Automotive manufacturing illustration'
	},
	internationalExperiencesVR: {
		slug: 'internationalExperiencesVR',
		title: 'International Experiences VR',
		eyebrow: 'Year-Long Engineering Project',
		category: 'Project',
		period: 'Sophomore Engineering Design',
		summary:
			'A browser-based VR campus experience designed so prospective international students can explore UIndy from a headset, computer, or phone.',
		description: [
			'For this year-long engineering project, my team was asked to build a virtual campus experience for prospective international students who may not be able to visit UIndy in person.',
			'I served as Project Manager, Secretary, and Primary Client Contact, but I also worked directly on the implementation. I handled deadlines, meeting notes, client communication, requirements, and team coordination while helping build the environment with A-Frame and WebXR.',
			'The interesting part was that the code was only one piece of the project. We also had to make decisions about controls, cross-device support, performance, accessibility, web standards, and how to turn a broad client idea into requirements we could actually test.'
		],
		highlights: [
			'Led planning, meetings, client communication, and delivery for a year-long project',
			'Built browser-based VR environments with A-Frame, JavaScript, and WebXR',
			'Designed navigation that works with keyboard, mobile, and headset use',
			'Turned client goals into requirements, specifications, and constraints'
		],
		skills: [
			'A-Frame',
			'WebXR',
			'JavaScript',
			'HTML / CSS',
			'Three.js Concepts',
			'VR Interaction Design',
			'Project Management',
			'Client Communication',
			'Requirements Engineering',
			'Technical Documentation'
		],
		visual: '/visuals/vr-campus.svg',
		visualAlt: 'Browser-based VR campus illustration'
	},
	combatRobot: {
		slug: 'combatRobot',
		title: 'Combat Robot',
		eyebrow: 'Engineering Design Project',
		category: 'Project',
		period: 'University of Indianapolis',
		summary:
			'A team-built combat robot for which I managed the project and developed most of the software controlling the physical system.',
		description: [
			'I served as Project Manager for a team designing and building a combat robot for semester competitions. I coordinated the schedule, tracked deadlines, and kept development focused on a system that could withstand testing.',
			'I also served as lead software developer and wrote most of the robot-control code. Debugging required connecting software behavior to motor, control, and mechanical performance during physical testing.',
			'The project strengthened my interest in embedded and systems work by connecting software decisions directly to the behavior of a physical machine.'
		],
		highlights: [
			'Led project planning, deadlines, and team coordination',
			'Wrote the majority of the software controlling the robot',
			'Iterated through physical testing, debugging, and system integration',
			'Balanced software decisions against mechanical and competition constraints'
		],
		skills: [
			'Embedded Programming',
			'Hardware / Software Integration',
			'Systems Debugging',
			'Iterative Testing',
			'Project Management',
			'Team Leadership',
			'Requirements Tracking',
			'Engineering Tradeoffs'
		],
		visual: '/visuals/combat-robot.svg',
		visualAlt: 'Combat robot and embedded controls illustration'
	},
	plantWateringSystem: {
		slug: 'plantWateringSystem',
		title: 'Automatic Plant Watering System',
		eyebrow: 'Client Engineering Project',
		category: 'Project',
		period: 'University of Indianapolis',
		summary:
			'A client-driven design for a portable automatic watering system that can keep houseplants supplied from a reservoir while the owner is away.',
		description: [
			'Working from a request by Dr. Motato at UIndy, my team developed a design for an automatic plant watering system that needed to be portable, simple to install, and easy for a normal user to operate.',
			'As Project Manager, I tracked the project, coordinated deadlines, and tried to keep the team focused on the client’s actual problem instead of adding features because they sounded interesting.',
			'It was one of my earlier lessons in requirements-driven engineering. A solution can be technically clever and still be the wrong solution if it is harder to use, maintain, or understand than the problem calls for.'
		],
		highlights: [
			'Managed team progress, milestones, and overall design quality',
			'Turned a client problem into concrete engineering requirements',
			'Evaluated portability, reservoir operation, usability, and practical constraints',
			'Kept the design focused on the user instead of unnecessary complexity'
		],
		skills: [
			'Engineering Design',
			'Requirements Gathering',
			'Systems Thinking',
			'Project Management',
			'Client Communication',
			'Design Documentation',
			'Engineering Tradeoffs',
			'Team Collaboration'
		],
		visual: '/visuals/plant-system.svg',
		visualAlt: 'Automatic plant watering system illustration'
	}
} satisfies Record<string, PortfolioItem>;

export const experiences = [
	portfolioItems.googleCalendarEventsManager,
	portfolioItems.misoXternChallenge,
	portfolioItems.tutoring,
	portfolioItems.krogerExperience,
	portfolioItems.learExperience
];

export const projects = [
	portfolioItems.internationalExperiencesVR,
	portfolioItems.combatRobot,
	portfolioItems.plantWateringSystem
];
