<template>
    <div>
        I have {{5 | currency}}
    </div>
    
</template>

<script>
import accounting from 'accounting'
export default {
    data() {
        return {}
    },

    filters: {
        currency(money) {
            return accounting.formatMoney(money)
        }
    }
}
</script>

<style>

</style>
