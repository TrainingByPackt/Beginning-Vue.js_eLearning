<template>
    <div id='app'>
        <input v-model='rawHtml'><br/>
        <span v-html='rawHtml'></span>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            htmlTexts: [
                'Dear John, <br/>thank you for the <pre>Batman vs Superman</pre> DVD!',
                'Dear John,<br/>thank you for <i>Ghostbusters 3</i>!',
                'Dear John,<br/>thanks, <b>Gods of Egypt</b> is my new favourite!'
            ]
        }
    }
}
</script>

<style>
* {
    font-family: 'Lato';
}
</style>
