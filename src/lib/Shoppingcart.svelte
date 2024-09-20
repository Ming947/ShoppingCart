<script>
    import ProductItem from "./components/ProductItem.svelte";

    let productToAdd = null;

    function addItem(e){
        productToAdd = e.detail;
        console.log(productToAdd);
    }

</script>

<ProductItem on:itemClicked={addItem}/>
<p>Let's buy: {productToAdd}</p>