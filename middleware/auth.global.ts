export default defineNuxtRouteMiddleware((to, _from) => {
  const limitList = ['/count'] // 配置适配 路由
  if (limitList.includes(to.fullPath)) {
    // if (!localStorage.getItem('token')) // 没有localStorage 会报错
    return navigateTo('/login') // 一定要写return
  }
})
