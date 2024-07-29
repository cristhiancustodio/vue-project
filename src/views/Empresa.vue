<template>
    <div>
        <h1>Esta es una vista de la empresa {{ nombre }}  </h1>
    </div>
</template>


<script>
export default {
    data(){
        return {
            nombre : this.$route.params.nombre
        }
    },
    mounted() {
        if(this.nombre === "cristhian"){
            this.nombre = this.nombre + " agregado";
        }
    },
}


</script>