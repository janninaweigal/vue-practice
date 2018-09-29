<template>
  <div class="example1">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
            <input
            v-model="newTodoText"
            id="new-todo"
            placeholder="E.g. Feed the cat"
            >
            <button>Add</button>
        </form>
        <ul>
            <li
            is="todo"
            v-for="(todo, index) in todos"
            v-bind:key="todo.id"
            v-bind:title="todo.title"
            v-on:remove="todos.splice(index, 1)"
            ></li>
        </ul>
  </div>
</template>

<script>
    import todo from '@/examples/component'
    export default {
        name: 'example1',
        data(){
            return {
                newTodoText: '',
                todos: [
                {
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
                ],
                nextTodoId: 4
            }
        },
        created(){

        },
        mounted(){
            
        },
        methods:{
            addNewTodo: function () {
                this.todos.push({
                    id: this.nextTodoId++,
                    title: this.newTodoText
                })
                this.newTodoText = ''
            }
        },
        components:{
            todo
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>