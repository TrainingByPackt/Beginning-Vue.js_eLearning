<template>
    <div id='app'>
        <p>
            Transitions are awesom, careful<br/>
            please don't use them always.
        </p>
        <transition name='fade'>
            <img
                id='tree'
                src='http://i.imgur.com/QDpnaIE.png'
                v-show='show'
                @click='show = false'
            />

        </transition>
    </div>
    
</template>

<script>
import accounting from 'accounting'
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<style>
* {
    font-family: 'Lato';
}

#tree {
    position: absolute;
    left: 7.5em;
    top: 0em;
    cursor: pointer;
}

.fade-leave-active {
    transition: opacity 0.5s;
    opacity: 0;
}

</style>
