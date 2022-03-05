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
            <tr :key="ind" v-for="(dat, ind) in Songs">
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
        data() {
            return {
                Songs: [],
                tableShow: true,
                HOST:"https://cono-api.vercel.app",
                username: "KAMIZO",
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
            },
            getSongs() {
            this.$axios
            .get(this.HOST + "/user/" + this.username)
            .then((res) => {
                this.Songs = res.Songs;
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("끝");
            });
        },
        },
        beforeCreate() {
            
        },
        created() {
            this.getSongs();
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