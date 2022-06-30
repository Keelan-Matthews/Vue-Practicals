<!-- Keelan Matthews 21549967 -->
<template>
    <div class="post">
        <h3>ID: {{id}}</h3>
        <p class="title">{{name}}</p>
        <p>Email: {{email}}</p>
    </div>
</template>

<script>

export default {
    name: 'UserItem',
    props: ['id','name', 'email']
}
</script>

<style scoped>
    .post {
        background-color: rgb(39, 39, 39);
        padding: 20px;
        border-radius: 10px;
        color: white;
        margin: 10px;
    }

    h3 {
        color:rgb(75, 194, 254);
    }

    .title {
        font-weight: bold;
    }
</style>

