<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addCharacter from './components/add-character.vue'
import listCharacters from './components/list-characters.vue'
import header from './components/header.vue'

export default {
  components:{
    'add-character': addCharacter,
    'list-characters': listCharacters,
    'app-header': header
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>
