<template>
  <div id="app">
    <ul>
      <taxon :tree="living" taxon="living"></taxon>
    </ul>
 
  </div>
</template>

<script>
import Taxon from './components/Taxon'

export default {
  name: 'app',
  components: {
    Taxon
  },
  data() {
    return {
      living: {
        animals: {
          invertebrates: {
            crab: null,
            bee: null,
            ant: null
          },
          vertebrates: {
            fish: {
              shark: null
            },
            mammals: {
              rabbit: null,
              rat: null
            }
          }
        },
        plants: {
          flowering: {
            maize: null,
            paddy: null
          },
          'non-flowering': {
            algae: {
              seaweed: null,
              spirogyra: null
            },
            fungi: {
              yeast: null,
              mushroom: null
            },
            moss: null,
            fern: null
          }
        }
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
</style>
