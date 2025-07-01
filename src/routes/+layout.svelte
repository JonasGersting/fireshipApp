<script>
  let { children } = $props();
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
  import "../app.css";
</script>


<div class="min-h-screen flex flex-col">
    {@render children?.()}
</div>
