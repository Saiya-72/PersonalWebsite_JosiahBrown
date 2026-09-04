import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const frontend = path.join(root, 'frontend');
const docs = path.join(root, 'docs');

function escapeHtml(value = '') {
	return String(value)
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&#039;');
}

function loadPortfolio() {
	const source = fs.readFileSync(path.join(frontend, 'src/lib/data/portfolio.ts'), 'utf8');
	const startMarker = 'export const portfolioItems = ';
	const endMarker = '} satisfies Record<string, PortfolioItem>;';
	const start = source.indexOf(startMarker);
	const end = source.indexOf(endMarker, start);
	if (start < 0 || end < 0) throw new Error('Could not read portfolioItems from portfolio.ts');

	const objectLiteral = source.slice(start + startMarker.length, end + 1);
	const portfolioItems = Function(`"use strict"; return (${objectLiteral});`)();

	const extractOrder = (name) => {
		const match = source.match(new RegExp(`export const ${name} = \\[([\\s\\S]*?)\\];`));
		if (!match) throw new Error(`Could not read ${name} order from portfolio.ts`);
		return [...match[1].matchAll(/portfolioItems\.([A-Za-z0-9_]+)/g)].map((m) => portfolioItems[m[1]]);
	};

	return { portfolioItems, experiences: extractOrder('experiences'), projects: extractOrder('projects') };
}

function copyRecursive(src, dest) {
	fs.mkdirSync(dest, { recursive: true });
	for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
		const from = path.join(src, entry.name);
		const to = path.join(dest, entry.name);
		if (entry.isDirectory()) copyRecursive(from, to);
		else fs.copyFileSync(from, to);
	}
}

