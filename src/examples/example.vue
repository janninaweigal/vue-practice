<template>
  <div class="example">
      {{msg}}
  </div>
</template>

<script>
    
    export default {
        name: 'example',
        data(){
            return {
                msg:'444'
            }
        },
        created(){

        },
        mounted(){
            
        },
        methods:{
            changeMsg(event){
                console.log(2)
                this.msg='123';
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>