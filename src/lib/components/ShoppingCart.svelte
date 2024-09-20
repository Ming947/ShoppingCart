<script>
    import { addItem } from "$lib/js/shoppingitem-store";
    import ItemsDisplay from "./ItemsDisplay.svelte";


    function addItems(event){
        const {name, price} = event.detail;

    }

</script>

<button on:addItem={addItems}>look</button> 

