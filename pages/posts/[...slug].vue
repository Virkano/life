<script setup>
const route = useRouter()
const page = await queryContent('retrospectives').sort({ _path: route.currentRoute.value.path }).find()

if (!page)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const currentPageNavigation = page[0].navigation

const { prev } = useContent()

useSeoMeta({
  title: currentPageNavigation.title,
  ogTitle: `${currentPageNavigation.title}`,
  description: currentPageNavigation.description,
  ogDescription: currentPageNavigation.description,
})
</script>

<template>
  <main>
    <div class="mx-auto mb-10 flex max-w-2xl flex-col items-start">
      <h1 class="text-4xl font-bold dark:text-gray-100 max-md:text-3xl">
        {{ currentPageNavigation.title }}
      </h1>
    </div>
    <section class="box-border flex items-start justify-center">
      <article class="prose dark:prose-invert max-md:prose-sm w-full">
        <ContentDoc>
          <template #not-found>
            <h1>Document not found</h1>
          </template>
        </ContentDoc>

        <p v-if="prev" class="!mb-[0.75em] !mt-[4em] text-xl font-bold text-neutral-800 dark:text-neutral-200">
          阅读更多
        </p>
        <div v-if="prev">
          <p class="mb-2 mt-1 flex items-center gap-2">
            <i class="i-carbon-arrow-right inline-block h-4 w-4" />
            <NuxtLink :to="prev._path">
              {{ prev.navigation.title }}
            </NuxtLink>
            <span class="text-sm opacity-60">{{ $dayjs(prev.navigation.date).format('YYYY-MM-DD') }}</span>
          </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14" class="!my-16 mx-auto h-10 w-10 opacity-20"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 9.43a2.37 2.37 0 0 1-1.5.57a2.75 2.75 0 0 1-3-3a2.75 2.75 0 0 1 3-3c2.75 0 4.25 6 7 6a2.75 2.75 0 0 0 3-3a2.75 2.75 0 0 0-3-3a2.37 2.37 0 0 0-1.45.57" /></svg>

        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full" />

        <div class="mb-10 flex items-center justify-between gap-8">
          <NuxtLink class="flex cursor-pointer flex-row items-center justify-start text-neutral-800/70 hover:text-neutral-800 dark:text-neutral-200/70 hover:dark:text-neutral-200" to="/post">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4"><path d="M8.8304 6C6.727 7.55556 4.83783 9.37278 3.20952 11.4057C3.06984 11.5801 3 11.79 3 12M8.8304 18C6.727 16.4444 4.83783 14.6272 3.20952 12.5943C3.06984 12.4199 3 12.21 3 12M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="text-sm">返回</span>
          </NuxtLink>
        </div>
      </article>
    </section>
  </main>
</template>
