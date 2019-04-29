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
<h3>Firestore Collection "catfacts"</h3>
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
