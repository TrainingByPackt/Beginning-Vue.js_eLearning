<template>
    <div id="app">
        <h3>Sticky messages</h3>
        <ol>
            <li v-for="message in messages">
                <button @click="deleteItem(message._id)">Delete</button>
                <button @click="edit(message._id, message.text)">
                Edit
                </button>
                <input v-model="message.text">
            </li>
        </ol>
        <input v-model="toAdd">
        <button @click="add">add</button>
    </div>
</template>

<script>
const url = 'http://localhost:3030/messages/'
export default {
    data() {
        return {
            messages: [],
            toAdd: ''
        }
    },

    created () {
        axios.get(url)
            .then(response => {
                this.messages = response.data.data
            })
    },

    methods: {
        add () {
            axios
                .post(url, {
                    text: this.toAdd
                })
                .then(response => { 
                    this.messages.push(response.data)
                    this.toAdd = ''
                })
        },

        deleteItem (id) {
            axios
                .delete(url + id)
                .then(response => {
                    this.messages.splice(
                    this.messages.findIndex(e => e._id === id), 1)
                })
        },

        edit (id, text) {
            axios
                .put(url + id, {
                    text
                })
                .then(response => {
                    console.info(response.status)
                })
        }
    }
}
</script>
