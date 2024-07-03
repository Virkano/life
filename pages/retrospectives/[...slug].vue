<script setup>
const route = useRouter()
const page = await queryContent('retrospectives').sort({ _path: route.currentRoute.value.path }).find()

if (!page)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const currentPageNavigation = page[0].navigation

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
      <div class="my-3 flex gap-3.5 text-sm text-neutral-500 dark:text-neutral-400 max-md:text-xs">
        <div class="flex flex-shrink-0 items-center gap-1">
          <i class="i-carbon-calculator-check inline-block h-4 w-4 max-md:h-3 max-md:w-3" />
          <span>{{ $dayjs(currentPageNavigation.date).format('YYYY-MM-DD') }}</span>
        </div>
      </div>
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

        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full" />
        <div class="mb-10 flex items-center justify-between gap-8">
          <NuxtLink class="flex cursor-pointer flex-row items-center justify-start text-neutral-800/70 hover:text-neutral-800 dark:text-neutral-200/70 hover:dark:text-neutral-200" to="/retrospective">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1 h-4 w-4"><path d="M8.8304 6C6.727 7.55556 4.83783 9.37278 3.20952 11.4057C3.06984 11.5801 3 11.79 3 12M8.8304 18C6.727 16.4444 4.83783 14.6272 3.20952 12.5943C3.06984 12.4199 3 12.21 3 12M3 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="text-sm">返回</span>
          </NuxtLink>
        </div>
        <p class="text-center">
          以上是本周的回顾，下周会有所不同，希望会更好
        </p>
      </article>
    </section>
  </main>
</template>
