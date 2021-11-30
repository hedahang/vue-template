<template>
  <div class="screen">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <span>大屏页面</span>
  </div>
</template>
