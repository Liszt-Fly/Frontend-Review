<script setup lang="ts">
import { debounceRef } from "./debounceRef";

const text = debounceRef("你好");
</script>

<template>
  <div class="container">
    <input type="text" v-model="text" />
    {{ text }}
  </div>
</template>

<style scoped></style>
