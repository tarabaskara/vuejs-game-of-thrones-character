<template>
  <div id="single-character">
    <h1>{{character.name}}</h1>
    <h2>{{character.house}}</h2>
    <p>{{character.description}}</p>
  </div>
</template>

<script>
export default {

  data () {
    return {
      id: this.$route.params.id,
      character: {}
    }
  },
  methods: {

  },
  created() {
    this.$http.get('http://localhost:3000/characters/'+ this.id).then(function(data){
      this.character = data.body
    })
  }
}
</script>

<style scoped>
#single-character{
  max-width: 960px;
  margin: 0 auto;
}
</style>
