<template lang="html">
<!-- <v-card> -->
    <!-- <v-layout> -->
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            :prepend-avatar="object_user_data_template.icon_link"
            :title="object_user_data_template.title"
            :subtitle="object_user_data_template.subtitle"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list v-for="it in navList" :key="it.id" density="compact" nav>
          <v-list-item :prepend-icon="it.icon" :title="it.title" :value="it.value"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    <!-- </v-layout> -->
<!-- </v-card> -->

</template>

<script lang="ts" setup>
import { reactive, ref, Ref } from 'vue'

const valueRef_userName: Ref<string> = ref('Adams');

interface UserDTO {
    icon_link: string,
    title: string,
    subtitle: string
}

let object_user_data_template: Ref<UserDTO> = ref({
    icon_link: 'https://randomuser.me/api/portraits/women/85.jpg',
    title: 'Sandra Adams',
    subtitle: 'sandra_a23@gmail.com'
});

const navList = [
    {id: "1", value: 'myfiles', title: 'My Files', icon: 'mdi-folder'}, 
    {id: "2", value: 'shared', title: 'Shared with me', icon: 'mdi-account-multiple'},
    {id: "3", value: 'starred', title: 'Starred', icon: 'mdi-star'},
];

setTimeout(() => {
    object_user_data_template.value = {
    icon_link: 'https://randomuser.me/api/portraits/women/85.jpg',
    title: 'Sandra Adamas 01',
    subtitle: 'sandra_a23@gmail.com'
}
// valueRef_userName.value = 'sandra_a23';
}, 3000);

</script>