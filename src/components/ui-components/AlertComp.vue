<template>
  <div>
    <v-alert
      density="compact"
      :type="props.type"
      :title="props.title"
      closable
      :text="props.text"
    ></v-alert>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps({
  type: {
    type: String as () => "warning" | "error" | "success" | "info" | undefined,
    default: "error",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
