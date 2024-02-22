<script setup lang="ts">

</script>

<template>
  <div class="flex min-h-screen flex-col flex-nowrap content-center items-stretch bg-neutral-50 dark:bg-neutral-950">
    <Header />
    <main class="mx-auto mb-[--layout-root-mb] mt-[--layout-root-mt] flex min-h-full w-full max-w-5xl flex-1 flex-col px-6">
      <slot />
    </main>

    <Footer />
  </div>
</template>
