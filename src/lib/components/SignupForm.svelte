<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let username="";
  let password="";
  let repeatPassword="";
  $: passwordsMatch = password ===repeatPassword;

  $: formValid =(username.length >= 4)&&(password.length >= 6)&&passwordsMatch;

  function submit(event){
    event.preventDefault();

    if(!formValid){
      alert(`Something wrong`);
    }else{
      dispatch('submit',{username, password});
    }
  }
</script>

<div>
  <form on:submit={submit}>
    <label for="input-username">Username:</label>
    <input
      id="input-username"
      type="text"
      placeholder="username"
      name="username"
      required
      autocomplete="username"
      bind:value={username}
    />
    {#if username && username.length < 4}
      <span>Username at least 4 characters</span>
    {/if}
    <label for="input-password">Password:</label>
    <input
      id="input-password"
      type="password"
      name="password"
      required
      autocomplete="new-password"
      bind:value={password}
    />
    {#if password && password.length < 6}
      <span>At least 6 digits</span>
    {/if}
    <label for="repeat-password">Repeat password:</label>
    <input
      id="repeat-password"
      type="password"
      name="repeatPassword"
      required
      autocomplete="new-password"
      bind:value={repeatPassword}
    />
    {#if !passwordsMatch}
      <span>Passwords must match!</span>
    {/if}

    <button type="submit" disabled={!formValid} >Submit</button>
  </form>
</div>

<style>
  div {
    display: flex;
  }

  form {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 1rem;
  }

  label {
    text-align: right;
    grid-column: 1 / 2;
  }

  input {
    grid-column: 2 / 3;
  }

  span {
    color: red;
    font-style: italic;
    grid-column: 3 / 4;
    font-size: 0.7rem;
    align-self: center;
    margin-left: -0.8rem;
  }

  button {
    grid-column: 1 / 3;
  }
</style>
