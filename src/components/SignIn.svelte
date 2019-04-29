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

{#if $user}
<div>
  <span>Welcome {$user.email} </span>
  <button className="myButton" on:click="{signOut}">
    4. Sign Out
  </button>
</div>
{:else}
<button className="myButton" on:click="{signIn}">
  1. Sign In
</button>
{/if}
