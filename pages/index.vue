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

const imageList = ref([
  {
    alt: '我在苕溪绿道骑行',
    src: 'riding',
  },
  {
    alt: '面向大海我张开了双手',
    src: 'hug',
  },
  {
    alt: '我正在写代码',
    src: 'coding',
  },
])

export interface NavigationChildrenModel {
  title: string
  _path: string
  date: string
  icon: string
  description: string
}

export interface NavigationModel {
  title: string
  _path: string
  children: NavigationChildrenModel[]
}

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const postList = ref<NavigationChildrenModel[]>([])

function getArticleList() {
  postList.value = navigation.value[0].children.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2)
}
getArticleList()
</script>

<template>
  <div class="relative flex flex-1 flex-col items-stretch justify-center px-0 sm:px-2">
    <div class="grid w-full grid-cols-1 place-content-center gap-7 sm:gap-14 lg:grid-cols-2">
      <div
        class="grid h-auto w-full grid-cols-2 gap-4 sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr] lg:grid-cols-2 order-2"
      >
        <div
          class="overflow-hidden shadow-sm rounded-lg sm:rounded-xl border border-[#e9ecef] bg-[#f8f9fa] p-3 sm:p-5 dark:border-[#2d2d2d] dark:bg-[#181818] col-span-2 sm:col-auto sm:row-span-2 md:col-auto md:row-span-2 lg:col-span-2"
        >
          <div class="flex h-full items-center">
            <div class="relative h-0 w-full pb-[75%]">
              <div
                v-for="(item, index) in imageList" :key="index" :data-index="`img${index}`"
                class="absolute h-0 w-[44%] overflow-hidden rounded-lg pb-[60%] leading-none shadow-sm shadow-neutral-200/50 data-[index=img0]:bottom-[10%] data-[index=img0]:left-[2%] data-[index=img1]:left-[28%] data-[index=img2]:bottom-[3%] data-[index=img2]:right-[2%] data-[index=img1]:z-10 data-[index=img0]:-rotate-6 data-[index=img2]:rotate-3 dark:shadow-black/25"
              >
                <div class="inline leading-none">
                  <div class="absolute inset-0 m-0 box-border block overflow-hidden">
                    <img
                      :alt="item.alt" fetchpriority="high" width="1701" height="3024" decoding="async" data-nimg="1"
                      class="pointer-events-none absolute inset-0 m-auto block h-0 max-h-full min-h-full w-0 min-w-full max-w-full select-none rounded-lg bg-[url('/images/fallback.webp')] bg-cover bg-center bg-no-repeat object-cover"
                      sizes="(max-width: 768px) 100vw" :src="importImage(item.src)" style="color: transparent"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="overflow-hidden shadow-sm rounded-lg sm:rounded-xl border border-[#e9ecef] bg-[#f8f9fa] p-3 sm:p-5 dark:border-[#2d2d2d] dark:bg-[#181818] aspect-square h-full"
        >
          <div class="relative h-full w-full overflow-hidden">
            <div class="i-logos-spotify-icon h-10 w-10 fill-[#1ED760] stroke-none sm:h-14 sm:w-14" />
            <a
              href="https://open.spotify.com/track/7dfHnsBDiauoJkpJFUgPau" target="_blank" rel="noopener noreferrer"
              aria-label="生活倒影" title="生活倒影" class="group absolute bottom-0 w-full"
            >
              <div class="flex items-center gap-1">
                <p class="text-sm font-bold text-[#1BD760]">上次听过：</p>
              </div>
              <p
                class="truncate whitespace-nowrap text-xl font-bold tracking-tight text-neutral-700 no-underline underline-offset-4 hover:underline dark:text-neutral-300 sm:text-2xl"
              >
                生活倒影
              </p>
              <p class="truncate whitespace-nowrap text-sm font-medium text-neutral-600 dark:text-neutral-300">
                Sue
              </p>
            </a>
          </div>
        </div>
        <div class="box-border grid aspect-square h-full grid-cols-2 gap-3 sm:grid-cols-1">
          <a
            data-umami-event="GitHub" rel="me noopener noreferrer" target="_blank" href="https://github.com/Virkano"
            class="group relative flex flex-grow items-center justify-center overflow-hidden rounded-lg border border-[#e9ecef] bg-[#f8f9fa] px-2 shadow-sm hover:bg-neutral-200/50 dark:border-[#2d2d2d] dark:bg-[#181818] hover:dark:bg-neutral-700/50 sm:justify-start sm:rounded-xl sm:px-3"
          >
            <div class="i-skill-icons-github-dark h-16 w-16 text-neutral-600/75 sm:h-6 sm:w-6" />
            <span class="sr-only">GitHub</span>
            <span
              class="hidden pl-2 text-[min(10vw,0.75rem,650px)] font-medium text-neutral-800 dark:text-neutral-300 sm:inline-block sm:text-base"
            >GitHub</span>
            <div
              class="absolute right-3 hidden h-5 w-5 items-center justify-center rounded-full bg-neutral-400/20 backdrop-blur-sm group-hover:hidden dark:bg-neutral-500/20 sm:group-hover:flex"
            >
              <div class="i-carbon-arrow-up-right h-3 w-3 text-neutral-500/80 dark:text-neutral-400" />
            </div>
          </a>
          <a
            data-umami-event="Instagram" rel="me noopener noreferrer" target="_blank"
            href="https://www.instagram.com/isclearner/"
            class="group relative flex flex-grow items-center justify-center overflow-hidden rounded-lg border border-[#e9ecef] bg-[#f8f9fa] px-2 shadow-sm hover:bg-neutral-200/50 dark:border-[#2d2d2d] dark:bg-[#181818] hover:dark:bg-neutral-700/50 sm:justify-start sm:rounded-xl sm:px-3"
          >
            <div class="i-skill-icons-instagram h-16 w-16 text-neutral-600/75 sm:h-6 sm:w-6" />
            <span class="sr-only">Instagram</span>
            <span
              class="hidden pl-2 text-[min(10vw,0.75rem,650px)] font-medium text-neutral-800 dark:text-neutral-300 sm:inline-block sm:text-base"
            >Instagram</span>
            <div
              class="absolute right-3 hidden h-5 w-5 items-center justify-center rounded-full bg-neutral-400/20 backdrop-blur-sm group-hover:hidden dark:bg-neutral-500/20 sm:group-hover:flex"
            >
              <div class="i-carbon-arrow-up-right h-3 w-3 text-neutral-500/80 dark:text-neutral-400" />
            </div>
          </a>
          <a
            data-umami-event="Docs" rel="me noopener noreferrer" target="_blank" href="https://docs.virkano.com"
            class="group relative flex flex-grow items-center justify-center overflow-hidden rounded-lg border border-[#e9ecef] bg-[#f8f9fa] px-2 shadow-sm hover:bg-neutral-200/50 dark:border-[#2d2d2d] dark:bg-[#181818] hover:dark:bg-neutral-700/50 sm:justify-start sm:rounded-xl sm:px-3"
          >
            <div class="i-devicon-safari h-16 w-16 text-neutral-600/75 sm:h-6 sm:w-6" />
            <span class="sr-only">Docs</span>
            <span
              class="hidden pl-2 text-[min(10vw,0.75rem,650px)] font-medium text-neutral-800 dark:text-neutral-300 sm:inline-block sm:text-base"
            >Docs</span>
            <div
              class="absolute right-3 hidden h-5 w-5 items-center justify-center rounded-full bg-neutral-400/20 backdrop-blur-sm group-hover:hidden dark:bg-neutral-500/20 sm:group-hover:flex"
            >
              <div class="i-carbon-arrow-up-right h-3 w-3 text-neutral-500/80 dark:text-neutral-400" />
            </div>
          </a>
        </div>
      </div>
      <div class="order-1 self-center lg:order-3">
        <div class="pb-2 sm:pb-8">
          <div class="flex flex-col gap-4 text-justify">
            <h1 class="mt-6 text-2xl font-bold tracking-wide text-zinc-800 dark:text-zinc-200 md:mt-0 md:text-3xl">
              你好！我是 Kano 👋
            </h1>
            <p class="text-base text-zinc-800 dark:text-zinc-200 max-md:text-sm">
              一名前端开发工作者，热衷于将所学到的知识付诸实践，包括不限于编程、设计、视频内容创作
            </p>
            <p class="text-base max-md:text-sm">
              除了写代码之外，我还喜欢骑行、旅行和摄影，如果你也和我一样在<span
                class="border-[#d8dcdf mx-1 inline-block cursor-default rounded-md border py-[0.025em] pr-1 leading-none transition-colors dark:border-[#323232]"
              ><svg
                width="1em" height="1em" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="inline-block h-5 w-5 fill-neutral-700 align-sub dark:fill-neutral-300 max-md:h-4 max-md:w-4"
              >
                <path
                  d="M455.434 166.57a190.678 190.678 0 0 1 56.378-6.996 190.678 190.678 0 0 1 56.376 6.996c11.75-6.94 18.27-19.244 16.914-31.914-1.88-22.016-12.78-34.134-40.968-58.198-24.242-20.308-15.22-71.68-15.22-71.68L512 0l-17.29 4.78s9.02 51.2-15.22 71.68C451.3 100.008 440.4 112.64 438.52 134.654c-1.358 12.67 5.162 24.972 16.912 31.914zM709.32 904.534c-0.594-28.574-21.504-53.504-51.68-61.612v-27.818H366.17v27.136c-30.362 8.244-51.25 33.514-51.49 62.294 0 0-14.66 2.048-14.66 13.312v86.868S322.574 1024 512 1024c189.426 0 212.166-19.968 212.166-19.968v-86.87c0-11.264-14.846-12.628-14.846-12.628z m-63.894-384L512 515.24l-133.426 5.292c-87.572 31.572-126.284 165.716-10.336 274.602h287.524c115.948-108.884 77.236-243.028-10.336-274.602zM512 704c-29.736-1.596-52.416-24.78-50.66-51.786 1.614-24.776 23.378-44.54 50.66-46.006 29.734 1.596 52.416 24.782 50.658 51.786-1.612 24.778-23.376 44.542-50.66 46.006z m107.68-249.514l7.14-12.288c8.774-18.94-1.02-40.754-21.878-48.72-0.9-0.346-1.814-0.66-2.74-0.944V345.94a199.054 199.054 0 0 0 54.124-11.436c11.84-4.608 17.664-9.728 17.664-13.48v-21.676c0-10.58-58.068-23.38-161.99-23.38-103.922 0-161.99 12.8-161.99 23.38v21.674c0 7.51 23.114 20.31 71.598 24.918v46.592c-21.456 6.522-33.026 27.606-25.844 47.09 0.364 0.988 0.772 1.96 1.226 2.914l5.638 12.288c-50.364 5.974-81.936 14.678-81.936 27.308v17.066s101.104-2.56 191.308-2.56c90.202 0 191.118 2.9 191.118 2.9v-17.066c0-13.14-31.384-22.698-83.44-27.988z m-140.19-63.488h-18.794v-28.5h18.794v28.5z m83.814 0h-18.794v-28.5h18.794v28.5z m-124.97-125.1s37.586-3.072 73.666-3.072 73.666 3.072 73.666 3.072c15.626-12.122 25.352-29.358 27.06-47.956 0-27.478-40.214-43.692-100.726-43.692s-100.54 16.044-100.54 43.692c1.664 18.574 11.32 35.804 26.874 47.956z"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                />
              </svg><b class="text-base text-neutral-700 dark:text-neutral-300 max-md:text-sm">杭州</b></span>也许我们可以一起出去玩~
            </p>
          </div>
        </div>
        <h2 class="my-4 flex items-center text-base text-neutral-600 dark:text-neutral-300 max-md:text-sm">
          <svg
            width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 flex-none"
          >
            <path
              d="M12 21C16.018 17.7256 16.0891 24.3574 21 19M3.06616 18.3151C3.07546 17.9381 3.08011 17.7497 3.12568 17.5726C3.16608 17.4156 3.23007 17.2658 3.31544 17.1282C3.41171 16.973 3.54444 16.8396 3.8099 16.573L16.8626 3.46297C17.3862 2.93708 18.204 2.84896 18.8267 3.25131C19.565 3.7283 20.1957 4.3551 20.6785 5.09146L20.7123 5.14307C20.7368 5.18037 20.749 5.19902 20.7594 5.21582C21.1427 5.83327 21.0616 6.63294 20.5622 7.16005C20.5486 7.17439 20.5329 7.19018 20.5014 7.22177L7.52811 20.2521C7.25274 20.5287 7.11505 20.6669 6.95435 20.7658C6.81188 20.8534 6.65654 20.9178 6.49406 20.9568C6.31079 21.0008 6.11608 21.0005 5.72665 20.9999L3 20.9955L3.06616 18.3151Z"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            />
          </svg>
          <span class="ml-1.5 select-none">近期文章</span>
        </h2>
        <ol class="space-y-4">
          <li v-for="(item, index) in postList" :key="index">
            <NuxtLink class="group" :to="item._path">
              <h3
                class="m-0 p-0 text-xl font-bold underline decoration-dotted underline-offset-4 group-hover:decoration-solid max-md:text-base"
              >
                {{ item.title }}
              </h3>
              <div class="flex flex-col">
                <p
                  class="line-clamp-2 py-1 pb-0.5 text-md leading-6 text-neutral-600 dark:text-neutral-300 max-md:text-sm"
                >
                  {{ item.description }}
                </p>
              </div>
            </NuxtLink>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
