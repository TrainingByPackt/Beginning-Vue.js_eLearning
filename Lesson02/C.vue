<template>
    <div id="app"> 
        <h3>List of expensive experiments</h3> 
        <ul> 
            <li v-for="exp in experiments"> 
            {{exp.name}} ({{exp.cost}}m ) 
            </li> 
        </ul> 
    </div> 
    
</template>

<script>
export default {
    data() {
        return {
            experiments: [ 
                {name: 'RHIC Ion Collider', cost: 650, field: 'Physics'}, 
                {name: 'Neptune Undersea Observatory', cost: 100, field: 'Biology'}, 
                {name: 'Violinist in the Metro', cost: 3, field: 'Psychology'}, 
                {name: 'Large Hadron Collider', cost: 7700, field: 'Physics'}, 
                {name: 'DIY Particle Detector', cost: 0, field: 'Physics'} 
            ]
        }
    },

    computed: {
        nonPhysics() {
            return this.experiments
                .filter(exp => exp.field !== 'Physics')
        }
    }
}
</script>

<style>

</style>
