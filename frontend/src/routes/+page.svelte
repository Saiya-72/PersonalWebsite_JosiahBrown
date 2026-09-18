<script lang="ts">
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { experiences, projects } from '$lib/data/portfolio';

	const coreSkills = [
		'Python',
		'C',
		'C++',
		'Java',
		'TypeScript',
		'JavaScript',
		'SvelteKit',
		'FastAPI',
		'Git / GitHub',
		'REST APIs',
		'Test-Driven Development',
		'Embedded Systems'
	];
</script>

<svelte:head>
	<title>Josiah Brown | Software Engineer</title>
	<meta
		name="description"
		content="Portfolio of Josiah Brown, a Software Engineering and Computer Science student building full-stack software, embedded systems, data projects, and engineering solutions."
	/>
</svelte:head>

<main>
	<section class="hero section-pad">
		<div class="shell hero-grid">
			<div class="hero-copy reveal">
				<p class="eyebrow">Software Engineering + Computer Science</p>
				<h1>Engineering software and systems for <em>real-world use.</em></h1>
				<p class="hero-lede">
					I’m Josiah Brown, a Software Engineering and Computer Science student at the University of
					Indianapolis. My work spans full-stack software, embedded systems, data, and engineering
					problem-solving.
				</p>
				<div class="hero-actions">
					<a class="button button-primary" href="#projects">View selected work <span aria-hidden="true">↘</span></a>
					<a class="button button-secondary" href="#experience">Experience</a>
				</div>
				<div class="hero-stats" aria-label="Quick facts">
					<div><strong>4.00</strong><span>GPA</span></div>
					<div><strong>2</strong><span>B.S. degrees</span></div>
					<div><strong>2028</strong><span>Expected graduation</span></div>
				</div>
			</div>

			<div class="hero-field reveal delay-1" aria-label="Areas of focus">
				<div class="field-mark" aria-hidden="true">
					<svg viewBox="0 0 260 260" role="presentation">
						<path d="M52 32v196M52 130h66M118 72v116M118 72l48 48-48 48M166 72v116M166 72h34l28 28-28 30 28 30-28 28h-34" />
						<path class="mark-faint" d="M32 52l20-20M32 208l20 20M208 32l20 20M208 228l20-20" />
					</svg>
				</div>
				<div class="field-copy">
					<p class="field-kicker">Areas of focus</p>
					<ul class="field-list">
						<li><span>01</span> Full-stack software</li>
						<li><span>02</span> Systems + embedded work</li>
						<li><span>03</span> Data + APIs</li>
						<li><span>04</span> Systems debugging</li>
					</ul>
					<p class="field-note">Clear, maintainable code supported by thoughtful design and testing.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="about section-pad section-subtle" id="about">
		<div class="shell two-col">
			<div class="section-heading reveal">
				<p class="section-label">About</p>
				<h2>Building a foundation in software, systems, and engineering.</h2>
			</div>
			<div class="about-copy reveal delay-1">
				<p>
					I’m interested in the full engineering process: understanding a problem, designing a practical
					solution, and delivering software that another person can maintain.
				</p>
				<p>
					At UIndy I’ve worked across web development, APIs, data analysis, VR, embedded programming,
					and collaborative engineering projects. I value clean code, effective testing, and the ability
					to understand and troubleshoot a system from end to end.
				</p>
			</div>
		</div>
	</section>

	<section class="portfolio-section section-pad" id="experience">
		<div class="shell">
			<div class="section-top reveal">
				<div>
					<p class="section-label">Experience</p>
					<h2>Experience across software, instruction, and production.</h2>
				</div>
				<p>Each role has strengthened my communication, troubleshooting, and ability to contribute within a larger system.</p>
			</div>
			<div class="card-grid">
				{#each experiences as item, index}
					<div class:featured={index === 0} class="reveal">
						<ProjectCard {item} />
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section class="portfolio-section section-pad section-subtle" id="projects">
		<div class="shell">
			<div class="section-top reveal">
				<div>
					<p class="section-label">Projects</p>
					<h2>Projects shaped by constraints and technical decisions.</h2>
				</div>
				<p>These projects involved practical constraints, technical tradeoffs, client requirements, hardware, and team decisions.</p>
			</div>
			<div class="card-grid project-grid">
				{#each projects as item}
					<div class="reveal"><ProjectCard {item} /></div>
				{/each}
			</div>
		</div>
	</section>

	<section class="skills-section section-pad" id="skills">
		<div class="shell skills-grid">
			<div class="section-heading reveal">
				<p class="section-label">Toolkit</p>
				<h2>Technical tools and areas of practice.</h2>
				<p class="section-intro">I work across the full path from interface and backend to data flow, testing, and the systems underneath.</p>
			</div>
			<div class="skill-list reveal delay-1">
				{#each coreSkills as skill, index}
					<span><small>{String(index + 1).padStart(2, '0')}</small>{skill}</span>
				{/each}
			</div>
		</div>
	</section>

	<section class="education-section section-pad section-dark" id="education">
		<div class="shell education-grid">
			<div class="reveal">
				<p class="section-label light">Education</p>
				<h2>University of Indianapolis</h2>
				<p class="education-lede">A broad foundation across software engineering, computer science, mathematics, and engineering design.</p>
			</div>
			<div class="education-card reveal delay-1">
				<div class="degree-row"><span>01</span><div><strong>B.S. Software Engineering</strong><small>Expected May 2028</small></div></div>
				<div class="degree-row"><span>02</span><div><strong>B.S. Computer Science</strong><small>Expected May 2028</small></div></div>
				<div class="degree-row"><span>03</span><div><strong>Minor in Mathematics</strong><small>University of Indianapolis</small></div></div>
				<div class="education-metrics"><div><strong>4.00 / 4.00</strong><span>GPA</span></div></div>
			</div>
		</div>
	</section>
</main>
