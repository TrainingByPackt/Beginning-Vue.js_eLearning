<template>
    <div id="app">
        <button @click="taxiCalled = true">
            Call a cab
        </button>
        <transition enter-active-class="animated slideInRight">
            <p v-if="taxiCalled">🚕</p>
        </transition>
    </div>
</template>


<script>
export default {
    data() {
        return {
            taxiCalled: false
        }
    }
}
</script>