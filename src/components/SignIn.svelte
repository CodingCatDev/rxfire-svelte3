<script>
  import firebase, { app } from '../Firebase';

  /* this is like props */
  export let user;

  const signIn = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider();
    app.auth().signInWithPopup(authProvider);
  };
  const signOut = async () => {
    await firebase.auth().signOut();
  };
</script>
<div class="flex-column">
  {#if $user}
  <h1>
    Welcome {$user.email}
    <button className="myButton" on:click="{signOut}">
      4. Sign Out
    </button>
  </h1>
  {:else}
  <button className="myButton" on:click="{signIn}">
    1. Sign In
  </button>
  {/if}
</div>