function head({ title, description, depth = 0 }) {
	const prefix = depth ? '../' : './';
	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>${escapeHtml(title)}</title>
	<meta name="description" content="${escapeHtml(description)}" />
	<link rel="icon" href="${prefix}Josiah_favicon.svg" />
	<link rel="stylesheet" href="${prefix}assets/site.css" />
</head>
<body>`;
}

function header(depth = 0) {
	const prefix = depth ? '../' : './';
	return `<div class="site-frame">
<header class="site-header">
	<div class="shell header-inner">
		<a class="brand" href="${prefix}" aria-label="Josiah Brown home">
			<span class="brand-mark" aria-hidden="true"><b>J</b><b>B</b></span>
			<span class="brand-copy"><strong>Josiah Brown</strong><small>Software Engineer</small></span>
		</a>
		<nav aria-label="Primary navigation">
			<a href="${prefix}#experience">Experience</a>
			<a href="${prefix}#projects">Projects</a>
			<a href="${prefix}#skills">Skills</a>
			<a href="${prefix}#education">Education</a>
		</nav>
	</div>
</header>`;
}

function footer(depth = 0) {
	const prefix = depth ? '../' : './';
	return `<footer class="site-footer">
	<div class="shell footer-inner">
		<div><strong>Josiah Brown</strong><p>Software, systems, and a habit of figuring out why something broke.</p></div>
		<div class="footer-mark" aria-hidden="true"><span></span><span></span><span></span></div>
		<a class="text-link" href="${prefix}">Back to home <span aria-hidden="true">↗</span></a>
	</div>
</footer>
</div>
</body>
</html>`;
}

function card(item, depth = 0) {
	const prefix = depth ? '../' : './';
	const skills = item.skills.slice(0, 3).map((s) => `<span>${escapeHtml(s)}</span>`).join('');
	return `<a class="project-card" href="${prefix}${escapeHtml(item.slug)}/">
	<div class="card-visual"><img src="${prefix}${escapeHtml(item.visual.replace(/^\//, ''))}" alt="${escapeHtml(item.visualAlt)}" loading="lazy" /></div>
	<div class="card-body">
		<div class="card-meta"><span>${escapeHtml(item.eyebrow)}</span><span>${escapeHtml(item.period)}</span></div>
		<h3>${escapeHtml(item.title)}</h3>
		<p>${escapeHtml(item.summary)}</p>
		<div class="card-footer"><div class="mini-skills" aria-label="Featured skills">${skills}</div><span class="arrow" aria-hidden="true">↗</span></div>
	</div>
</a>`;
}

function skillList(skills, extraClass = '') {
	return `<div class="skill-list${extraClass ? ` ${extraClass}` : ''}">${skills.map((skill, i) => `<span><small>${String(i + 1).padStart(2, '0')}</small>${escapeHtml(skill)}</span>`).join('')}</div>`;
}

function homePage(experiences, projects) {
	const coreSkills = ['Python','C','C++','Java','TypeScript','JavaScript','SvelteKit','FastAPI','Git / GitHub','REST APIs','Test-Driven Development','Embedded Systems'];
	return `${head({
		title: 'Josiah Brown | Software Engineer',
		description: 'Portfolio of Josiah Brown, a Software Engineering and Computer Science student building full-stack software, embedded systems, data projects, and engineering solutions.'
	})}
${header()}
<main>
	<section class="hero section-pad">
		<div class="shell hero-grid">
			<div class="hero-copy reveal">
				<p class="eyebrow">Software Engineering + Computer Science</p>
				<h1>I like building things that have to work <em>outside the demo.</em></h1>
				<p class="hero-lede">I’m Josiah Brown, a student at the University of Indianapolis. Most of my work lands somewhere between full-stack software, embedded systems, data, and whatever problem needs solving next.</p>
				<div class="hero-actions"><a class="button button-primary" href="#projects">See what I’ve built <span aria-hidden="true">↘</span></a><a class="button button-secondary" href="#experience">Experience</a></div>
				<div class="hero-stats" aria-label="Quick facts"><div><strong>4.00</strong><span>GPA</span></div><div><strong>2</strong><span>B.S. degrees</span></div><div><strong>2028</strong><span>Expected graduation</span></div></div>
			</div>
			<div class="hero-field reveal delay-1" aria-label="Areas of focus">
				<div class="field-mark" aria-hidden="true"><svg viewBox="0 0 260 260" role="presentation"><path d="M52 32v196M52 130h66M118 72v116M118 72l48 48-48 48M166 72v116M166 72h34l28 28-28 30 28 30-28 28h-34"/><path class="mark-faint" d="M32 52l20-20M32 208l20 20M208 32l20 20M208 228l20-20"/></svg></div>
				<div class="field-copy"><p class="field-kicker">Where I spend most of my time</p><ul class="field-list"><li><span>01</span> Full-stack software</li><li><span>02</span> Systems + embedded work</li><li><span>03</span> Data + APIs</li><li><span>04</span> Debugging the weird stuff</li></ul><p class="field-note">Readable code first. Fancy architecture only when it earns its keep.</p></div>
			</div>
		</div>
	</section>

	<section class="about section-pad section-subtle" id="about"><div class="shell two-col"><div class="section-heading reveal"><p class="section-label">About</p><h2>I’ve been programming since eighth grade. I never really stopped.</h2></div><div class="about-copy reveal delay-1"><p>What keeps me interested isn’t one language or framework. It’s taking a messy problem, figuring out how the pieces actually fit together, and leaving behind something another person can understand and maintain.</p><p>At UIndy I’ve worked across web development, APIs, data analysis, VR, embedded programming, and team engineering projects. I care about clean code and testing, but I care just as much about knowing why a system works—and being able to find the reason when it doesn’t.</p></div></div></section>

	<section class="portfolio-section section-pad" id="experience"><div class="shell"><div class="section-top reveal"><div><p class="section-label">Experience</p><h2>A mix of software, people, and real production work.</h2></div><p>Not all of it is software—and I think that’s useful. Each role changed how I communicate, troubleshoot, or work inside a larger system.</p></div><div class="card-grid">${experiences.map((item, i) => `<div class="reveal${i === 0 ? ' featured' : ''}">${card(item)}</div>`).join('')}</div></div></section>

	<section class="portfolio-section section-pad section-subtle" id="projects"><div class="shell"><div class="section-top reveal"><div><p class="section-label">Projects</p><h2>The ones that made me figure something out.</h2></div><p>These projects pushed past the clean textbook version of engineering and into actual constraints, tradeoffs, client needs, hardware, and team decisions.</p></div><div class="card-grid project-grid">${projects.map((item) => `<div class="reveal">${card(item)}</div>`).join('')}</div></div></section>

	<section class="skills-section section-pad" id="skills"><div class="shell skills-grid"><div class="section-heading reveal"><p class="section-label">Toolkit</p><h2>Tools I can actually sit down and work with.</h2><p class="section-intro">I’m happiest when I can understand the whole path: interface, backend, data flow, tests, and the system underneath it.</p></div>${skillList(coreSkills)}</div></section>

	<section class="education-section section-pad section-dark" id="education"><div class="shell education-grid"><div class="reveal"><p class="section-label light">Education</p><h2>University of Indianapolis</h2><p class="education-lede">A broad foundation across software engineering, computer science, mathematics, and engineering design.</p></div><div class="education-card reveal delay-1"><div class="degree-row"><span>01</span><div><strong>B.S. Software Engineering</strong><small>Expected May 2028</small></div></div><div class="degree-row"><span>02</span><div><strong>B.S. Computer Science</strong><small>Expected May 2028</small></div></div><div class="degree-row"><span>03</span><div><strong>Minor in Mathematics</strong><small>University of Indianapolis</small></div></div><div class="education-metrics"><div><strong>4.00 / 4.00</strong><span>GPA</span></div></div></div></div></section>
</main>
${footer()}`;
}

function detailPage(project) {
	const description = project.description.map((p) => `<p>${escapeHtml(p)}</p>`).join('');
	const highlights = project.highlights.map((h, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${escapeHtml(h)}</li>`).join('');
	return `${head({ title: `${project.title} | Josiah Brown`, description: project.summary, depth: 1 })}
${header(1)}
<main>
	<section class="detail-hero section-pad"><div class="shell detail-hero-grid"><div class="detail-copy reveal"><a class="back-link" href="../">← Portfolio</a><p class="eyebrow">${escapeHtml(project.eyebrow)}</p><h1>${escapeHtml(project.title)}</h1><p class="detail-lede">${escapeHtml(project.summary)}</p><div class="detail-meta"><span>${escapeHtml(project.category)}</span><span>${escapeHtml(project.period)}</span></div></div><div class="detail-visual reveal delay-1"><img src="../${escapeHtml(project.visual.replace(/^\//, ''))}" alt="${escapeHtml(project.visualAlt)}" /></div></div></section>
	<section class="detail-content section-pad section-subtle"><div class="shell detail-content-grid"><div class="prose reveal"><p class="section-label">01 / Work</p><h2>What I actually worked on</h2>${description}</div><aside class="detail-side reveal delay-1"><div class="info-panel"><p class="section-label">02 / Contributions</p><h2>What I was responsible for</h2><ul class="check-list">${highlights}</ul></div></aside></div></section>
	<section class="skills-detail section-pad"><div class="shell narrow reveal"><p class="section-label">03 / Skills</p><h2>Skills I used and strengthened</h2>${skillList(project.skills, 'detail-skills')}</div></section>
	<section class="next-section section-pad"><div class="shell next-card reveal"><div><p class="section-label">More work</p><h2>Back to the rest of the portfolio.</h2></div><a class="button button-primary" href="../#projects">View projects <span aria-hidden="true">↗</span></a></div></section>
</main>
${footer(1)}`;
}

