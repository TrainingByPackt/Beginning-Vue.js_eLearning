<template>
    <div id="app">
        <form @submit.prevent="vueSubmit">

            <div>
                <label>Name</label>
                <input type="text" required>
            </div>

            <div>
                <label>Email</label>
                <input type="email" required>
            </div>

            <div>
                <label>Submit</label>
                <button type="submit">Submit</button>
            </div>

        </form>
    </div>
        
</template>

<script>
export default {

    data() {
        return {
            price: 'loading...'
        }
    },

    methods: {
        vueSubmit() {
            console.info('fake AJAX request')
        }
    }    
}
</script>

<style>

</style>
