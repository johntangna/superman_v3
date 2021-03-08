<template>
  <div @click="login">{{msg}}</div>
  <div v-for="(item, i) in list" :ref="el => {if(el) div[i] = el}">
    {{item}}
  </div>
  <div>{{msg}}</div>
  <div>{{msg}}</div>
</template>

<script>
  import {useRouter} from 'vue-router'
  import {ref, reactive, onBeforeUpdate} from 'vue'
  export default {
    setup(){
      const router = useRouter()
      const list = reactive([1,2,3,4,5])
      const div = ref([])
      onBeforeUpdate(()=>{
        div.value = []
      })
      const msg = 'hello world1'
      const login = ()=>{
        router.push({path : '/'})
      }
      return {
        msg,
        login,
        list,
        div
      }
    }
  }
</script>

<style>
</style>
