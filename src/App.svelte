<script lang="ts">
  import axios from "axios";
  import { onMount } from "svelte";
  import { functionId } from "./utils/functionId";
  import { v4 as uuid } from "uuid";
  import TailwindCss from "./TailwindCSS.svelte";

  $: state = {
    data: {
      discussions: {},
    },
  };

  const id = uuid();

  onMount(async () => {
    state = await axios({
      method: "get",
      url: `https://${functionId}.exm.run`,
    });

    console.log(state);
  });

  async function handleSubmit(e) {
    await axios({
      method: "post",
      url: `https://${functionId}.exm.run`,
      data: {
        type: "createDiscussion",
        discussion: {
          id: id,
          name: e.target.name.value,
          content: e.target.content.value,
        },
      },
    });

    state = await axios({
      method: "get",
      url: `https://${functionId}.exm.run`,
    });

    console.log(state);

    e.target.reset();
  }
</script>

<TailwindCss />

<header>
  <h1>Discussion Forum</h1>
</header>
<main>
  <form on:submit|preventDefault={handleSubmit}>
    <input type="text" name="name" placeholder="Anon" />
    <input type="text" name="content" placeholder="Discussion Topic" />
    <button type="submit">Add Topic</button>
  </form>
  <div>Discussions</div>
  {#each Object.values(state.data.discussions) as discussion}
    <div>{discussion.name}</div>
    <div>{discussion.content}</div>
  {/each}
</main>
