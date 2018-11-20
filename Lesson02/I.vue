<template>
    <div id="app">
    <form>
        <fieldset>
            <legend>What printers you want to use?</legend>
            <label> 
                <input type="checkbox" v-model="outputPrinter" value="monochrome"/> 
                Monochrome
            </label>
            <br>
            <label> 
                <input type="checkbox" v-model="outputPrinter" value="plasma"/> 
                Plasma Color
            </label>
            <br>
            <label> 
                <input type="checkbox" v-model="outputPrinter" value="cloner"/> 
                3D DNA Cloner
            </label>
            <br>
            <input type="submit" value="Print now" />
        </fieldset>
    </form>
    {{ outputPrinter }}
    </div>
        
</template>

<script>
export default {
    data() {
        return {
            outputPrinter: []
        }
    },

    methods: {
        printHandler() {
            const printers = this.outputPrinter
            const result = printers.length ? printers.join(', ') : 'none'
        
            alert('printing with ' + result)
        }
    }
}
</script>

<style>

</style>
