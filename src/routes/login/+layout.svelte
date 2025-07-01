<script lang="ts">
    import { page } from "$app/stores";
    import AnimatedRoute from "$lib/components/AnimatedRoute.svelte";
</script>

<nav class="flex justify-center my-6">
    <ul class="steps">
        <a href="/login" class="step step-accent">Sign In</a>
        <a
            href="/login/username"
            class="step"
            class:step-accent={$page.route.id?.match(/username|photo/g)}
        >
            Choose Username
        </a>
        <a
            href="/login/photo"
            class="step"
            class:step-accent={$page.route.id?.includes("photo")}
        >
            Upload Photo
        </a>
    </ul>
</nav>

<AnimatedRoute>
    <main class="card bg-blue-500 w-96 shadow-sm mx-auto my-6">
        <div class="card-body items-center text-center">
            <slot />
        </div>
    </main>
</AnimatedRoute>
