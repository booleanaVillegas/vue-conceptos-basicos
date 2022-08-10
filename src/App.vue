<script>
import ToDoList from './components/ToDoList.vue'

export default {
  components:{
    ToDoList
  }
}

</script>

<template>
  <header>
  <h2> To Do List </h2>
  </header>

  <main>
    <ToDoList />
  </main>
</template>

<style scoped>
header {
  width: 100%;
  background-color: blueviolet;
  color: white;
  text-align: center;
}

h2 {
  text-align: center;
}
</style>
