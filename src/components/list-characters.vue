<template>
  <div id="list-characters">
    <h1>All Characters</h1>
    <div v-for="character in characters" class="single-character">
      <h2>{{character.name}}</h2>
      <h3>House of {{character.house}}</h3>
      <p>{{character.description}}</p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      characters: []
    }
  },
  methods: {

  },
  created (){
    this.$http.get('http://localhost:3000/characters').then(function(data){
      console.log(data);
      this.characters = data.body
    })
  }
}
</script>

<style>
#list-characters{
  max-width: 800px;
  margin: 0 auto;
}
.single-character{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

</style>
