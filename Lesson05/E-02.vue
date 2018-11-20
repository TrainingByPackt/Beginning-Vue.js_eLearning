<template>
    <div id="app">
        <transition-group>
          <p v-bind:key='word' v-for="word in words">{{word}}</p>
        </transition-group>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    data() {
        return {
            bottom: false,
            words: []
        }
    },

    created () {
        window.addEventListener('scroll', () => {
            console.log('setting...')
            this.bottom = this.bottomVisible()
        })

        this.addWord()
    },

     mounted () {
        axios.interceptors.request.use(config => {
            const body = config.data.body.replace(/punk/i, '***')
            config.data.body = body
            return config
        })
    },

    methods: {
    
        bottomVisible () {
            const visibleHeight = document.documentElement.clientHeight
            const pageHeight = document.documentElement.scrollHeight
            const scrolled = window.scrollY
            const reachedBottom = visibleHeight + scrolled >= pageHeight
            return reachedBottom || pageHeight < visibleHeight
        },


        addWord () {
            axios.get('https://makemeapassword.org/api/v1/passphrase/plain')
                .then(response => {
                    this.words.push(response.data)
                    if (this.bottomVisible()) {
                        this.addWord()
                    }
                })
        }
    },

    watch: {
        bottom (bottom) {
            if (bottom) {
                this.addWord()
            }
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.v-enter-active {
  transition: all 1s;
}
.v-enter {
opacity: 0;
  transform: translateY(30px);
}


</style>