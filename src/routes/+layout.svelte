<script>
  import "$lib/css/app.css";
  import {page} from "$app/stores";
  import { itemStore } from "$lib/js/shoppingitem-store";
  
</script>

<div class="container">
  <slot />
</div>

<style>
  .container {
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
</style>
