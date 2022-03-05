<template>
    <div>
        <table class="table table-bordered" v-if="tableShow">
            <tr>
                <th>
                    TitleInJapanese
                </th>
                <th>
                    TitleInKorean
                </th>
                <th>
                    NumberInTJ
                </th>
            </tr>
            <tr :key="ind" v-for="(dat, ind) in SongsList">
                <td>
                    {{dat.SongTitleInJapanese}}
                </td>                
                <td>
                    {{dat.SongTitleInKorean}}
                </td>
                <td>
                    {{dat.SongNumberInTJ}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default {
        name:'SongPage',
        data() {
            return {
                SongsList: [],
                tableShow: true,
            };
        },

        watch: {
            input1() {
                
            },
        },

        methods: {
            getSongs(name) {
                if (name != undefined) {
                    this.$axios
                    .get("https://cono-api.vercel.app/user/" + name, {
                        headers: {'Content-Type': 'application/json'},
                    })
                    .then((res) => {
                        console.log(res.data);
                        this.SongsList = res.data.Songs;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                    .finally(() => {
                        console.log("끝");
                    });
                }
                else {
                    console.log("User name Undefined");
                }
            },
        },
        beforeCreate() {
            
        },
        created() {
            this.getSongs(this.$route.params.id);
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