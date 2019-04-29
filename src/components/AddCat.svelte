<script>
  import { firestore } from '../Firebase';
  export let user;
  const addCatFact = async () => {
    try {
      /* The dreaded CORS, had to pass through a proxy */
      const blob = await fetch(
        `https://cors-anywhere.herokuapp.com/https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`
      );
      const value = await blob.json();
      await firestore
        .collection('catfacts')
        .add({ ...value, uid: $user.uid, catFactDate: new Date() });
    } catch (error) {
      console.error(error);
      await firestore.collection('catfacts').add({
        text: `API Failed so, Random cat fact #${Math.round(
          Math.random() * 1000000
        )}`,
        uid: $user.uid,
        catFactDate: new Date()
      });
    }
  };
</script>

{#if $user}
<button className="myButton" on:click="{addCatFact}">
  2. Add Cat Fact
</button>
{/if}
