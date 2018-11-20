<template>
    <div id="app">
        <input type='number' @input='move'/>
        <div class='ball' :style="'top: ' + height + 'em'"></div>
    </div>
</template>


<script>
import TWEEN from '@tweenjs/tween.js'

export default {
    data() {
        return {
            height: 0
        }
    },

    methods: {
        move(event) {
            const newHeight = Number(event.target.value)
            const _this = this

            const animate = time => {
                requestAnimationFrame(animate)
                TWEEN.update(time)
            }

            new TWEEN.Tween({H: this.height})
                .easing(TWEEN.Easing.Bounce.Out)
                .to({H: newHeight}, 1000)
                .onUpdate(function(x) {
                    _this.height = x.H
                })
                .start()

            animate()
        }
    }
}
</script>


<style>
* {
  font-family: 'Lato';
}

.ball {
    width: 3em;
    height: 3em;
    background-color: 'red';
    border-radius: 3em;
}
</style>
