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
                userName: "KAMIZO",
                userId: "",
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
                .get(this.HOST + "/user/" + this.userName, {
                    headers: {'Content-Type': 'application/json'},
                })
                .then((res) => {
                    console.log(res.data.UserId);
                    console.log(res.data.Songs);
                    this.Songs = res.data.Songs;
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log("끝") 
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