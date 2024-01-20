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
        :prepend-icon="it.icon"
        :title="it.title"
        :value="it.value"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts" setup>
import {
  useNavigationDrawer,
  navListType,
} from "../../composables/NavigationDrawer/useNavigationDrawer";

const { navList, object_user_data_template } = useNavigationDrawer();
</script>
<style lang=""></style>
