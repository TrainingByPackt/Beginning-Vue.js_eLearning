<template>
    <div id="app">
        <form @submit.prevent="getRates">
            <label>Insert date:
                <input type="date" v-model="date" />
            </label>

            <input type="submit" />
        </form>
        <output>{{CHFrate}}</output>
    </div>     
</template>

<script>
export default {

    data() {
        return {
            date: undefined,
            CHFrate: undefined
        }
    },

    methods: {
        getRates() {
            axios.get('https://api.fixer.io/' + this.date)

                .then(response => {
                    this.CHFrate = response.data.rates.CHF
                })
                
                .catch(error => {
                    this.CHFrate = 'There was an error: ' + error.message
                }) 
        }
     }    
}
</script>

<style>
</style>
