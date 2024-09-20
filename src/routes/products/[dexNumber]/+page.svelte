<script>
    import { itemStore } from "$lib/js/shoppingitem-store";
    import { page } from "$app/stores";
    $: product = $itemStore.find((a)=>a.dexNumber==$page.params.dexNumber)

</script>

<svelte:head>
    <title>{product ? product.name : "Product Not Found"}</title>
</svelte:head>

{#if product}
    <div>
        <h3>{product.name}</h3>
        <img src={product.imageUrl} alt={product.name}/>
        <p>${product.price}</p>
    </div>
{:else}
    <p>Not Found</p>
{/if}

<style>
    img{
        width:60px;
    }
</style>