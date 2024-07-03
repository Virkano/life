<script setup lang="ts">
const layout = 'custom'
useHead({
  title: 'Kano Zhao',
  meta: [
    { name: 'description', content: '记录生活，表达热爱' },
    { name: 'author', content: 'Kano Zhao' },
    { name: 'apple-mobile-web-app-title', content: 'Kano Zhao' },
  ],
})
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
