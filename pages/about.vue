<template>
  <div class="layout-center">
    <header class="mb-10">
      <h1 class="text-3xl font-bold">
        关于
      </h1>
    </header>
    <article class="prose dark:prose-invert max-md:prose-sm">
      <div class="text-[var(--gray11)]">
        <figure class="float-left !mt-1 mr-4 table rounded-full border-4 p-1 ">
          <img alt="Kano Zhao，一名前端开发工作者，热衷于将所学到的知识付诸实践，包括不限于编程、设计、视频内容创作。" fetchpriority="high" width="100" height="100" decoding="async" data-nimg="1" class="!m-0 aspect-square !h-[100px] !w-[100px] rounded-full bg-neutral-100 dark:bg-neutral-900" src="~/assets/images/avatar.png" style="color: transparent;">
        </figure>
        <p>你好！我是 Kano，一名前端开发工作者，热衷于将所学到的知识付诸实践，包括不限于编程、设计、视频内容创作。</p><p class="!mt-4">
          不定期更新，主要分享前端领域的技术文章、效率工具推荐、生活上的思考，但也可能会出现其他任何内容。
        </p>
      </div>
      <h2 id="标签">
        <a class="anchor" href="#标签" />标签
      </h2>
      <p>
        <code class="mr-1" dir="ltr">调停者</code>
        <del><code class="mr-1" dir="ltr">失眠患者</code></del>
        <code class="mr-1" dir="ltr">打篮球🏀</code>
        <code class="mr-1" dir="ltr">周末就想出去玩</code>
      </p>
      <h2 id="兴趣爱好">
        <a class="anchor" href="#兴趣爱好" />兴趣爱好
      </h2>
      <ul>
        <li>
          <p><strong>打篮球：</strong> 因为初中学习压力过大接触的一项运动，然后就一发不可收拾，不过依然「菜鸡互啄」</p>
        </li>
        <li>
          <p><strong>台球：</strong> 工作后朋友间最多的周末活动，但发挥水平浮动较大，笃信「大力出奇迹」</p>
        </li>
        <li>
          <p><strong>羽毛球：</strong> 陪女友一起最多的运动，能给他打趴下的那种 </p>
        </li>
        <li>
          <p><strong>徒步：</strong> 去户外，动起来，你就知道电子屏是多么的单调</p>
        </li>
      </ul>
      <h2 id="关于本站">
        <a class="anchor" href="#关于本站" />关于本站
      </h2>
      <details class="group m-0 mt-4 rounded-md border p-0">
        <summary class="!m-0 cursor-pointer select-none px-4 py-2 group-hover:!text-[var(--fg-deep)]">
          <p class="!m-0 !inline-block text-base">
            构建本站用到的技术和工具
          </p>
        </summary>
        <ul class="!m-0 rounded-b-md border-t bg-neutral-50 !px-4 !py-2 dark:bg-neutral-950">
          <li>Nuxt.js（框架）</li>
          <li>Unocss CSS（样式）</li>
          <li>NuxtContent（内容处理）</li>
          <li>Vercel（部署服务）</li>
        </ul>
      </details>
      <h2 id="找到我">
        <a class="anchor" href="#找到我" />找到我
      </h2>
      <div class="flex gap-3 text-md">
        <a data-umami-event="GitHub" rel="me noopener noreferrer" target="_blank" href="https://github.com/Virkano">GitHub
          <span class="sr-only">GitHub</span>
        </a>
        <a data-umami-event="Instagram" rel="me noopener noreferrer" target="_blank" href="https://www.instagram.com/isclearner/">Instagram
          <span class="sr-only">Instagram</span>
        </a>
      </div>
    </article>
  </div>
</template>
