import listCharacters from './components/list-characters.vue'
import addCharacter from './components/add-character.vue'
import singleCharacter from './components/single-character.vue'

export default [
  {path: '/', component: listCharacters},
  {path: '/add', component: addCharacter},
  {path: '/characters/:id', component: singleCharacter}
]
