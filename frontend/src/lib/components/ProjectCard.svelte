<script lang="ts">
	import type { PortfolioItem } from '$lib/data/portfolio';

	export let item: PortfolioItem;
</script>

<a class="project-card" href={`/${item.slug}`}>
	<div class="card-visual">
		<img src={item.visual} alt={item.visualAlt} loading="lazy" />
	</div>
	<div class="card-body">
		<div class="card-meta">
			<span>{item.eyebrow}</span>
			<span>{item.period}</span>
		</div>
		<h3>{item.title}</h3>
		<p>{item.summary}</p>
		<div class="card-footer">
			<div class="mini-skills" aria-label="Featured skills">
				{#each item.skills.slice(0, 3) as skill}
					<span>{skill}</span>
				{/each}
			</div>
			<span class="arrow" aria-hidden="true">↗</span>
		</div>
	</div>
</a>
