<template>
  <div class="basecomponent">
      <button-counter-one></button-counter-one>
      <button-counter-one></button-counter-one>
      <button-counter-one></button-counter-one>
      <hr>
    <blog-post
        v-for="(item,index) in posts"
        :key="item.id"
        :title="item.title"
    ></blog-post>
  </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('button-counter-one',{
        data:function(){
            return {
                count:0
            }
        },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    })

    //通过 Prop 向子组件传递数据
    Vue.component('blog-post',{
        props:['title'],
        template:'<h3>{{title}}</h3>'
    })
    export default {
        name: 'basecomponent',
        data(){
            return {
                msg:'444',
                posts:[
                    {
                        id:1,
                        title:'title1'
                    },
                    {
                        id:2,
                        title:'title2'
                    },
                    {
                        id:3,
                        title:'title3'
                    }
                ]
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