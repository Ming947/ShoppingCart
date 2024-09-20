<script>
    import { addItem } from "$lib/js/shoppingitem-store";
    import ItemsDisplay from "./ItemsDisplay.svelte";
    

    function addItems(event){
        let itemName = event.detail;
        console.log(item);
    }

</script>

<ItemsDisplay on:addItem={addItems}/>
<h5>Shopping Cart:</h5>
<ul>
    <li>{itemName}</li>
    <!-- <li>{count}</li> -->
</ul>

