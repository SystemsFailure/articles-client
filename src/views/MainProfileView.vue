<template lang="html">
    <navigation-drawer></navigation-drawer>
    <v-main>
        <v-container fluid style="height: 100vh;">
            <div style="display: flex;">
                <v-card variant="tonal" width="50%" height="250" class="py-5 px-5" style="display: flex;">
                    <div style="display: flex; width: 20%; height: 100%; align-items: center; justify-content: center;">
                        <v-avatar size="150" style="border-radius: 50%;" class="ml-10">
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
            <v-card class="mt-10 py-5 px-5 m-0" width="90%" height="100%">
                <v-list lines="two">
                    <v-list-item
                            v-for="article of listArticles"
                            :key="article.id"
                        >
                        <v-card width="100%" height="180"  class="py-5 px-15 card-article" style="display: flex; flex-direction: column;">
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <v-text>{{ article.title }}</v-text>
                                <v-text class="font-weight-light">{{ article.date }}</v-text>
                            </div>
                            <v-card-subtitle class="py-0 px-0 m-0 mt-3" style="text-wrap: wrap;">
                                {{ article.subtitle }}
                            </v-card-subtitle>

                            <div style="display: flex;" class="mt-7">
                                <v-badge
                                    color="success"
                                    :content="article.category"
                                    inline
                                    style="transform: scale(1.1);"
                                ></v-badge>
                                <v-badge
                                    color="info"
                                    :content="'views - ' + article.views"
                                    inline
                                    style="transform: scale(1.1);"
                                    class="ml-5"
                                ></v-badge>
                                <v-badge
                                    color="info"
                                    :content="'likes - ' + article.likes"
                                    inline
                                    style="transform: scale(1.1);"
                                    class="ml-5"
                                ></v-badge>
                                <v-badge
                                    class="ml-auto"
                                    color="info"
                                    :content="article.mode"
                                    style="transform: scale(1.1);"
                                    inline
                                ></v-badge>
                            </div>
                        </v-card>

                </v-list-item>

                    
                </v-list>
            </v-card>
        </v-container>
    </v-main>
</template>
<script lang="ts" setup>
import NavigationDrawer from '@/components/ui-components/NavigationDrawer.vue';
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute()

const listArticles: Array<any> = reactive<Array<any>>([
    {
        id: 0,
        title: 'Nuclear HydroOxygen',
        subtitle: 'Short Description - Example:  mer by this sun of mounting barded steedsTo the clouds that am curtaild of our bruised arms hung up for sportion,h\'d his wreaths;I, that am rudely stam, and with victorious wrinkled front;And... by this sun of mounting barded steedsTo the clouds that am curtail\'d of our bruised arms hung up for sportion,h\'d his wreaths;I, that am rudely stamp\'d, and with victorious wrinkled front;And... ',
        category: 'Mathematical',
        date: '2021-01-01',
        mode: 'private',
        user: {},
        likes: 21,
        views: 42,
        comments: [
            {
                id: 0,
                user: {
                    id: 0,
                    name: 'Eric Leonhard',
                    avatar: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                content: 'Very good article',
                date: '2021-01-01',
            },
        ],
        corrections: 3,
    },
    {
        id: 0,
        title: 'Nuclear HydroOxygen',
        subtitle: 'Short Description - Example:  mer by this sun of mounting barded steedsTo the clouds that am curtaild of our bruised arms hung up for sportion,h\'d his wreaths;I, that am rudely stam, and with victorious wrinkled front;And... by this sun of mounting barded steedsTo the clouds that am curtail\'d of our bruised arms hung up for sportion,h\'d his wreaths;I, that am rudely stamp\'d, and with victorious wrinkled front;And... ',
        category: 'Mathematical',
        date: '2021-01-01',
        mode: 'private',
        user: {},
        likes: 21,
        views: 42,
        comments: [
            {
                id: 0,
                user: {
                    id: 0,
                    name: 'Eric Leonhard',
                    avatar: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
                },
                content: 'Very good article',
                date: '2021-01-01',
            },
        ],
        corrections: 3,
    },
])

onMounted(() => {
    console.log($route.params.account)
})

</script>

<style scoped>
.card-article {
    border-left: 5px solid #adadad;
}

.card-article:hover {
    opacity: 0.5;
    cursor: pointer;
}
</style>