<template>
    <div>
        {{msg}}
        <Counter/>
    </div>
</template>

<script>

import Counter from './components/Counter.vue'

export default {
    name: 'app',
    components: {
        'Counter': Counter
    },
    data () {
        return {
            msg: 'Hello world',
        }
    }
}
</script>
<style>
</style>
