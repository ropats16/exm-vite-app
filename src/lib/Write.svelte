<script>
  import axios from "axios";
  import { functionId } from "../utils/functionId.js";
  import { functionData } from "./stores.js";

  let name = "Anon";
  let content = "Cheers!";

  async function handleClick() {
    await axios({
      method: "post",
      url: `https://${functionId}.exm.run`,
      data: { username: { name, content } },
    });

    // const txData = await axios({
    //   method: "get",
    //   url: `https://${functionId}.exm.run`,
    // });

    // functionData.update(txData.data);

    // name = "";
  }
</script>

<input bind:value={name} />
<input bind:value={content} />

<button on:click={handleClick}> Click me </button>
