<template>
  <div
    class="fixed flex w-screen h-screen justify-center items-center flex-col z-[99] overflow-hidden bg-white dark:bg-neutral-950"
  >
    <!-- <div
      class="relative w-12 h-12 rotate-[165deg] before:content-[''] after:content-[''] before:absolute after:absolute before:top-2/4 after:top-2/4 before:left-2/4 after:left-2/4 before:block after:block before:w-[.5em] after:w-[.5em] before:h-[.5em] after:h-[.5em] before:rounded after:rounded before:-translate-x-1/2 after:-translate-x-1/2 before:-translate-y-2/4 after:-translate-y-2/4 before:animate-[loaderBefore_2s_infinite] after:animate-[loaderAfter_2s_infinite]"
    /> -->
    <svg
      width="4em"
      height="4em"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="rounded-md border border-[#d8dcdf] transition-colors dark:border-[#323232]"
    >
      <rect width="200" height="200" fill="black" />
      <path d="M114.925 44H77C71.4772 44 67 48.4772 67 54V110.945C67 120.841 79.8373 124.725 85.3231 116.488L123.248 59.5431C127.674 52.8973 122.91 44 114.925 44Z" fill="white" /><path d="M134 162.3C137.314 162.3 140.062 159.584 139.356 156.346C137.911 149.727 134.078 143.577 128.284 138.753C120.783 132.508 110.609 129 100 129C89.3913 129 79.2172 132.508 71.7157 138.753C65.9221 143.577 62.0893 149.727 60.6444 156.346C59.9377 159.584 62.6863 162.3 66 162.3L100 162.3H134Z" fill="white" /></svg>
  </div>
</template>

<style>
/* @keyframes loaderBefore {
  0% {
    width: 0.5em;
    box-shadow:
      1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }

  35% {
    width: 2.5em;
    box-shadow:
      0 -0.5em rgba(225, 20, 98, 0.75),
      0 0.5em rgba(111, 202, 220, 0.75);
  }

  70% {
    width: 0.5em;
    box-shadow:
      -1em -0.5em rgba(225, 20, 98, 0.75),
      1em 0.5em rgba(111, 202, 220, 0.75);
  }

  100% {
    box-shadow:
      1em -0.5em rgba(225, 20, 98, 0.75),
      -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}

@keyframes loaderAfter {
  0% {
    height: 0.5em;
    box-shadow:
      0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }

  35% {
    height: 2.5em;
    box-shadow:
      0.5em 0 rgba(61, 184, 143, 0.75),
      -0.5em 0 rgba(233, 169, 32, 0.75);
  }

  70% {
    height: 0.5em;
    box-shadow:
      0.5em -1em rgba(61, 184, 143, 0.75),
      -0.5em 1em rgba(233, 169, 32, 0.75);
  }

  100% {
    box-shadow:
      0.5em 1em rgba(61, 184, 143, 0.75),
      -0.5em -1em rgba(233, 169, 32, 0.75);
  }
} */
</style>
