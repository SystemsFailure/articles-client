<template lang="html">
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        :prepend-avatar="object_user_data_template.icon_link"
        :title="object_user_data_template.title"
        :subtitle="object_user_data_template.subtitle"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
      v-for="it of (navList as Array<navListType>)"
      :key="it.id"
      density="compact"
      nav
    >
      <v-list-item
        @click="goOtherPage(it.id)"
        :title="it.title"
        :value="it.value"
        :prepend-avatar="require(`@/assets/icons/fails/${it.icon}`)"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import {
  useNavigationDrawer,
  navListType,
} from "../../composables/NavigationDrawer/useNavigationDrawer";
import { useRouter } from "vue-router";
const router = useRouter();
const { navList, object_user_data_template } = useNavigationDrawer();

function goOtherPage(id: string) {
  switch (id) {
    case "1":
      // window.location.href = "/articles";
      router.push({ name: "articles" });
      break;
    case "2":
      router.push({ name: "arhives" });
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      break;
    case "7":
  }
}
</script>
