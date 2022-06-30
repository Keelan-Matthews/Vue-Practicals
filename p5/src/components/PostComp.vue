<!-- Keelan Matthews 21549967 -->
<template>
    <div id="container">
        <div>
            <h1>Posts</h1>
            <div class="post-container">
                <PostItem v-for="(info, index) in data"
                        :key="index"
                        :id="info.userId"
                        :title="info.title"
                        :body="info.body" />
            </div>
        </div>
        <div class="message-container">
            <div>
                <div class="d-flex">
                    <input v-model="id" type="text" name="idInput" id="idInput" placeholder="ID"/>
                    <input v-model="title" type="text" name="titleInput" id="titleInput" placeholder="Title"/>
                </div>
                <input v-model="body" type="text" name="bodyInput" id="bodyInput" placeholder="Body"/>
            </div>
            <div class="button-container">
                <button v-on:click="getReq">Get</button>
                <button v-on:click="postReq">Post</button>
                <button v-on:click="putReq">Put</button>
                <button v-on:click="patchReq">Patch</button>
                <button v-on:click="deleteReq">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem';

export default {
    name: 'PostComp',
    components: {
        PostItem
    },
    data() {
        return {
            id: null,
            title: null,
            body: null,
            data: []
        }
    },
    methods: {
       getReq() {
           fetch("https://jsonplaceholder.typicode.com/posts?userId="+this.id)
           .then(res=>res.json())
           .then(data=>(this.data = data));
           console.log(this.data);
       },
       postReq() {
           const options = {
               method: "POST",
               header: {"Content-Type": "application/json; charset=UTF-8"},
               body: JSON.stringify({
                   userId: this.id,
                   title: this.title,
                   body: this.body
               })
           }

           fetch("https://jsonplaceholder.typicode.com/posts", options)
           .then(res=>res.json())
           .then(data=>(this.data = data));
       },
       putReq() {
           const options = {
               method: "PUT",
               header: {"Content-Type": "application/json; charset=UTF-8"},
               body: JSON.stringify({
                   userId: this.id,
                   title: this.title,
                   body: this.body
               })
           }

           fetch("https://jsonplaceholder.typicode.com/posts/"+this.id, options)
           .then(res=>res.json())
           .then(data=>(this.data = data));
       },
       patchReq() {
           const options = {
               method: "PATCH",
               header: {"Content-Type": "application/json; charset=UTF-8"},
               body: JSON.stringify({
                   body: this.body
               })
           }

           fetch("https://jsonplaceholder.typicode.com/posts/"+this.id, options)
           .then(res=>res.json())
           .then(data=>(this.data = data));
       },
       deleteReq() {
           const options = {
               method: "DELETE"
           }

           fetch("https://jsonplaceholder.typicode.com/posts/"+this.id, options)
           .then(res=>res.json())
           .then(data=>(this.data = data));
       },
    }
}
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    h1 {
        color: white;
        text-align: center;
    }

    #container {
        height: 100vh;
        background-color: rgb(52, 52, 52);
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        padding-bottom: 100px;
    }

    .d-flex {
        display: flex;
        margin-bottom: 20px;
    }

    input {
        height: 40px;
        padding-left: 10px;
        font-size: 20px;
        border: 0;
        color: white;
        border-radius: 10px;
        background-color: rgb(71, 71, 71);
    }

    #bodyInput {
        width: 100%;
        border: 0;
        color: white;
        border-radius: 10px;
        background-color: rgb(71, 71, 71);
    }

    #idInput {
        width: 50px;
        margin-right: 20px;
    }

    .message-container {
        background-color: rgb(39, 39, 39);
        padding: 20px;
        border-radius: 10px;
    }

    .button-container {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }

    button {
        width: 150px;
        height: 40px;
        border-radius: 6px;
        background-color: rgb(59, 184, 88);
        color: white;
        font-size: 14px;
        font-weight: bold;
    }

    .post-container {
        overflow-y:auto;
        height: 60vh;
    }
</style>