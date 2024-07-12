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
const nuxtApp = useNuxtApp()

// 是否首次加载
const isFullLoading = ref(true)

nuxtApp.hook('page:start', () => {
  isFullLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isFullLoading.value = false
})
</script>

<template>
  <!-- 首页加载全屏动画 -->
  <FullLoading v-if="isFullLoading" />
  <NuxtLayout :name="layout">
    <!-- 在页面导航之间显示一个进度条 -->
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}

.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
