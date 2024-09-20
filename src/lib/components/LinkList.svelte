<script>
    export let links = [];
    import LinkListItem from "./LinkListItem.svelte";
</script>

{#if links && links.length > 0 }
  {#each links as link (link.name)}
    <LinkListItem {link} />
  {/each}
{:else}
  <p>No links to show</p>
{/if}
