<script setup lang="ts">

</script>

<template>
  <div class="pb-safe-area mx-auto w-full max-w-5xl px-6 text-sm text-[var(--gray10)] transition-colors">
    <div class="space-y-2 border-t border-[#e9ecef] pb-24 pt-6 transition-colors duration-150 dark:border-[#2d2d2d] sm:space-y-4 sm:pb-6">
      <div class="flex flex-col-reverse justify-between gap-2 sm:flex-row sm:gap-0">
        <div>© {{ $dayjs().format('YYYY') }} Kano Zhao</div>
        <div class="flex flex-wrap space-x-4">
          <a class="flex items-center justify-center font-medium underline-offset-4 hover:text-black hover:underline dark:hover:text-white" href="/">
            主页
            <span class="sr-only">主页</span>
          </a>
          <a class="flex items-center justify-center font-medium underline-offset-4 hover:text-black hover:underline dark:hover:text-white" href="/workspace">
            工作台
            <span class="sr-only">工作台</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
