<script>
export default {
  data() {
    return {
      tasks: [
        {
          name: "Ir a Icesi",
          isDone: false,
        },
        {
          name: "Aprender Vue",
          isDone: false,
        },
        {
          name: "Asistir a Clase",
          isDone: false,
        },
      ],
      showInstuctions: false
    };
  },
  methods: {
    onListItemClick(task) {
      task.isDone = !task.isDone;
    
    },
    onListHover(task) {
      this.showInstuctions = true;
    },
    onListLeave(task) {
      this.showInstuctions = false;
    },
  },
  computed: {
    finishedTasks() {
      return this.tasks.filter((item) => item.isDone);
    },
    unfinishedTasks() {
      return this.tasks.filter((item) => !item.isDone);
    },
  },
};
</script>

<template>
  <h3>Todas las tareas</h3>
  <ul>
    <li
      class="task"
      :class="{ 'task--selected': task.isDone }"
      v-for="task in tasks"
      :key="task.name"
      @click="() => onListItemClick(task)"
      @mouseenter="() => onListHover(task)"
      @mouseleave="() => onListLeave(task)"
    >
      {{ task.name }}
      <span v-if="task.isDone"> 😊 </span>
      <span v-else-if="task.name.includes('Icesi')"> 👀 </span>
      <span v-else>😢</span>
    </li>
  </ul>
  <h3>Tareas terminadas</h3>
  <ul>
    <li
      class="task"
      :class="{ 'task--selected': task.isDone }"
      v-for="task in finishedTasks"
      :key="task.name"
      @click="() => onListItemClick(task)"
    >
      {{ task.name }}
    </li>
  </ul>
  <h3>Tareas sin terminar</h3>
  <ul>
    <li
      class="task"
      :class="{ 'task--selected': task.isDone }"
      v-for="task in unfinishedTasks"
      :key="task.name"
      @click="() => onListItemClick(task)"
    >
      {{ task.name }}
    </li>
  </ul>

  <h3 v-if="showInstuctions"> Haga click sobre una tarea para marcarla como terminada</h3>
</template>

<style>
.task {
  color: black;
}

.task--selected {
  color: gray;
}

h3 {
  margin-top: 20px;
  font-weight: 500;
  color: darkmagenta;
}

li {
    margin-bottom: 25px;
}
</style>