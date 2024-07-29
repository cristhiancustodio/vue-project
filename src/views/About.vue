<script setup>
    import Prueba from '../components/prueba.vue'


    import  exportado  from '../js/pruebaApp.js'


</script>

<script>
export default {
    data(){
        return {
            mi_nombre: 'cristhian custodio'
        }
    },
    mounted() {
        exportado.clickeando();
    },
    methods: {
        click(){
            exportado.clickeando2()
        }
    },
}
</script>
<template>
    <div>
        <h1>Este es acerca de nosotros jeje {{ mi_nombre }}</h1>
        <button @click="click()" >aqui</button>
        <button @click="exportado.clickeando()" >aqui</button>
    </div>


    <Prueba />
</template>
