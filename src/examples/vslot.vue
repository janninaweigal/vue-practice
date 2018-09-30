<template>
  <div class="vslot">
      <anchored-heading :level="2">Hello world!</anchored-heading>
        <!-- 插槽内容 -->
    <navigation-link url="/vslot">
        main to slot content
    </navigation-link>
    <hr>
    插槽内容
    <navigation-link url="/vslot">
        <anchored-heading :level="2">Hello world!</anchored-heading>
        Logged in as {{ user.name }}
    </navigation-link>
    <hr>
    具名插槽1
    <my-slot>
        <template slot="header">
            <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template slot="footer">
            <p>Here's some contact info</p>
        </template>
    </my-slot>

    <hr>
    具名插槽2
    <my-slot>
        <h1 slot="header">
            Here might be a page title
        </h1>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <p slot="footer">
            Here's some contact info
        </p>
    </my-slot>
    <hr>
    <button type="submit">
        <slot>Submit</slot>
    </button>
    <hr>
    <ul>
        <li
            v-for="todo in todos"
            v-bind:key="todo.id"
        >
            {{ todo.title }}
        </li>
    </ul>
    <hr>
    <ul>
        <li
            v-for="todo in todos"
            v-bind:key="todo.id"
        >
            <slot v-bind:todo="todo">
            <!-- 回退的内容 -->
            {{ todo.title }}
            </slot>
        </li>
    </ul>
    <button @click="changeToDo">changeToDo</button>

    <hr>
    <my-slot1 v-bind:todos="todos">
        <template  slot-scope="slotProps">
            <span v-if="slotProps.todo.id==1">{{slotProps.todo.title}}</span>
        </template>
    </my-slot1>
    <hr>
    <my-slot1 v-bind:todos="todos">
        <template  slot-scope="{ todo }">
            <span v-if="todo.id==1">{{slotProps.todo.title}}</span>
        </template>
    </my-slot1>
  </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('my-slot1',{
        props:['todos'],
        template:`<div>
            <slot name="slotProps"></slot>
        </div>`
    })
    Vue.component('my-slot',{
        template:`
            <div>
                <header>
                    <slot name="header"></slot>
                </header>
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <slot name="footer"></slot>
                </footer>
            </div>
        `
    })
    Vue.component('navigation-link',{
        props:['url'],
        template:`
            <a v-bind:href="url">
                <slot></slot>
            </a>
        `
    })
    Vue.component('anchored-heading',{
        props:{
            level: {
                type: Number,
                default:1,
                required: true
            }
        },
        render: function (createElement) {
            return createElement(
                'h' + this.level,   // 标签名称
                this.$slots.default // 子元素数组
            )
        }
        // ,
        // template:`
        //     <h1 v-if="level === 1">
        //         <slot></slot>
        //     </h1>
        //     <h2 v-else-if="level === 2">
        //         <slot></slot>
        //     </h2>
        //     <h3 v-else-if="level === 3">
        //         <slot></slot>
        //     </h3>
        //     <h4 v-else-if="level === 4">
        //         <slot></slot>
        //     </h4>
        //     <h5 v-else-if="level === 5">
        //         <slot></slot>
        //     </h5>
        //     <h6 v-else-if="level === 6">
        //         <slot></slot>
        //     </h6>
        // `
    })
    export default {
        name: 'vslot',
        data(){
            return {
                msg:'444',
                user:{
                    name:'bingo'
                },
                todos:[
                    {
                        id:1,
                        title:'todo1'
                    },
                    {
                        id:2,
                        title:'todo2'
                    }
                ]
            }
        },
        created(){

        },
        mounted(){
            
        },
        methods:{
            changeToDo(){
                this.todos=[
                    {
                        id:3,
                        title:'todo3'
                    },
                    {
                        id:4,
                        title:'todo4'
                    }
                ]
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>