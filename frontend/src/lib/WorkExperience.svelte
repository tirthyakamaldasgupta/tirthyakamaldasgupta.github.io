<script lang="ts">
	import 'bootstrap-icons/font/bootstrap-icons.css';
    import type { WorkExperience } from '$lib/types/work-experience';

	const experiences: WorkExperience[] = [
		{
			title: 'System Engineer',
			organization: 'Tata Consultancy Services',
			logo: '/logos/tcs.jpeg',
			location: 'Mumbai, Maharashtra, India',
			duration: 'June 2025 - Present',
			achievements: [
				'Evaluating LLM-powered applications, RAG applications, and AI agents for accuracy, reliability, and robustness using evaluation frameworks such as Ragas and DeepEval.',
				'Designing and maintaining web applications using Streamlit to automate and streamline evaluation workflows using evaluation frameworks such as Ragas and DeepEval, enabling teams to configure metrics, run evaluations, and generate reports efficiently.',
				'Contributing to the development of LLM-powered applications, RAG applications, AI agents and MCP.'
			],
			skills: [
				'Artificial Intelligence (AI)',
				'Generative AI',
				'Large Language Models (LLM)',
				'Retrieval-Augmented Generation (RAG)',
				'AI Agents',
				'MCP',
				'Streamlit',
				'Ragas',
				'DeepEval',
				'LangChain',
				'RESTful Web Services',
				'RDBMS',
				'MySQL',
				'Git',
				'Azure DevOps Services',
				'Python (Programming Language)'
			]
		},
		{
			title: 'Senior Automation Engineer',
			organization: 'BAAR Technologies',
			logo: '/logos/baar.jpeg',
			location: 'Kolkata, West Bengal, India',
			duration: 'March 2022 - Present',
			achievements: [
				"Built Robotic Process Automation (RPA) workflows using BAAR (BAAR Technologies' proprietary RPA platform) for Application Lifecycle Management (ALM) operations (onboarding, offboarding, employee data retrieval, etc.) across 50+ enterprise platforms like Oracle Fusion Cloud, DocuSign, and Zoho People, and integrated the workflows with BAAR-IGA (BAAR Technologies' proprietary Identity, Governance, and Administration platform).",
				'Delivered measurable impact by reducing manual effort, minimizing errors, and boosting operational efficiency through the ALM automation solution, successfully utilized by multiple enterprises and startups.',
				'Achieved 70% reduction in data transformation complexity post employee data retrieval.',
				'Developed microservices using Python, Django, and Django REST Framework to standardize employee data from HR systems, eliminating the need for writing custom integrable scripts.',
				'Automated both REST and SOAP API interactions and Web (UI) interactions using Playwright, Selenium, and Robot Framework.',
				'Built a data visualization platform enabling users to explore, query, and extract insights from SQL databases and structured files (CSV, JSON etc.).',
				'Implemented the backend for a visual SQL query builder, server-side chart rendering and export options (PDF, PNG, JPG etc.), helping clients uncover actionable insights.',
				'Created backend services using Node.js, Express.js, and Sequelize ORM, with integration for both PostgreSQL and Microsoft SQL Server.',
				"Developed a web-based data editor using Angular, Monaco Editor, and Handsontable to visualize and edit BAAR's proprietary data format, accelerating development and testing cycles.",
				'Ported internal Python utilities to JavaScript for client-side data transformation in browsers.'
			],
			skills: [
				'Jira Service Management',
				'PostgreSQL',
				'Playwright',
				'Bitbucket',
				'Node.js',
				'Microservices',
				'Angular',
				'Robot Framework',
				'SOAP',
				'SAP SuccessFactors',
				'Netlify',
				'Robotic Process Automation (RPA)',
				'Django',
				'DocuSign',
				'Front-End Development',
				'RESTful Web Services',
				'BAAR-IGA',
				'BAAR',
				'JavaScript',
				'Git',
				'Back-End Web Development',
				'Oracle HCM',
				'Python (Programming Language)',
				'Django REST Framework',
				'Express.js',
				'PrimeNG',
				'Workday Integration',
				'Microsoft SQL Server',
				'RDBMS',
				'Zoho People',
				'Selenium',
				'Full-Stack Development'
			]
		},
		{
			title: 'Automation Engineer',
			organization: 'BAAR Technologies',
			logo: '/logos/baar.jpeg',
			location: 'Kolkata, West Bengal, India',
			duration: 'April 2021 - February 2022',
			achievements: [
				"Developed a Robotic Process Automation (RPA) workflow using BAAR (BAAR Technologies' proprietary RPA platform) to automate inspection report generation for a prominent steel supplier and manufacturing client by fetching data from a mobile app's backend, generating Word documents using Python and python-docx, and emailing them to stakeholders, enabling real-time reporting and eliminating manual effort.",
				'Created dynamic YAML-based templates for Word document generation, incorporating images and insights, and implemented advanced formatting solutions such as side-by-side image placement using tables.',
				'Built an RPA workflow for a prominent defense electronics and satcom client, streamlining vendor quotation processes through email parsing, pricing calculations in Python, and Web (UI) automation using Selenium and Robot Framework to update proprietary web applications.',
				'Developed a full-stack job management and approval web application for an accounting firm by integrating Vincere APIs with a Django backend and a JavaScript (jQuery) frontend, implementing Role-Based Access Control (RBAC), validation-driven forms, and automated job scheduling—resulting in improved compliance, reduced job posting errors, and faster listing workflows.',
				'Contributed to various Proof of Concepts (PoCs) and client deliverables by developing reusable Python scripts and plugins for Web (UI) automation, REST and SOAP API communication, PDF data extraction, and by generating HTML-based emails and visual reports using charts.'
			],
			skills: [
				'OAuth',
				'Bitbucket',
				'YAML',
				'Microsoft Word',
				'Robot Framework',
				'Robotic Process Automation (RPA)',
				'Django',
				'jQuery',
				'Microsoft Office',
				'Front-End Development',
				'MySQL',
				'RESTful Web Services',
				'BAAR',
				'JavaScript',
				'Process Scheduler',
				'Git',
				'Bootstrap (Framework)',
				'Back-End Web Development',
				'Python (Programming Language)',
				'Django REST Framework',
				'RDBMS',
				'Selenium',
				'Role-Based Access Control (RBAC)',
				'Full-Stack Development'
			]
		}
	];
