<template>
    <div id="app">
        <h2>Latest Bitcoin price.</h2>
        <p>{{price}}</p>
    </div>
        
</template>

<script>
export default {

    data() {
        return {
            price: 'loading...'
        }
    },

    created () {
        axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR')
            .then(response => {
                this.price= response.data[0].price_eur
            })
            .catch(error => {
                this.price= 'There was an error: ' + error.message
            })
    }
    
}
</script>

<style>
</style>
