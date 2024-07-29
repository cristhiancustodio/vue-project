<template>
    <table>
        <tr v-for="item in lista" >
            <td> {{ item }} </td>
        </tr>

    </table>
</template>


<script>
export default{
    data(){
        return{
            lista : [1,2,3,4,5,6,6],
        }
    }
}

</script>