<script setup lang="ts">
import { useCountStore } from '~/store/count'

const countStore = useCountStore()
</script>

<template>
  <div>
    <h1>欢迎来到count {{ countStore.count }}</h1>
    <button @click="countStore.increment">
      +1
    </button>
    <button @click="countStore.decrement">
      -1
    </button>
  </div>
</template>
