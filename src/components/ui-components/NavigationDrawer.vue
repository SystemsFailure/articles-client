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
        :active="it.id === selectedItemId"
      >
        <template v-slot:prepend>
          <v-avatar size="20" rounded="0">
            <img
              :src="require(`@/assets/icons/prodaction/${it.icon}`)"
              style="object-fit: contain"
            />
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import {
  useNavigationDrawer,
  navListType,
} from "../../composables/NavigationDrawer/useNavigationDrawer";
import { useRouter } from "vue-router";
import { Ref } from "vue";
const router = useRouter();
const { navList, object_user_data_template } = useNavigationDrawer();

const selectedItemId: Ref<string> = ref<string>("");

function goOtherPage(id: string) {
  switch (id) {
    case "1":
      // window.location.href = "/articles";
      selectedItemId.value = id;
      router.push({ name: "articles" });
      break;
    case "2":
      selectedItemId.value = id;
      router.push({ name: "arhives" });
      break;
    case "3":
      selectedItemId.value = id;
      break;
    case "4":
      selectedItemId.value = id;
      break;
    case "5":
      selectedItemId.value = id;
      break;
    case "6":
      selectedItemId.value = id;
      break;
    case "7":
  }
}
</script>
