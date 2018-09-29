<template>
  <div class="event">
      <button @click="count+=1">Add 1</button>
      <p>you click 
          this for {{count}} times。</p>
      <button @click="warn('Form cannot be submitted yet',$event)">submit</button>
      <br/>
      <br/>
      <!-- 阻止单击事件继续传播 -->
        <a v-on:click.stop="showMes('阻止单击事件继续传播')">阻止单击事件继续传播 .stop</a>
<br/>
        <!-- 修饰符可以串联 -->
        <a v-on:click.stop.prevent="showMes('v-on:click.stop.prevent')">v-on:click.stop.prevent</a>

        <!-- 添加事件监听器时使用事件捕获模式 -->
        <!-- 即元素自身触发的事件先在此处理，然后才交由内部元素进行处理 -->
        <div v-on:click.capture="showMes('外部')">
            <div v-on:click="showMes('内部元素')">内部元素</div>
            <div v-on:click.prevent.self="showMes('内容1')">内部元素1</div>
            <div v-on:click.self.prevent="showMes('内容2')">内部元素2</div>
            <div v-on:click.stop="showMes('内容3')">内部元素3</div>
        </div>

        <div v-on:click.prevent.self="showMes('内容1')">内部元素1
            <button @click="showMes('prevent.self')">prevent.self点击</button>
        </div>
        <div v-on:click.self.prevent="showMes('内容2')">内部元素2
            <button @click="showMes('self.prevent')">self.prevent点击</button>
        </div>

        <input v-on:keyup.enter="submit" value="提交"/>
        <!-- 缩写语法 -->
        <input @keyup.enter="submit" value="提交1"/>
        <input @keyup.page-down="onPageDown" value="page-down"/>

        <!-- Alt + C -->
    <input @keyup.alt.67="showMes('Alt +C')" placeholder="Alt +C">

    <!-- Ctrl + Click -->
    <div @click.ctrl="showMes('Ctrl + Click')" placeholder="Ctrl + Click">Do something</div>

    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.ctrl="showMes('Alt 或 Shift 被一同按下时也会触发')">Alt 或 Shift 被一同按下时也会触发</button>

        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <button @click.ctrl.exact="showMes('有且只有 Ctrl 被按下的时候才触发')">有且只有 Ctrl 被按下的时候才触发</button>

        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="showMes('没有任何系统修饰符被按下的时候才触发')">没有任何系统修饰符被按下的时候才触发</button>
        <button @click.left="showMes('左键点击')">鼠标左键点击</button>
        <button @click.middle="showMes('中键点击')">鼠标中键点击</button>
        <button @click.right="showMes('右键点击')">鼠标右键点击</button>
  </div>
</template>

<script>
    
    export default {
        name: 'event',
        data(){
            return {
                count:1
            }
        },
        created(){

        },
        mounted(){
            
        },
        methods:{
            warn(msg,event){
                if(event) event.preventDefault();
                alert(msg)
            },
            showMes(msg){
                alert(msg)
            },
            submit(e){
                
                alert(e.target.value)
            },
            onPageDown(e){
                alert(e.target.value)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>