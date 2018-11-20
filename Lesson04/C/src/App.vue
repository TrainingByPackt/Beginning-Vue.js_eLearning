<template>
  <div id="app">
    <div class="wrapper">
      <input v-model='item'/>
      <button @click='add'>Add</button>
      
      <div style='display: flex'>
        <div>
          <note-card 
            v-for='item in list' 
            v-bind:key='item.id' 
            :remove='() => remove(item.id)'
            :title='item.name'/>
        </div>
        <div>
            <note-summary-list :list='list'/>
        </div>
      </div>
      
    </div>

  </div>
</template>

<script>
import NoteCard from './components/NoteCard.vue'
import NoteSummaryList from './components/NoteSummaryList.vue'
import Loading from './components/Loading.vue'

const AsyncComp = () => ({
  component: new Promise((resolve) => {
    setTimeout(() => {
      resolve(NoteSummaryList)
    }, 2000)
  }),
  loading: Loading,
  delay: 0
})


export default {
  name: 'app',
  components: {
    NoteCard,
    NoteSummaryList: AsyncComp
  },

  data() {
    return {
      item: ''
    }
  },

  computed: {
    list() {
      return this.$store.state.list
    }
  },

  methods: {
    add() {
      this.$store.commit('add', {
        id: Date.now(),
        name: this.item
      })

      this.item = ''
    },

    remove(id) {
      this.$store.commit('remove', id)
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

.wrapper {
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
  text-align: left;
}

input {
  padding: 10px;
  border: none;
  background: #f4f4f4;
}

button {
  border: none;
  padding: 10px 20px;
  background: #ff5f6d;
  margin-bottom: 20px;

}

</style>
