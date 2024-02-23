<script setup lang="ts">
const layout = 'custom'
useHead({
  title: 'Kano-前端开发的日常',
  meta: [
    { name: 'description', content: '日常生活、分享、开发' },
    { name: 'author', content: 'Kano Zhao' },
    { name: 'apple-mobile-web-app-title', content: 'Kano Zhao' },
  ],
})
</script>

<template>
  <NuxtLayout :name="layout">
    <!-- 路由出口 -->
    <NuxtPage />
  </NuxtLayout>
</template>
