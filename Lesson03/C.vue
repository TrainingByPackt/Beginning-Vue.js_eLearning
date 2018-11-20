<template>
    <div id="app"> 
        <button @click="taxiCalled = true"> 
            Call a cab 
        </button> 

        <transition @enter='enter' :css='false'>
            <p v-if="taxiCalled">🚕</p> 
        </transition> 
    </div> 
</template>

<script>
import velocity from 'velocity-animate'

export default {
    data() {
        return {
            taxiCalled: false
        }
    },

    methods: {
        enter(el) {
            velocity(
                el,
                {
                    opacity: [1,0],
                    translateX: ['0px', '100px']
                },
                {
                    duration: 2000,
                    easing: 'ease-out'
                }
            )

        }
    }
}
</script>


<style>
.slideInRight { 
  transform: translateX(200px); 
} 
.go { 
  transition: all 2s ease-out; 
} 
.slideOutLeft { 
  transform: translateX(200px); 
  transition: all 2s ease-in; 
} 
.leave { 
  transform: translateX(0px); 
} 
</style>
