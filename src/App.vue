<template>
	<nav>
		<div id="nav">
			<router-link to="/bienvenido" >Bienvenido</router-link>
			<router-link to="/iteracion" >Inicio</router-link>
			<router-link to="/home" >Hombe</router-link>
			<router-link to="/about" >Nosotros</router-link>
			<router-link to="/empresas" >Empresas</router-link>
		</div>
		<div>
			<button @click="redirect()" >izquierida</button>
			<button @click="back()" >centro</button>
			<button @click="forward()" >derecha</button>
		</div>
	</nav>
	<br>
	<main>
		<router-view></router-view>
	</main>
</template>
<script>
export default {
	methods: {
		redirect(){

			this.$router.go(-1);
		},
		back(){
			this.$router.push({ name : "bienvenido" });
		},
		forward(){
			this.$router.go(1);
		}
	},
}
</script>
<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
