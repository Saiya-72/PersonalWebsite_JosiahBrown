<script lang="ts">
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';
	import { portfolioItems } from '$lib/data/portfolio';

	const project = portfolioItems.plantWateringSystem;
</script>

<ProjectDetail {project} />
