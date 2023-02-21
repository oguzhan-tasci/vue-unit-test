<template>
    <div>
        <!-- 'toContain' ile 'Learn Vue Testing' arıyoruz fakat assağıdaki h1 ile yazılmış yazı yüzünden true döner.
              Tüm componente bakar. 
              Bunun için spesifik bir şeyler aratmak isteriz. Bunun için bir id belirleriz ve isimlendiririz :
              ÖRNEĞİN :  <li data-test="todo">Learn Vue Testing</li>
        -->
       <div v-for="todo in todos" :key="todo.id" data-test="todo">
            <li>{{ todo.text }}</li>
       </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TodoApp',     
    data() {
        return {
            todos : [
                {id:1,text:"Learn Vue Testing",completed:false},
                {id:2,text:"Learn TypeScript",completed:false},
                {id:3,text:"Learn Authentication",completed:false},
            ]
        }
    }
  }
  </script>
