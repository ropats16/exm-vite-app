<script>
  import axios from "axios";
  import { functionId } from "../utils/functionId.js";
  import { functionData } from "./stores.js";

  let posts;

  functionData.subscribe((value) => {
    posts = value;
  });
</script>

{#each Object.keys(posts.data.users) as key}
  {#each posts.data[key] as user}
    <div>{key}</div>
    <div>{JSON.stringify(user)}</div>
  {/each}
{/each}
