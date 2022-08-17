<script>
import ToDoList from './components/ToDoList.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    ToDoList,
    Modal
  },
  data(){
    return {
      showModal1: false,
      showModal2: false,
      purpleTitle: 'purple'
    }
  },
  methods: {
    openModal1(){
      this.showModal1 = true
    },
    closeModal1() {
      this.showModal1 = false
    },
    openModal2(){
      this.showModal2 = true
    },
    closeModal2() {
      this.showModal2 = false
    }
  }
}

</script>

<template>
  <header>
    <h2> To Do List </h2>
  </header>

  <main>
    <ToDoList />
    <button @click="openModal1"> Abrir modal 1 </button>
    <button @click="openModal2"> Abrir modal 2 </button>
    <Modal titleColor="blue" :showButton="true" title="Hola soy un modal 1" v-if="showModal1" @close="closeModal1">
    <h2> Un subtitulo</h2>
    <p> Lorem ipsum dolor sit amet <a href="/"> consectetur adipisicing elit. </a>  Aperiam dolorem blanditiis inventore. Illo repellat nulla sequi amet quisquam perferendis mollitia quibusdam illum molestiae,
     adipisci repudiandae nostrum doloremque animi vero impedit?</p>
      <template v-slot:links>
      <a class="link1" href="">twitter</a><br><a class="link2" href="">facebook</a><br><a class="link1" href="">linkedin</a>
    </template>
    </Modal>
    <Modal :titleColor="purpleTitle"  :showButton="true" title="Hola soy un modal 2" v-if="showModal2" @close="closeModal2">
    <template v-slot:links>
      <a href="">twitter</a><a href="">facebook</a><a href="">linkedin</a>
    </template>
    </Modal>
  </main>
</template>

<style lang="scss">

$cutePurple: rgba(97, 9, 109, 0.811);

@mixin links($underline: true) {
  @if ($underline){
    text-decoration: underline;
  }
  @else {
    text-decoration: none;
  }

}

.link1 {
  @include links()
}

.link2 {
  @include links($underline: false)
}

.titles{
  font-family: 'Courier New', Courier, monospace;
}

header {
  width: 100%;
  background-color: $cutePurple;
  color: white;
  text-align: center;
}

h2 {
  text-align: center;
}

h2, h3, p{
  @extend .titles
}

button {
  background-color: $cutePurple;
}
</style>
