<script setup lang="ts">
defineOptions({
  name: "Layout",
});
</script>

<template>
  <div class="font-chinese antialiased">
    <div class="min-h-screen">
      <!--      <Navbar /> -->
      <RouterView />
    </div>
    <!--    <Footer /> -->
  </div>
</template>

<style scoped>

</style>
