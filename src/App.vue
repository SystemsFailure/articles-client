<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <navigation-drawer></navigation-drawer>
  </v-app>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import NavigationDrawer from "@/components/ui-components/NavigationDrawer.vue";

// import { AxiosInstance } from 'axios';
// import { inject, onMounted } from 'vue';
// import moment from 'moment';
// const http: AxiosInstance | undefined = inject('$http');

// onMounted(() => {
// http!.get('https://jsonplaceholder.typicode.com/posts').then((response: any) => {
// response.data.map((post: any) =>{
//   Object.assign(post, {
//     createdAt: moment().format('YYYY-MM-DD HH:mm:ss'),
//     updatedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
//     body: "Hello, lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam quis risus eget urna mollis",
//     mode: 'private',
//   })
// })
// })
// })

onMounted(() => {
  console.log(process.env.NODE_ENV);
});
</script>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
