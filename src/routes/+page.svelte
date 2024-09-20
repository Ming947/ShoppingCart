<script>
  import {links} from "$lib/js/links";
  import LinkList from "$lib/components/LinkList.svelte";
  import SignupForm from "$lib/components/SignupForm.svelte";
  import Shoppingcart from "$lib/Shoppingcart.svelte";

  function handleSignUp(event){
    const {username, password} = event.detail;
    alert(`Username: ${username} \npassword:${password}`);
  }
  
</script>

<h1>CS719 - Svelte II</h1>

<h2>My Links</h2>
<!-- TODO Your links component here -->
<!-- <LinkListItem link ={links[0]} /> -->
<LinkList links={links} />

<h2>Sign up</h2>
<SignupForm on:submit={handleSignUp}/>

<h2>My todos</h2>
<!-- TODO Your todo list component here -->

