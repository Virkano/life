<script setup lang="ts">
// 批量导入静态资源图片
const importImage: any = computed(
  () =>
    (name: string, type = 'png', folder = 'images') => {
      const glob: Record<string, any> = import.meta.glob(`~/assets/images/*`, {
        eager: true,
      })
      return glob[`/assets/${folder}/${name}.${type}`].default
    },
)
const workSpaceList = ref([
  {
    src: 'raycast',
    name: 'Raycast',
    des: 'Alfred 和 Spotlight 的替代品',
  },
  {
    src: 'arc',
    name: 'Arc',
    des: '一种更好的互联网使用方式',
  },
  {
    src: 'Spotify',
    name: 'Spotify',
    des: '全球最大的音乐流媒体服务平台',
  },
  {
    src: 'vscode',
    name: 'VS Code',
    des: '当下最流行的轻量级代码编辑 IDE',
  },
])
</script>

<template>
  <div class="layout-center">
    <header class="mb-10">
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold">
          工作台
        </h1>
      </div>
    </header>
    <ul class="flex flex-col gap-6 pb-4">
      <li
        v-for="(item, index) in workSpaceList"
        :key="index"
        class="flex origin-left items-center gap-4 opacity-0 fade-in"
        :style="{ 'animation-delay': `${index * 0.2}s` }"
      >
        <img
          alt="icon" fetchpriority="high" width="256" height="256" decoding="async" :data-img="index + 1" class="h-14 w-14 rounded-lg"
          :src="importImage(item.src)" style="color: transparent;"
        ><div class="flex-1">
          <h2 class="text-sm font-semibold">
            {{ item.name }}
          </h2><p class="text-sm text-neutral-600 dark:text-neutral-300">
            {{ item.des }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(30%) scale(0);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
.fade-in {
  animation: fadeIn .5s ease-out forwards;
}
</style>
