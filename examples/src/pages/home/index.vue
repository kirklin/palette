<script setup lang="ts">
import { presetPalettes } from "@kirklin/palette";

defineOptions({
  name: "Home",
});
const toasts = ref<{ id: number; message: string }[]>([]);

const removeToast = (toast: { id: number; message: string; timeout: NodeJS.Timeout }) => {
  clearTimeout(toast.timeout);
  const index = toasts.value.findIndex(t => t.id === toast.id);
  if (index !== -1) {
    toasts.value.splice(index, 1);
  }
};
const showToast = (msg: string) => {
  const newToast: {
    id: number;
    message: string;
    timeout: NodeJS.Timeout;
  } = {
    id: Date.now(),
    message: msg,
    timeout: setTimeout(() => removeToast(newToast), 3000),

  };
  toasts.value.push(newToast);
};

const copyHexValue = (hex: string) => {
  navigator.clipboard.writeText(hex);
};

const getContrastingColor = (hexColor: string) => {
  // Calculate the luminance of the background color
  const r = Number.parseInt(hexColor.slice(1, 3), 16);
  const g = Number.parseInt(hexColor.slice(3, 5), 16);
  const b = Number.parseInt(hexColor.slice(5, 7), 16);
  const luminance = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

  // Return a contrasting text color based on the background color's luminance
  return luminance > 0.5 ? "#000000" : "#ffffff";
};

// eslint-disable-next-line no-console
console.log(presetPalettes);
</script>

<template>
  <div>
    <div class="toast toast-bottom toast-end transition-all">
      <div v-for="toast in toasts" :key="toast.id" class="alert alert-success">
        <span>{{ toast.message }}</span>
      </div>
    </div>
    <div class="container m-auto">
      <div class="bg-dark p-4 border-rounded">
        <p class="text-light font-extrabold text-xl mb-4">
          Pick the color you want
        </p>
        <div class="grid grid-cols-3 gap-3">
          <div
            v-for="(el, i) in presetPalettes" :key="i" :style="{ backgroundColor: el.primary }"
            class="border-rounded cursor-pointer "
          >
            <p class="text-light h-16 pl-3 pt-3">
              {{ i }}
            </p>
            <div v-for="(hex, index) in el" :key="index">
              <p
                :style="{ backgroundColor: hex, color: getContrastingColor(hex) }"
                class="h-10 flex w-full justify-center items-center @hover:scale-105 transition-all"
                @click="copyHexValue(hex), showToast(`copied ${hex}`)"
              >
                {{ hex }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
