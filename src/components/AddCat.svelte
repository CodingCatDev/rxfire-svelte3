<script>
  import { firestore } from '../Firebase';
  import catFacts from '../random.js';
  export let user;
  const addCatFact = async () => {
    try {
      /* Gave up on the API working!!! */
      const value = catFacts[Math.floor(Math.random() * catFacts.length)];
      await firestore
        .collection('catfacts')
        .add({ ...value, uid: $user.uid, catFactDate: new Date() });
    } catch (error) {
      console.error(error);
    }
  };
</script>
<div class="flex-column">
  {#if $user}
  <button className="myButton" on:click="{addCatFact}">
    2. Add Cat Fact
  </button>
  {/if}
</div>
