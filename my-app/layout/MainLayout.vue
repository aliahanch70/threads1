<template>
  <div id="MainLayout" class="h-screen">
    <div class="w-full max-w-[500px] mx-auto">
      <div id="TopMenu" class="w-full flex items-center justify-center px-2 h-10 my-2">
        <img class="w-[35px]" src="/threads-logo.png" >
      </div>
    </div>

    <div class="flex w-full max-w-[500px] mx-auto h-screen">
      <slot/>
    </div>
    <div
      id="BottomNav"
      class="fixed z-50 bottom-0 w-full h-[700px] border-t border-t-gray-700 bg-black"
    >
      <div class="flex w-full max-w-[500px] mx-auto items-center justify-center">
        <button
          @click="navigateTo('/')"
          class="w-full h-full text-purple-400"
        >
          <Icon name="home" size="35" color="#ffffff"/>
          home
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>

</script>
