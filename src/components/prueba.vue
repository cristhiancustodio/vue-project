<script>
export default {
    name: "MyComponente",
    props: {
        respuesta: {
            type: String,
        }
    },
    mounted() {

    },
    data() {
        return {
            mensajito: "jejeje",
            listado: [1, 2, 3, 4, 5, 6],
        }
    },
    methods: {
        obtenerlistado() {
            this.listado.unshift(66);
        }
    }
}
</script>
<template>
    <div>
        buenas noches
        <button type="button" @click="obtenerlistado()">traer datos</button>

        {{ mensajito }}

        {{ respuesta }}
        {{ respuesta }}
        {{ respuesta }}
        {{ respuesta }}
        {{ respuesta }}
        <table>
            <tr v-for="item in listado">
                <td>{{ item }}</td>
            </tr>
        </table>
    </div>
</template>