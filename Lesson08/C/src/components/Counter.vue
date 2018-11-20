<template>
    <div>
        <button @click="counter++">{{counter}}</button>
    </div>
</template>
<script>
export default {
    name: 'Counter',
    data () {
        return { counter: 0 }
    }
}
</script>