<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
const router = useRouter()

const currentPageNavigation = navigation.value[0].children.find(item => item._path === router.currentRoute.value.path)
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
