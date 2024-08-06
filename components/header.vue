<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
console.log(`output->isDark`, isDark)
const toggleDark = useToggle(isDark)

const navList = ref([
  {
    name: '文章',
    link: '/post',
  },
  {
    name: '回顾',
    link: '/retrospective',
  },
  // {
  //   name: '友链',
  //   link: '/friends',
  // },
  {
    name: '关于',
    link: '/about',
  },
])
const active = ref(0)

function activeChange(val: number) {
  active.value = val
}
</script>

<template>
  <div class="sticky top-0 z-50 h-16 border-b border-[#e9ecef] bg-neutral-50/80 after:absolute after:inset-0 after:backdrop-blur-[20px] after:backdrop-saturate-[180%]  dark:border-[#2d2d2d] dark:bg-neutral-950/80" style="opacity: 1;">
    <div class="mx-auto grid h-full w-full max-w-5xl grid-cols-[1fr_max-content] items-center px-6 py-3">
      <div class="z-[99] flex items-center">
        <NuxtLink class="group inline-flex cursor-pointer items-center gap-1" to="/" @click.stop="activeChange(0)">
          <svg width="1em" height="1em" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 rounded-md border border-[#d8dcdf] transition-colors dark:border-[#323232]"><rect width="200" height="200" fill="black" /><path d="M114.925 44H77C71.4772 44 67 48.4772 67 54V110.945C67 120.841 79.8373 124.725 85.3231 116.488L123.248 59.5431C127.674 52.8973 122.91 44 114.925 44Z" fill="white" /><path d="M134 162.3C137.314 162.3 140.062 159.584 139.356 156.346C137.911 149.727 134.078 143.577 128.284 138.753C120.783 132.508 110.609 129 100 129C89.3913 129 79.2172 132.508 71.7157 138.753C65.9221 143.577 62.0893 149.727 60.6444 156.346C59.9377 159.584 62.6863 162.3 66 162.3L100 162.3H134Z" fill="white" /></svg>
          <span class="appearance-none text-xl font-bold transition-colors group-hover:text-zinc-500 dark:group-hover:text-zinc-400">
            Kano zhao
          </span>
        </NuxtLink>
      </div>
      <div class="z-[99] hidden md:block">
        <nav class=" box-border flex flex-row items-center space-x-7 text-base font-semibold">
          <div class="static space-x-4 border-t-0 border-[#d8dcdf] bg-transparent p-0 backdrop-blur-lg backdrop-saturate-[180%] backdrop-filter-none dark:border-[#323232] ">
            <ul class="mx-auto flex w-full max-w-sm items-center justify-start gap-8 py-0 leading-none">
              <NuxtLink v-for="(item, index) in navList" :key="index" class="inline-flex w-full flex-row items-center justify-center gap-2 leading-none" :aria-label="item.name" :to="item.link" @click.stop="activeChange(index + 1)">
                <span class="inline flex-shrink-0 select-none text-base font-bold text-[var(--gray10)] underline-offset-4 transition-colors hover:text-black dark:hover:text-white" :class="active === index + 1 ? 'text-neutral-900 dark:text-neutral-100' : ''">
                  {{ item.name }}
                </span>
              </NuxtLink>
              <li>
                <div
                  class="text-[var(--gray10)] cursor-pointer dark:i-ph-moon-bold i-ph-sun-bold" @click="toggleDark()"
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        class="z-[99] cursor-pointer  md:hidden dark:i-ph-moon-bold i-ph-sun-bold" @click="toggleDark()"
      />
    </div>
  </div>
  <!-- 底部 -->
  <nav class="z-[99] box-border flex flex-row-reverse items-center space-x-7 text-base font-semibold md:hidden">
    <div class="pb-safe-area sm:w-unset fixed inset-0 top-auto space-x-4 border-t border-[#d8dcdf] bg-neutral-50/80 backdrop-blur-lg backdrop-saturate-[180%] dark:border-[#323232] dark:bg-neutral-950/80">
      <ul class="mx-auto flex w-full max-w-sm items-center justify-around gap-0 py-3 leading-none">
        <li class="inline-block w-full">
          <NuxtLink aria-label="主页" class="inline-flex w-full flex-col items-center gap-0 leading-none" to="/" @click="activeChange(0)">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--gray10)] transition-colors" :class="active === 0 ? 'text-neutral-900 dark:text-neutral-100' : ''"><path d="M15 21V16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16V21M7.60561 5.65025L5.00561 8.1058C4.26632 8.80402 3.89667 9.15313 3.63191 9.56641C3.39721 9.93275 3.22385 10.3349 3.11866 10.7571C3 11.2334 3 11.7418 3 12.7587V14.6C3 16.8402 3 17.9603 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C6.03968 21 7.15979 21 9.4 21H14.6C16.8402 21 17.9603 21 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C21 17.9603 21 16.8402 21 14.6V12.7587C21 11.7418 21 11.2334 20.8813 10.7571C20.7761 10.3349 20.6028 9.93275 20.3681 9.56641C20.1033 9.15313 19.7337 8.80402 18.9944 8.1058L16.3944 5.65025C14.8479 4.18966 14.0746 3.45937 13.1925 3.18385C12.416 2.94132 11.584 2.94132 10.8075 3.18385C9.92537 3.45937 9.15211 4.18966 7.60561 5.65025Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="hidden text-base font-medium text-[var(--gray11)] transition-colors">
              主页
            </span>
          </NuxtLink>
        </li>
        <li class="w-full">
          <NuxtLink class=" inline-flex w-full flex-col items-center justify-center gap-0 leading-none" aria-label="文章" to="/post" @click="activeChange(1)">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--gray10)]  transition-colors" :class="active === 1 ? 'text-neutral-900 dark:text-neutral-100' : ''"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 14h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M15 18h-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M10 6h8v4h-8V6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="hidden flex-shrink-0 select-none text-base font-bold text-[var(--gray11)] transition-colors">
              文章
            </span>
          </NuxtLink>
        </li>
        <li class="w-full">
          <NuxtLink class=" inline-flex w-full flex-col items-center justify-center gap-0 leading-none" aria-label="回顾" to="/retrospective" @click="activeChange(2)">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--gray10)]  transition-colors" :class="active === 2 ? 'text-neutral-900 dark:text-neutral-100' : ''"><path d="M10.1912 12.5508C10.3071 12.1942 10.3071 11.8058 10.1912 11.4492C9.22165 8.46673 4.40272 8.00546 4.01443 4.48436C3.93458 3.76031 4.18955 3.04013 4.69671 2.55723C5.28193 2 6.62415 2 9.30861 2H14.6914C17.3759 2 18.7181 2 19.3033 2.55723C19.8104 3.04013 20.0654 3.76031 19.9856 4.48436C19.5973 8.00546 14.7784 8.46673 13.8088 11.4492C13.6929 11.8058 13.6929 12.1942 13.8088 12.5508C14.7784 15.5333 19.5973 15.9945 19.9856 19.5156C20.0654 20.2397 19.8104 20.9599 19.3033 21.4428C18.7181 22 17.3758 22 14.6914 22L9.3086 22C6.62415 22 5.28192 22 4.69671 21.4428C4.18955 20.9599 3.93458 20.2397 4.01442 19.5156C4.40272 15.9945 9.22164 15.5333 10.1912 12.5508Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="hidden flex-shrink-0 select-none text-base font-bold text-[var(--gray11)] transition-colors">
              回顾
            </span>
          </NuxtLink>
        </li>
        <!-- <li class="w-full">
          <NuxtLink class=" inline-flex w-full flex-col items-center justify-center gap-0 leading-none" aria-label="友链" to="/friends" @click="activeChange(3)">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--gray10)]  transition-colors" :class="active === 3 ? 'text-neutral-900 dark:text-neutral-100' : ''"><path d="M16 1.53516C17.1956 2.22677 18 3.51947 18 5.00004C18 6.48061 17.1956 7.77331 16 8.46492M20 18.7325C20.5978 18.3867 21 17.7403 21 17C21 15.5195 20.1956 14.2268 19 13.5352M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5ZM5 13H13C15.2091 13 17 14.7909 17 17C17 18.1046 16.1046 19 15 19H3C1.89543 19 1 18.1046 1 17C1 14.7909 2.79086 13 5 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="hidden flex-shrink-0 select-none text-base font-bold text-[var(--gray11)] transition-colors">
              友链
            </span>
          </NuxtLink>
        </li> -->
        <li class="w-full">
          <NuxtLink class=" inline-flex w-full flex-col items-center justify-center gap-0 leading-none" aria-label="关于" to="/about" @click="activeChange(4)">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--gray10)]  transition-colors" :class="active === 4 ? 'text-neutral-900 dark:text-neutral-100' : ''"><path d="M12.0076 10.5011V14.501M12.0076 7.50007V7.50107M16.5816 18.207C16.1082 18.251 15.6685 18.4709 15.3494 18.8233C15.0149 19.1925 14.7382 19.6249 14.4398 20.023C13.6147 21.1236 13.2022 21.674 12.6964 21.8707C12.2533 22.0431 11.7618 22.0431 11.3188 21.8707C10.8129 21.674 10.4004 21.1236 9.57532 20.023C9.27693 19.6249 9.00022 19.1925 8.66576 18.8233C8.3466 18.4709 7.90693 18.251 7.43355 18.207C6.86257 18.1539 6.28347 18.2423 5.71381 18.1521C4.08778 17.8946 2.81249 16.6193 2.55505 14.9933C2.5083 14.698 2.5083 14.3452 2.5083 13.6394V9.07952C2.5083 6.95149 2.5083 5.88748 2.92244 5.07467C3.28673 4.35971 3.86801 3.77843 4.58297 3.41414C5.39578 3 6.45979 3 8.58783 3H15.4273C17.5553 3 18.6193 3 19.4321 3.41414C20.1471 3.77843 20.7284 4.35971 21.0927 5.07467C21.5068 5.88748 21.5068 6.95149 21.5068 9.07952V13.6394C21.5068 14.3452 21.5068 14.698 21.4601 14.9933C21.2026 16.6193 19.9273 17.8946 18.3013 18.1521C17.7316 18.2423 17.1526 18.1539 16.5816 18.207Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>
            <span class="hidden flex-shrink-0 select-none text-base font-bold text-[var(--gray11)] transition-colors">
              关于
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