const { portfolioItems, experiences, projects } = loadPortfolio();
fs.rmSync(docs, { recursive: true, force: true });
fs.mkdirSync(path.join(docs, 'assets'), { recursive: true });
copyRecursive(path.join(frontend, 'static'), docs);
fs.copyFileSync(path.join(frontend, 'src/app.css'), path.join(docs, 'assets/site.css'));
fs.writeFileSync(path.join(docs, '.nojekyll'), '');
fs.writeFileSync(path.join(docs, 'index.html'), homePage(experiences, projects));

for (const project of Object.values(portfolioItems)) {
	const dir = path.join(docs, project.slug);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, 'index.html'), detailPage(project));
}

fs.writeFileSync(path.join(docs, '404.html'), `${head({ title: 'Not Found | Josiah Brown', description: 'Page not found.' })}${header()}<main><section class="section-pad"><div class="shell narrow"><p class="section-label">404</p><h1>That page isn’t here.</h1><p class="hero-lede">The link may have moved. Head back to the portfolio and you should be good.</p><div class="hero-actions"><a class="button button-primary" href="./">Back to portfolio</a></div></div></section></main>${footer()}`);

console.log(`Built GitHub Pages site in ${path.relative(root, docs)}/ (${Object.keys(portfolioItems).length + 1} pages + 404)`);
