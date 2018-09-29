<template>
  <div class="todo">
      <li>
          {{title}}
          <button @click="$emit('remove')">Remove</button>
      </li>
  </div>
</template>

<script>
    export default {
        name: 'todo',
        props:['title'],
        data(){
            return {

            }
        },
        created(){

        },
        mounted(){
            
        },
        methods:{
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>