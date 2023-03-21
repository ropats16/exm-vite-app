<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Read from "./lib/Read.svelte";
  import { functionData } from "./lib/stores";
  import Write from "./lib/Write.svelte";
  import axios from "axios";
  import { functionId } from "./utils/functionId";
</script>

<header>
  <h1>User Registry</h1>
</header>
<main>
  <Write />
  {#await axios({ method: "get", url: `https://${functionId}.exm.run` })}
    <div>Loading..</div>
  {:then readTx}
    {#each Object.keys(readTx.data) as key}
      <div>{key}</div>
      {#each readTx.data[key] as user}
        <div>{JSON.stringify(user)}</div>
      {/each}
    {/each}
  {/await}
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  div {
    padding: 20px;
  }
</style>
