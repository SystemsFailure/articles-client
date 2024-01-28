<template lang="html">
    <navigation-drawer></navigation-drawer>
    <v-main>
        <v-container fluid style="height: 100vh;">
            <div style="display: flex;">
                <v-card variant="outlined" width="50%" height="250" class="py-5 px-5" style="display: flex;">
                    <div style="display: flex; width: 20%; height: 100%; align-items: center; justify-content: center;">
                        <v-avatar size="150" style="border-radius: 50%;" class="ml-5">
                            <v-img
                                cover
                                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                                style="border-radius: 100px;"
                            >   
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular
                                            color="green-lighten-4"
                                            indeterminate
                                        ></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>
                        </v-avatar>
                    </div>

                    <div class="ml-auto">
                        <v-card-title style="display: flex; flex-direction: column;">
                            <v-text class="font-weight-light" style="font-size: 18px;">
                                {{ 'Eric Leonhard' }}
                            </v-text>
                            <v-text class="mt-2" style="font-size: 18px;">
                                <span class="font-weight-light">
                                    Token - {{ ' SicretblS6X?QN-H=L0EVWzjDc8JId6h9NZ' }}
                                </span>
                                <img :src="require('@/assets/icons/fails/copied.png')" width="20" height="20" alt="" class="ml-2">
                            </v-text>
                            <v-text class="font-weight-light mt-2" style="font-size: 18px;">
                                <h6>Country, City</h6> - {{ 'England, London' }}
                            </v-text>
                            <div class="mt-10" style="display: flex;">
                                <div style="display: flex; align-items: center;" class="mr-5">
                                    <img :src="require('@/assets/icons/fails/views.png')" width="20" alt="">
                                    <v-text class="font-weight-light ml-2" style="font-size: 14px"> - {{ '12k' }}</v-text>
                                </div>
                                <div style="display: flex; align-items: center;" class="mr-5">
                                    <img :src="require('@/assets/icons/fails/docs.png')" width="20" alt="">
                                    <v-text class="font-weight-light ml-2" style="font-size: 14px"> - {{ '65' }}</v-text>
                                </div>
                                <div style="display: flex; align-items: center;" class="mr-5">
                                    <img :src="require('@/assets/icons/fails/like.png')" width="20" alt="">
                                    <v-text class="font-weight-light ml-2" style="font-size: 14px"> - {{ '165K' }}</v-text>
                                </div>
                            </div>
                        </v-card-title>

                    </div>
                </v-card>

                <v-card width="40%" height="250" variant="text"></v-card>
            </div>

            <v-tabs
                v-model="tab"
                class="mt-5"
            >
                <v-tab value="one">Articles</v-tab>
                <v-tab value="two">Statistics</v-tab>
                <v-tab value="three">Questions/Answers</v-tab>
            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="one">
                    <ArticlesListComp></ArticlesListComp>
                </v-window-item>

                <v-window-item value="two">
                Two
                </v-window-item>

                <v-window-item value="three">
                Three
                </v-window-item>
            </v-window>

        </v-container>
    </v-main>
</template>
<script lang="ts" setup>
import NavigationDrawer from '@/components/ui-components/NavigationDrawer.vue';
import ArticlesListComp from '@/components/ui-components/Articles/ArticlesListComp.vue';

import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute()

const tab = ref(null)

onMounted(() => {
    console.log($route.params.account)
})

</script>