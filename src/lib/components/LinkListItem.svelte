<script>
    export let link;
</script>

<div>
    <ul>
        <li>
            {#if link.icon == null}
                <img src="./icons/icon-default.png" alt={link.name} />
            {:else}
                <img src={link.icon}  alt={link.name} />
            {/if}
        </li>
        <li><p>{link.name}</p></li>
        <li><a href={link.url}>{link.url}</a></li>
    </ul>
</div>

<style>
    div{
        background-color: black;
        color:white;
        border-radius: 5px;
        margin: 0 10px;
       
        & ul{
          list-style: none; 
          display: flex;
          flex-direction: row;
          align-items: center;
          gap:10px;
        }

        & img{
        width:60px;
        padding:3px;
        }
    }
    
    
    
    
</style>
