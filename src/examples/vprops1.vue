<template>
  <div class="vprops1">
      <hr/>
      <div :style="{fontSize: fontSizeAdd + 'px' }">
          <blog-post1
            v-for="item in posts"
            :key="item.id"
            v-bind:post="item"
            @enlargeSize="addSize('a')"
        ></blog-post1>
      </div>
      <!-- <hr>
      <div :style="{fontSize: fontSizeAdd1 + 'px' }">
          <blog-post
            v-for="item in posts"
            :key="item.id"
            v-bind:post="item"
            v-on:enlargeSize="addSize('b')"
        ></blog-post>
      </div> -->

      <hr>
      <!-- <custom-input
        v-bind:value="searchText"
        v-on:input="searchText = $event"
        ></custom-input>
        <hr> -->
         <!-- <custom-input
            v-model="searchText"
        ></custom-input> -->
        <hr>
        {{searchText}}
  </div>
</template>

<script>
    import Vue from 'vue'
    Vue.component('custom-input', {
        props: ['value'],
        template: `
            <input
            v-bind:value="value"
            v-on:input="$emit('input', $event.target.value)"
            >
        `
    })
    Vue.component('blog-post1',{
        props:['post'],
        created(){
        },
        mounted(){
            
        },
        template:`
            <div class="blog-post1">
                id：{{post.id}}
                title: {{post.title}}
                content: {{post.content}}
                publishAt: {{post.publishAt}}
                <button v-on:click="$emit('enlargeSize')">
                    Enlarge text
                </button>
            </div>
        `
    })
       
    export default {
        name: 'vprops1',
        data(){
            return {
                searchText:'123',
                fontSizeAdd:18,
                fontSizeAdd1:18,
                posts:[
                    {
                        id:1,
                        title:'标题1',
                        content:'内容1',
                        publishAt:'2018-09-30'
                    },
                    {
                        id:2,
                        title:'标题2',
                        content:'内容2',
                        publishAt:'2018-09-30'
                    },
                    {
                        id:3,
                        title:'标题3',
                        content:'内容3',
                        publishAt:'2018-09-30'
                    }
                ]
            }
        },
        created(){
        },
        mounted(){
        },
        methods:{
            addSize(msg){
                if(msg=="a"){
                    this.fontSizeAdd+=2;
                }else{
                    this.fontSizeAdd1+=2;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>