<script lang="ts">
	import type { PortfolioItem } from '$lib/data/portfolio';

	export let project: PortfolioItem;
</script>

<svelte:head>
	<title>{project.title} | Josiah Brown</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<main>
	<section class="detail-hero section-pad">
		<div class="shell detail-hero-grid">
			<div class="detail-copy reveal">
				<a class="back-link" href="/">← Portfolio</a>
				<p class="eyebrow">{project.eyebrow}</p>
				<h1>{project.title}</h1>
				<p class="detail-lede">{project.summary}</p>
				<div class="detail-meta">
					<span>{project.category}</span>
					<span>{project.period}</span>
				</div>
			</div>

			<div class="detail-visual reveal delay-1">
				<img src={project.visual} alt={project.visualAlt} />
			</div>
		</div>
	</section>

	<section class="detail-content section-pad section-subtle">
		<div class="shell detail-content-grid">
			<div class="prose reveal">
				<p class="section-label">01 / Work</p>
				<h2>What I actually worked on</h2>
				{#each project.description as paragraph}
					<p>{paragraph}</p>
				{/each}
			</div>

			<aside class="detail-side reveal delay-1">
				<div class="info-panel">
					<p class="section-label">02 / Contributions</p>
					<h2>What I was responsible for</h2>
					<ul class="check-list">
						{#each project.highlights as highlight, index}
							<li><span>{String(index + 1).padStart(2, '0')}</span>{highlight}</li>
						{/each}
					</ul>
				</div>
			</aside>
		</div>
	</section>

	<section class="skills-detail section-pad">
		<div class="shell narrow reveal">
			<p class="section-label">03 / Skills</p>
			<h2>Skills I used and strengthened</h2>
			<div class="skill-list detail-skills">
				{#each project.skills as skill, index}
					<span><small>{String(index + 1).padStart(2, '0')}</small>{skill}</span>
				{/each}
			</div>
		</div>
	</section>

	<section class="next-section section-pad">
		<div class="shell next-card reveal">
			<div>
				<p class="section-label">More work</p>
				<h2>Back to the rest of the portfolio.</h2>
			</div>
			<a class="button button-primary" href="/#projects">View projects <span aria-hidden="true">↗</span></a>
		</div>
	</section>
</main>
