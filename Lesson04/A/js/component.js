
<div class='light-bulb'>
    <div id="app">
        <p>💡light-bulb</light-bulb><p>
        <p>💡light-bulb</light-bulb><p>
        <p>💡light-bulb</light-bulb><p>
    </div>

- - - - - - - 

// define component before vue instance 

// talk about back ticks in es6


/*

"In Vue, a component is essentially a Vue instance with predefined options."


differences bettwen instance and component:
the template option on the component defines the mark up for the for component
where as in the instamce, the el property defines where the component will go

*/

Vue.component('light-bulb', {
    template: `
<div class='light-bulb'> <p>💡Eureka!</p>
</div> `
})


new Vue({
    el: '#app'
})




- - - - - - - - - - - - - 
/* 

where ever u have the light-bulb used as a tag
thats were the template will be mounted



when u define a component, it will turn into kebab case
even if u define it as camelCase

*/

<div id="app">
    <light-bulb></light-bulb>
    <light-bulb></light-bulb>
    <light-bulb></light-bulb>
</div>

- - - - 
            