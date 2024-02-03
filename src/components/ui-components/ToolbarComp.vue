<template>
    <v-toolbar density="compact" style="border-bottom: 1px solid #474747; background-color: rgb(255, 255, 255);">
    <v-toolbar-title>{{ props.title }}</v-toolbar-title>

    <v-breadcrumbs :items="props.breadcrumbs"></v-breadcrumbs>

    <v-spacer></v-spacer>

    <v-btn icon @click="notificationDialog = true">
      <i class="fi fi-ss-bell" style="font-size: 20px"></i>
    </v-btn>

    <v-menu v-model="languageDrop">
      <template v-slot:activator="{ props }">
        <v-btn icon @click="languageDrop = true" v-bind="props">
          <i class="fi fi-rr-language" style="font-size: 25px"></i>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title>{{ item.language }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu v-model="menuDrop">
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" @click="menuDrop = true">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsMenu"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.value }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>

  <v-dialog width="800" v-model="notificationDialog">
    <template v-slot:activator="{}"> </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
import { ref, Ref, defineProps, PropType } from "vue";


const items: Ref<Array<{ language: string }>> = ref<
  Array<{ language: string }>
>([{ language: "Ru" }, { language: "En" }]);

const itemsMenu: Ref<Array<{ value: string }>> = ref<Array<{ value: string }>>([
  { value: "My Profile" },
  { value: "Logout" },
]);

const languageDrop: Ref<boolean> = ref<boolean>(false);
const notificationDialog: Ref<boolean> = ref<boolean>(false);
const menuDrop: Ref<boolean> = ref<boolean>(false);

// props
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  breadcrumbs: {
    type: Array as PropType<any[]>,
    required: true
  }
});
</script>