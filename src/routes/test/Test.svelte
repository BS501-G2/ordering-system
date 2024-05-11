<script lang="ts">
	import type { Snippet } from "svelte";

  const { test }: { test: Snippet } = $props()
</script>

{@render test()}
