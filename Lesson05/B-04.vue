<template>
    <div id="app">
        <h3>Write a new post</h3>
        <form>
            <div>
                <label>Title of your post:</label>
                <input type="text" v-model="title">
            </div>

            <div>
                <label>Write your thoughts for the day</label>
                <textarea v-model="body"></textarea>
            </div>

            <div>
                <button @click.prevent="submit">Submit</button>
            </div>
        </form>

        <h3>Response from the server</h3>
        <pre>{{ response | json }}</pre>
    </div>
                
</template>

<script>
import axios from 'axios'
export default {

    data() {
        return {
            userId: 1,
            title: '',
            body: '',
            response: '...'
        }
    },

    methods: {
        submit() {
            const data = {
                title: this.title,
                body: this.body,
                userId: this.userId
            }

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'post',
                headers: new Headers({'Content-Type': 'application/json;charset=UTF-8'}),
                body: JSON.stringify({
                    title: this.title,
                    body: this.body,
                    userId: this.userId
                })
            })
            .then(response => {
                const CREATED = 201
                if (response.status === CREATED) {
                    return response.json()
                } else {
                    return 'Error: ' + response.status
                }
            })
        } 
    }  
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
