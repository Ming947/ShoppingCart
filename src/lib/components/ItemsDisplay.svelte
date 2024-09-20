<script>
    import {addItem, itemStore} from "$lib/js/shoppingitem-store";
    import { goto } from '$app/navigation'; // 导入goto函数
    import {createEventDispatcher} from "svelte";
    const dispatch = createEventDispatcher();
  
    function viewProduct(dexNumber) {
        goto(`/products/${dexNumber}`); // 跳转到动态路由
    }
    function addItemToCart(item){
        dispatch("addItem",{name:item.name, price: item.price})
    }
</script>

<div>
    <ul>
        {#each $itemStore as item(item.dexNumber)}
            <li>
                <span>{item.name}</span>
                <button on:click={() => viewProduct(item.dexNumber)}>SHOW</button>
                <button on:click={()=> addItemToCart(item)}>ADD</button>
            </li>
        {/each}
    </ul>
</div>

<style>
    ul {
        list-style: none;
    }
    
</style>