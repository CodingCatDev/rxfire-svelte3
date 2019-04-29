<script>
  import { collectionData, firestore } from '../Firebase';
  import { BehaviorSubject } from 'rxjs';

  const catFactsRef = firestore.collection('catfacts');
  const catFacts = new BehaviorSubject([]);

  export let user;

  collectionData(
    catFactsRef.orderBy('catFactDate', 'desc'),
    'catFactId'
  ).subscribe(facts => catFacts.next(facts));
</script>
<style>
  .flex-row {
    justify-content: left;
  }
</style>
<div class="flex-column max-800">
  <h3>Firestore Collection "catfacts"</h3>
  <div>
    {#each $catFacts as catFact}
    <div>
      {#if $user && $user.uid === catFact.uid}
      <span role="img" aria-label="fun-cat">
        😻
      </span>
      {:else}
      <span role="img" aria-label="fun-cat">
        😺
      </span>
      {/if}
      <span>{catFact.text}</span>
    </div>
    {/each}
  </div>
</div>
