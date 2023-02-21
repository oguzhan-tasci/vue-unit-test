<template>
  <div>
    <!-- 'toContain' ile 'Learn Vue Testing' arıyoruz fakat assağıdaki h1 ile yazılmış yazı yüzünden true döner.
              Tüm componente bakar. 
              Bunun için spesifik bir şeyler aratmak isteriz. Bunun için bir id belirleriz ve isimlendiririz :
              ÖRNEĞİN :  <li data-test="todo">Learn Vue Testing</li>
        -->
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="todo.completed ? 'completed' : ''"
    >
      <li>{{ todo.text }}</li>
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>
  </div>

  <form data-test="form" @submit.prevent="createTodo">
    <input data-test="new-todo" v-model="newTodo" />
  </form>
</template>

<script>
export default {
  name: "TodoApp",
  data() {
    return {
      randomNumbersArray: [],
      newTodo: "",
      isFalse: false,
      todos: [
        { id: 1, text: "Learn Vue Testing", completed: false },
        // { id: 2, text: "Learn TypeScript", completed: false },
        // { id: 3, text: "Learn Authentication", completed: false },
      ],
    };
  },
  methods: {
    createTodo() {
      this.todos.push({
        id: this.productRandomNumber,
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    productRandomNumber() {
      const randomNumber = Math.floor(Math.random() * 100);
      for (let i = 0; i < this.randomNumbersArray.length; i++) {
        if (randomNumber != this.randomNumbersArray[i]) {
          this.randomNumbersArray.push(randomNumber);
        } else {
          this.productRandomNumber();
        }
      }
      console.log(randomNumber);
    },
  },
};
</script>

<style>
.completed {
    text-decoration: line-through;
    color: green;
}
</style>