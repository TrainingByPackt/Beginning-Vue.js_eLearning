<template>
    <div>
        <p>Sound Level: {{levelText[level]}}</p>
        <p>{{output}}</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            levelText: [
                'Quiet',
                'Medium',
                'Loud',
                'Very Loud'
            ],

        }
    },



    props: {
        level: {
            type: Number,
            default: 0,
            required: true,
            validator(x) {
                return x >= 0 && x <= 3
            }
        },
        output: {
            type: String,
            required: true
    
        }
    }
}
</script>


<style>

</style>
