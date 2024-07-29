
<script setup>
    import HelloWorld from '../components/HelloWorld.vue'
    import TheWelcome from '../components/TheWelcome.vue'
    import prueba from '../components/prueba.vue'
    
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125" />

		<div class="wrapper">
			<HelloWorld msg="You did it!" />
		</div>
	</header>

	<main>
		<prueba respuesta="esta es mi respuesta" />

        
		<TheWelcome/>

	</main>
</template>