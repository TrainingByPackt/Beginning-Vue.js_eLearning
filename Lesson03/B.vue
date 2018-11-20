<template>
    <div id="app"> 
        <button @click="taxiCalled = true"> 
            Call a cab 
        </button> 
        <button @click="taxiCalled = false"> 
            Cancel call 
        </button>

        <transition  
            enter-class="slideInRight"  
            enter-active-class="go" 
            leave-class="leave" 
            leave-active-class="slideOutLeft"> 
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
