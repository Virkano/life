<script setup lang="ts">
// const data = await queryContent('posts').sort({ date: -1 }).find()
</script>

<template>
  <div class="layout-center">
    <header class="mb-10 flex items-center gap-2 ">
      <h1 class="text-3xl font-bold">
        文章
      </h1>
      <button data-state="closed">
        <NuxtLink data-umami-event="RSS" aria-label="RSS订阅" class="opacity-70 transition-opacity hover:opacity-100" to="/feed.xml">
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"><g fill="none"><path d="M24 0v24H0V0h24ZM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018Zm.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="currentColor" d="M5 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4ZM5 3c8.837 0 16 7.163 16 16c0 .184-.003.368-.01.55a1.5 1.5 0 1 1-2.997-.1A13.4 13.4 0 0 0 18 19c0-7.18-5.82-13-13-13c-.15 0-.3.003-.45.008a1.5 1.5 0 0 1-.1-2.999C4.631 3.003 4.815 3 5 3Zm0 7a9 9 0 0 1 8.98 9.599a1.5 1.5 0 1 1-2.993-.198a6 6 0 0 0-6.388-6.388a1.5 1.5 0 0 1-.197-2.993C4.6 10.007 4.799 10 5 10Z" /></g></svg>
        </NuxtLink>
      </button>
    </header>
    <div class="flex flex-col gap-5">
      <ContentList v-slot="{ list }" path="/posts">
        <div v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path">
            <h3 class="m-0 p-0 text-xl font-bold underline decoration-dotted underline-offset-4 hover:decoration-solid max-md:text-base">
              {{ article?.navigation?.title }}
            </h3>
          </NuxtLink>
          <div class="mt-1 flex flex-col">
            <p class="py-0.5 text-md leading-6 text-neutral-600 dark:text-neutral-300 max-md:text-sm">
              {{ article?.navigation?.description }}
            </p>
          </div>
        </div>
      </ContentList>
    </div>
  </div>
</template>

<style scoped>

</style>
