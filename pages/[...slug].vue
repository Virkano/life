<script setup>
const route = useRouter()
const { data: page } = await useAsyncData(route.currentRoute.value.path, () => queryContent(route.currentRoute.value.path).findOne())
// console.log(page.value)
if (!page.value)
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
const currentPageNavigation = page.value.navigation

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
      <h1 class="pt-4 text-4xl font-bold dark:text-gray-100 max-md:text-3xl">
        {{ currentPageNavigation.title }}
      </h1>
    </div>
    <section class="box-border flex items-start justify-center">
      <article class="prose dark:prose-invert max-md:prose-sm w-full">
        <ContentDoc />
      </article>
    </section>
  </main>
</template>
