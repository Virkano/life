<script setup lang="ts">
import { diffTime } from '~/hook/diffTime'

export interface NavigationChildrenModel {
  title: string
  _path: string
  date: string
  icon: string
  description: string
  image: string
}

export interface NavigationModel {
  title: string
  _path: string
  children: NavigationChildrenModel[]
}
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const postList = ref<NavigationChildrenModel[]>([])

function getArticleList() {
  postList.value = navigation.value[1].children.sort((a, b) => new Date(b.date) - new Date(a.date))
}
getArticleList()
console.log(postList.value)
</script>

<template>
  <div class="layout-center">
    <header class="mb-10 flex items-center gap-2">
      <h1 class="text-3xl font-bold">
        回顾
      </h1>
    </header>
    <div class="grid grid-cols-1 justify-center gap-4 sm:grid-cols-[repeat(auto-fit,75%)] md:grid-cols-[repeat(auto-fit,48%)] lg:gap-6">
      <a
        v-for="(item, index) of postList" :key="index"
        class="group relative flex w-full transform-gpu flex-col rounded-xl transition-all after:absolute after:inset-0 after:rounded-xl after:shadow-primary hover:-translate-y-0.5 hover:bg-neutral-200/50 hover:dark:bg-neutral-800/50"
        :href="item._path"
      >
        <div class="relative aspect-[240/135] w-full rounded-t-xl bg-neutral-100 dark:bg-neutral-900">
          <img
            :alt="item.title" loading="lazy" decoding="async" data-nimg="fill" class="rounded-t-xl bg-[url('/images/fallback.webp')] bg-cover bg-center bg-no-repeat object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            :src="item.image" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
          >
        </div>
        <span class="relative z-10 flex w-full flex-1 shrink-0 flex-col justify-between gap-0.5 rounded-b-xl px-3 py-2 md:gap-0">
          <h2 class="z-20 text-base font-bold transition-opacity md:text-xl">{{ item.title }}</h2>
          <span class="relative z-20 flex items-center justify-between opacity-80 transition-opacity">
            <span class="inline-flex items-center space-x-3">
              <span class="inline-flex items-center space-x-1 text-[12px] font-medium md:text-sm">
                <span>{{ diffTime(item.date) }} 前  #{{ $dayjs(item.date).format('MM') }}</span>
              </span>
            </span>
          </span>
        </span>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
