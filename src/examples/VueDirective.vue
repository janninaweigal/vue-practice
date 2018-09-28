<template>
  <div class="directive">
      <div class="profile"></div>
      <Example ref="msg" ></Example>
        <button @click="changeMessage">变化</button>
        <div v-linbin='color'>在这里directive</div>
        <div>{{message|myFilter}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Example from "@/examples/example";
// 自定义指定 directive
Vue.directive("linbin", {
    bind: function(el,binding,vnode) {
        // el: 指令所绑定的元素，可以用来直接操作DOM。
        // binding:  一个对象，包含指令的很多信息。
        // vnode: Vue编译生成的虚拟节点。
        el.style='color:'+binding.value
    },
    inserted:function (el, binding, vnode) {
        // console.log("2-inserted 被插入");
    },
    update:function (el, binding, vnode) {
        // console.log("3-update 更新");
    },
    componentUpdated:function (el, binding, vnode) {
        // console.log("4-componentUpdated 更新完成");
    },
    unbind:function (el, binding, vnode) {
        // console.log("5-unbind 解绑");
    }

});
// var myDirective = Vue.directive('linbin')
//过滤器
Vue.filter('myFilter', function (value) {
  // 返回处理后的值
  var x=value.replace(/\./g,"")
  return x
})

export default {
  name: "directive",
  data() {
    return {
        color:'red',
        message:"1.2.35.89"
    };
  },
  components: {
    Example
  },
  created() {},
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
  methods: {
    changeMessage(event) {
      console.log(this.$refs);
      this.$refs.msg.changeMsg();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>