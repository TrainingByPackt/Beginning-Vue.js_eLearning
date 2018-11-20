<template>
    <div id="app">
        <h3>Bus station simulator</h3>
        <transition-group tag='p' name='station'>
            <span v-for='bus in buses' :key='bus'>Bus</span>
        </transition-group>
    </div>
</template>


<script>
export default {
    data() {
        return {
            buses: [1,2,3,4,5],
            nextBus: 6
        }
    },

    mounted() {
        setInterval(() => {
            const headOrTail = () => Math.random() > 0.5
            if (headOrTail()) {
                this.buses.push(this.nextBus)
                this.nextBus += 1
            } else {
                this.buses.splice(0,1)
            }
        }, 2000)
    }
}
</script>


<style>
* {
  font-family: 'Lato';
}

.station-enter-active, .station-leave-active {
  transition: all 2s;
  position: absolute;
}

.station-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}

.station-enter {
    opacity: 0;
    transform: translateX(30px);
}

.station-move {
    transition: 2s;
}

span {
    display: inline-block;
    margin: 3px;
}
</style>
