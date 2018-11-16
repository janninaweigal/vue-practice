<template>
  <div class="inumber">

       <input 
        type="text"
        v-for="item in [1,2,3]"
        :key="item"
        placeholder="只能输入正整数"
        @input="change(item,$event)"
        @change="change(item,$event)"
        :value="inputNumber['number'+item]"
        />
  </div>
</template>

<script>
    
    export default {
        name: 'inumber',
        data(){
            return {
                inputNumber:{
                    number1:123,
                    number2:456,
                    number3:789
                }
            }
        },
        created(){

        },
        computed:{
            // inpNum:{
            //     get:function(){
            //         return this.msg1;
                
            //     },
            //     set:function(newValue){
            //         console.log(newValue)
            //         this.msg1=newValue.replace(/[^\.\d]/g, '');
            //     }
            // }
        },
        mounted(){
            
        },
        methods:{
            change (index,event) {
                let val = event.target.value.trim()
                // 只能是正整数或空,可根据需求修改正则
                if (/^[1-9]\d*$|^$/.test(val)) {
                    this.inputNumber['number'+index] = val
                } else {
                    event.target.value =this.inputNumber['number'+index]
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>