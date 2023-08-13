<script setup lang="ts">
import {debounce} from 'lodash'
import { ref } from 'vue'
let search_times=ref(0)
let error_search_times=ref(0)

const search=()=>{
	search_times.value++
}
const error_search=()=>{
	error_search_times.value++
}
const input=debounce(search,200)
debounce(search,200)
function test(){
	let a=1;
	return function(){
		a++
		console.log(a)
	}
}
let m=test()
m()
m()
m()
m()

m()
m()

</script>

<template>
<div id="app" class="flex border-red border-solid border-1 w-screen h-screen items-center ">
<div class="correct flex-1 flex items-center justify-center">
	<input class="py-3 px-4  border-2 border-black rounded-md  outline-gray-700 placeholder:text-sm font-extrabold" type="text" placeholder="正确的debounce" @input="input">

<div class="pl-8">搜索次数:{{search_times}}</div>
</div>
<div class="error flex-1 flex items-center justify-center">

	<input class="py-3 px-4  border-2 border-black rounded-md  outline-gray-700 placeholder:text-sm font-extrabold" type="text" placeholder="错误的debounce" @input="debounce(error_search,200)()">

<div class="pl-8">搜索次数:{{error_search_times}}</div>
</div>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
