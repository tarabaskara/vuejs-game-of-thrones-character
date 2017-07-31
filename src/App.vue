<template>
  <div>
    <list-characters></list-characters>
  </div>
</template>

<script>
import addCharacter from './components/add-character.vue'
import listCharacters from './components/list-characters.vue'

export default {
  components:{
    'add-character': addCharacter,
    'list-characters': listCharacters
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
