<template lang="html">
  <ToolbarComp :title="'Profile'" :breadcrumbs="['a', 'b']"></ToolbarComp>
  <navigation-drawer></navigation-drawer>
  <v-main>
    <v-container fluid style="height: 100vh">
        <v-container fluid>
            <v-card variant="outlined" class="py-5 px-5">
                <div class="d-flex" style="flex-direction: row; align-items: center;">
                    <div class="mr-5">
                        <v-avatar size="150" class="ml-5" :style="{ borderRadius: '50%' }">
                            <v-img
                                cover
                                :src="profile.avatarURL"
                                :alt="profile.username"
                                :placeholder="getPlaceholder"
                            ></v-img>
                        </v-avatar>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="ml-3">
                            <h1 class="display-1 mb-1">{{ profile.username }}</h1>
                            <h2 class="headline">{{ profile.profession }}</h2>
                        </div>

                        <div class="ml-15" style="max-width: 350px;">
                            <h3 class="subtitle-1">About</h3>
                            <p class="body-2">{{ profile.bio }}</p>
                        </div>

                        <div class="ml-15">
                            <h3 class="subtitle-1">Contact</h3>
                            <p class="body-2">Email: {{ profile.email }}</p>
                            <p class="body-2">Website: {{ profile.websiteURL }}</p>
                            <p class="body-2">Location: {{ profile.location }}</p>
                        </div>
                    
                        <div class="ml-15">
                            <h3 class="subtitle-1">Social Media</h3>
                            <template v-for="(link, platform) in profile.socialMedia" :key="link">
                            <p class="body-2">{{ capitalize(platform) }}: {{ link }}</p>
                            </template>
                        </div>

                        <div class="ml-15">
                            <h3 class="subtitle-1">Stats</h3>
                            <p class="body-2">Articles: {{ profile.articleCount }}</p>
                            <p class="body-2">Followers: {{ profile.followerCount }}</p>
                            <p class="body-2">Following: {{ profile.followingCount }}</p>
                        </div>
                    </div>
                </div>
            </v-card>
        </v-container>

        <v-tabs v-model="tab" class="mt-5 ml-4">
            <v-tab value="one">Articles</v-tab>
            <v-tab value="two">Statistics</v-tab>
            <v-tab value="three">Questions/Answers</v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item value="one">
                <ArticlesListComp></ArticlesListComp>
            </v-window-item>

            <v-window-item value="two"> Two </v-window-item>

            <v-window-item value="three"> Three </v-window-item>
        </v-window>
    </v-container>
  </v-main>
</template>
<script lang="ts" setup>
import NavigationDrawer from "@/components/ui-components/NavigationDrawer.vue";
import ArticlesListComp from "@/components/ui-components/Articles/ArticlesListComp.vue";
import { UserProfile } from "@/types/user/user-profile.type";
import { onMounted, ref, Ref } from "vue";
import { useRoute } from "vue-router";
import ToolbarComp from "@/components/ui-components/ToolbarComp.vue";

const $route = useRoute();
let profile: Ref<UserProfile> = ref<UserProfile>({
    id: 1,
    username: "Eric Leonhard",
    firstName: "Eric",
    lastName: "Leonhard",
    email: "john.doe@example.com",
    bio: "Software developer passionate about creating innovative solutions. This is the best solution for the world.", 
    avatarURL: "https://firebasestorage.googleapis.com/v0/b/messangercloud.appspot.com/o/01.jpg?alt=media&token=435f5c47-1f5c-4173-931a-b0790cd49745",
    websiteURL: "https://example.com",
    location: "New York, USA",
    profession: "Software Developer",
    socialMedia: {
        twitter: "https://john_doe.com",
        linkedin: "https:john-doe.facebook.com",
    },
    articleCount: 10,
    followerCount: 1000,
    followingCount: 500,
    confirmed: true,
});

const tab = ref(null);

onMounted(() => {
  console.log($route.params.account);
});

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPlaceholder(): string {
    return `
    <div class="d-flex align-center justify-center fill-height">
        <v-progress-circular color="green lighten-4" indeterminate></v-progress-circular>
    </div>
    `;
}
</script>
