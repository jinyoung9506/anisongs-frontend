<template>
    <div>
        <table class="table table-bordered" v-if="tableShow">
            <tr>
                <th>
                    Title
                </th>
                <th>
                    Artist
                </th>
                <th>
                    Number
                </th>
            </tr>
            <tr :key="ind" v-for="(dat, ind) in options">
                <td>
                    {{dat.title}}
                </td>                
                <td>
                    {{dat.artist}}
                </td>
                <td>
                    {{dat.number}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                options: [
                    {title:"Song",artist:"Artist",number:"00000"},
                ],
                tableShow: true,
            };
        },

        watch: {
            input1() {
                
            },
        },

        methods: {
            getData() {
                alert(this.input1);
            },
            setData() {
                this.input1 = "12345";
            },
            changeregion() {
                alert(this.region);
            }
        },
        beforeCreate() {
            
        },
        created() {
            
        },
        beforeMount() {
            
        },
        mounted() {
            
        },
        beforeUpdate() {
            
        },
        updated() {
            
        },
        beforeDestroy() {
            
        },
        destroyed() {
            
        },
    };
</script>