<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleClick(item) {
        dispatch("itemClicked",item);
    }

     const itemNames = ["car", "food", "cloth"];
</script>

{#each itemNames as item}
    <!-- <button on:click={()=>handleClick(item)}>{item}</button> -->
    <button on:click={handleClick}>{item}</button>
{/each}
