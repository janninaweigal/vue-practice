<template>
   <div class="directive">
      <div class="profile"></div>
      <Example ref="msg" ></Example>
        <button @click="changeMessage">变化</button>
        <div v-linbin='color'>在这里directive</div>
        <div>{{message}},过滤后的值：{{message|myFilter}}</div>
        <div :class="[{fontsize40:flag},flag?'classA':'classB']">这是class控制的</div>
        <div  v-show="flag">flag:{{flag}}</div>
        <button @click="changeColor">控制class</button>
        <div :style="{color:activeColor,fontSize:fontSize+'px'}">绑定内联样式1</div>
        <div :style="styleObj">绑定内联样式2</div>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'],'justify-content':'center' }">多重值</div>
        <myComponect post-title="color"></myComponect>

        <ul>
            <li v-for="(item, key) in items" :key="key">
                {{ item.message }} {{key}}
            </li>
        </ul>

        <button @click="addArrayItem1">数组push()</button>
        <button @click="addArrayItem2">数组pop()</button>
        <button @click="addArrayItem3">数组shift()</button>
        <button @click="addArrayItem4">数组unshift()</button>
        <button @click="addArrayItem5">数组splice()</button>
        <button @click="changeArrayItem">vm.$set(vm.items, indexOfItem, newValue)</button>
        
        <div>显示过滤和排序结果</div>
        <ul>
            <li v-for="item in cnumbers" :key="item">{{item}}</li>
        </ul>
        <hr>
        <ul>
            <template v-for="(item, index) in items" v-bind:item="item" v-bind:index="index">
                <li v-bind:key="index">{{ item }}</li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>
    </div>
</template>

<script>
import Vue from "vue";
import Example from "@/examples/example";
// 自定义指定 directive
Vue.directive("linbin", {
  bind: function(el, binding, vnode) {
    // el: 指令所绑定的元素，可以用来直接操作DOM。
    // binding:  一个对象，包含指令的很多信息。
    // vnode: Vue编译生成的虚拟节点。
    el.style = "color:" + binding.value;
  },
  inserted: function(el, binding, vnode) {
    // console.log("2-inserted 被插入");
  },
  update: function(el, binding, vnode) {
    // console.log("3-update 更新");
  },
  componentUpdated: function(el, binding, vnode) {
    // console.log("4-componentUpdated 更新完成");
  },
  unbind: function(el, binding, vnode) {
    // console.log("5-unbind 解绑");
  }
});
// var myDirective = Vue.directive('linbin')
//过滤器
Vue.filter("myFilter", function(value) {
  // 返回处理后的值
  var x = value.replace(/\./g, "");
  return x;
});

//组件注册
Vue.component("myComponect", {
  props: ["postTitle"],
  template: "<h3>{{postTitle}}</h3>"
});

export default {
  name: "directive",
  data() {
    return {
      color: "red",
      message: "1.2.35.89",
      flag: true,
      activeColor: "pink",
      fontSize: 20,
      styleObj: {
        color: "pink",
        fontSize: "20px"
      },
      items: [{ message: "Foo" }, { message: "Bar" }],
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  components: {
    Example
  },

  created() {
    //v-for 匹配数据 (替换数组)
    // var example=[
    //     { message: 'Foo21' },
    //     { message: 'Bar22' }
    // ]
    // //替换数据
    // this.items=example.filter(function(item){
    //     return item.message.match('F')
    // })
    //增加属性
    // this.items = Object.assign(this.items,{message3: 'Vue Green1',message4: 'Vue Green1'})
    // console.log(this.items)
  },
  mounted() {
    // 创建 Profile 实例，并挂载到一个元素上。
    var Profile = Vue.extend({
      template: "<p>{{firstName}} {{lastName}} aka {{alias}}</p>",
      data: function() {
        return {
          firstName: "Walter",
          lastName: "White",
          alias: "Heisenberg"
        };
      }
    });
    new Profile().$mount(".profile");
  },
  computed: {
    cnumbers() {
      return this.numbers.filter(function(item) {
        return item % 2 === 0;
      });
    }
  },
  methods: {
    changeArrayItem() {
      // Vue.set(this.items,0,{"message":"改变的数据"})
      // 如果你想添加新的响应式属性
    },
    changeMessage(event) {
      console.log(this.$refs);
      this.$refs.msg.changeMsg();
    },
    addArrayItem1() {
      this.items.push({ message: "push1" });
    },
    addArrayItem2() {
      this.items.pop();
    },
    addArrayItem3() {
      this.items.shift();
    },
    addArrayItem4() {
      this.items.unshift({ message: "unshift" });
    },
    addArrayItem5() {
      this.items.splice(3, 0, { message: "林斌" });
    },
    changeColor() {
      if (this.flag) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.classA {
  color: red;
}
.classB {
  color: green;
}
.fontsize40 {
  font-size: 40px;
}
</style>