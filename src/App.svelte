<script>
	import Instructions from './components/Instructions.svelte';
	import SignIn from './components/Signin.svelte';
	import AddCat from './components/AddCat.svelte';
	import ListCatFacts from './components/ListCatFacts.svelte';
	import {loggedIn$} from './Firebase.js'

	/* Make something more observable */
	const user = loggedIn$;
</script>
<style>
:global(div.flex-row){
	display: flex;
	justify-content: center;
	flex-flow: row wrap;
}
:global(div.flex-column){
	display: flex;
	justify-content: center;
	flex-flow: column;
}
.max-800{
	max-width: 800px;
}
</style>
 <div class="flex-row">
 <div class="flex-column">
	 <Instructions />
	 <SignIn user={user} />
	 <div>
		<AddCat user={user} />
		<ListCatFacts user={user} />
	  </div>
 </div>
</div>