<script lang="ts">
    import type { PageData } from "./$types";
    interface Props {
        data: PageData;
    }

    let { data }: Props = $props();
</script>

<svelte:head>
    <title>@{data.username} Links</title>
    <meta name="description" content={data.bio} />
</svelte:head>

<main class="prose text-center mx-auto mt-8">
    <h1 class="text-7xl text-blue-600">
        @{data.username}
    </h1>

    <img
        src={data.photoURL ?? "/user.png"}
        alt="photoURL"
        width="256"
        class="mx-auto"
    />

    <p class="text-xl my-8">{data.bio ?? "no bio yet..."}</p>
    <ul class="list-none">
        {#each data.links as item}
            {@debug item}
        {/each}
    </ul>
</main>
