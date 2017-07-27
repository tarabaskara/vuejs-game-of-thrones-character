<template>
  <div id="add-character">
    <h2>Add a New Character</h2>
    <form>
      <label>Name:</label>
      <input type="text" v-model.lazy='gotChar.name' required />
      <label>House:</label>
      <select v-model="gotChar.house">
        <option v-for="house in houses">{{ house }}</option>
      </select>
      <label>Description:</label>
      <textarea v-model.lazy='gotChar.description'></textarea>
    </form>
    <div id="preview">
      <h3>Preview</h3>
      <p>Name: {{gotChar.name}}</p>
      <p>House: {{gotChar.house}}</p>
      <p>Description:</p>
      <p>{{gotChar.description}}</p>
    </div>
  </div>
</template>

<script>
export default {

  data () {
    return {
      gotChar: {
        name: '',
        description: '',
        house: ''
      },
      houses: ['Stark','Tully','Arryn','Lannister','Baratheon','Tyrell','Martell']
    }
  },
  methods: {

  }
}
</script>

<style>
#add-character *{
    box-sizing: border-box;
}
#add-character{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
}
#checkboxes label{
  display: inline-block;
  margin-right: 10px;
}
</style>
