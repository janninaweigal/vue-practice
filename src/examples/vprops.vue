<template>
  <div class="vprops">
      <blog-post post-title="abc"></blog-post>
      <blog-posts v-bind:title="msg"></blog-posts>
      <br/>这是静态属性值<blog-posts title="this is static props"></blog-posts>
        <br/><blog-posts is-published></blog-posts>
        <br/><blog-posts :comment-ids="[1,2,3]"></blog-posts>
        <div :style="{border:'1px solid red'}">
            <br/><propsOne :initial-counter="msg"></propsOne>
        <br/><propsTwo :size="msg"></propsTwo>
            <input type="text" v-model="msg">
        </div>
        <div style="border:1px solid green;">
            <myProps :prop-a="100" :prop-b="2" :prop-c="'32'" :prop-e="{a:'a'}" :prop-f="'error'"></myProps>
        </div>
  </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('myProps',{
        props:{
            propA:Number,
            propB:[String,Number],
            propC:{
                type:String,
                required:true
            },
            propD:{
                type:Number,
                default:100
            },
            propE:{
                type:Object,
                default:function(){
                    return {message:'Hello World!!'}
                }
            },
            propF:{
                validator:function(value){
                    return ['error','success','warning'].indexOf(value)!==-1;
                }
            }
        },
        template:`<div>
            {{propA}}<br/>
            {{propB}}<br/>
            {{propC}}<br/>
            {{propD}}<br/>
            {{propF}}<br/>
        </div>`
    })
    Vue.component('blog-post',{
        props:['post-title'],
        template:'<h3>{{postTitle}}</h3>'
    })
    Vue.component('blog-posts',{
        props: {
            title: String,
            likes: Number,
            isPublished: Boolean,
            commentIds: Array,
            author: Object
        },
        template:'<div><h3>{{title}}</h3>isPublished:{{isPublished}}<br/>{{commentIds}}</div>'
    })
    // 这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。在这种情况下，最好定义一个本地的 data 属性并将这个 prop 用作其初始值：
    Vue.component('propsOne',{
        props:['initialCounter'],
        data:function(){
            return {
                counter:this.initialCounter
            }
        },
        template:'<div>{{counter}}</div>'
    })
//这个 prop 以一种原始的值传入且需要进行转换。在这种情况下，最好使用这个 prop 的值来定义一个计算属性：
    Vue.component('propsTwo',{
        props:['size'],
        computed: {
            normalSize:function(){
                return this.size.trim().toLowerCase();
            }
        },
        template:'<div>{{normalSize}}</div>'
    })
    export default {
        name: 'vprops',
        data(){
            return {
                msg:'444',
                countNum:123
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