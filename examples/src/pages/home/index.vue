<script setup lang="ts">
import { presetPrimaryColors } from "@kirklin/palette";
import ColorPalette from "~/pages/home/components/colorPalette/index.vue";

defineOptions({
  name: "Home",
});
</script>

<template>
  <div>
    <div class="container mx-auto">
      <div class="p-4 border-rounded">
        <div class="grid grid-cols-4 gap-10">
          <ColorPalette
            v-for="(color, name) in presetPrimaryColors"
            :key="name"
            :color-name="name"
            color-type="hex"
            :primary-color="color"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