</script>

<h4>Work Experience</h4>

<ul class="list-group">
	{#each experiences as experience}
		<li class="list-group-item experience-item">
			<div class="d-flex gap-3">
				<img src={experience.logo} alt="" class="company-logo" />
				<div class="right-column flex-grow-1 px-3">
					<h4 class="mb-1">{experience.title}</h4>
					<h5 class="mb-1 text-body-secondary">{experience.organization}</h5>

					<p class="text-body-secondary mb-2">
						{experience.location}<br />
						{experience.duration}
					</p>
					<p class="fw-semibold mt-3 mb-1">Achievements</p>
					<ul class="arrow-bullets mt-2">
						{#each experience.achievements as achievement}
							<li>
								<i class="bi bi-arrow-return-right me-2 text-primary"></i>
								{achievement}
							</li>
						{/each}
					</ul>
					<p class="fw-semibold mt-4 mb-2">Skills</p>
					<div class="skill-chips">
						{#each experience.skills as skill}
							<span class="badge text-bg-primary me-2 mb-2">{skill}</span>
						{/each}
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>

<style>
	.company-logo {
		width: 56px;
		height: 56px;
		object-fit: contain;
		border-radius: 10px;
		background: #fff;
		padding: 6px;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
	}

	.experience-item {
		padding: 1.5rem;
		border-radius: 12px;
		margin-bottom: 1.5rem;
	}

	.arrow-bullets {
		list-style: none;
		padding-left: 0;
	}

	.arrow-bullets li {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		margin-bottom: 0.6rem;
		line-height: 1.45;
	}

	.skill-chips .badge {
		font-size: 0.85rem;
		padding: 0.45rem 0.7rem;
		border-radius: 999px;
	}

	.right-column {
		min-width: 0;
	}
</style>
