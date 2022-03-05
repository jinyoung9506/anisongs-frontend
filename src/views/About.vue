<template>
    <div>
        <h1>
            Welcome to About page
        </h1>

        <input type="text" v-model="input1"/>
        <button type="button" @click="getData">
            Get
        </button>
        <button type="button" @click="setData">
            Set
        </button>

        <select class="form-control" v-model="region" @change="changeregion">
            <option :key="ind" :value="dat.v" v-for="(dat, ind) in options">
                {{dat.t}}
            </option>
        </select>

    </div>
</template>
<script>
     export default {
        data() {
            return {
                options: [
                    {v:"S",t:"Seoul"},
                    {v:"J",t:"Jeju"},
                    {v:"B",t:"Busan"},
                ],
                tableShow: true,
                HOST:"https://cono-api.vercel.app",
                username: "KAMIZO",
            };
        },

        getSongs() {
            this.$axios
            .get(HOST + "/user/" + username)
            .then((res) => {
                console.log(res.UserID);
                console.log(res.Songs.ongTitleInKorean);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("끝");
            });
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