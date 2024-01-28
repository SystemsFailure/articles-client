<template lang="html">
  <navigation-drawer></navigation-drawer>

    <v-toolbar density="compact">

      <v-toolbar-title>All Articles</v-toolbar-title>

      <v-breadcrumbs :items="['My Articles', 'Articles', 'Show']"></v-breadcrumbs>

      <v-spacer></v-spacer>

      <v-btn icon @click="notificationDialog = true">
        <i class="fi fi-ss-bell" style="font-size: 20px;"></i>
      </v-btn>

      
      <v-menu v-model="languageDrop">
        <template v-slot:activator="{props}">
          <v-btn icon @click="languageDrop = true" v-bind="props">
            <i class="fi fi-rr-language" style="font-size: 25px;"></i>
          </v-btn>
        </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :value="index"
            >
            <v-list-item-title>{{ item.language }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu v-model="menuDrop">
        <template v-slot:activator="{props}">
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

    <v-container fluid>

      <div style="display: flex; align-items: center;" class="mb-5">
        <!-- Here need filte button and pagination -->
        <v-btn variant="outlined" @click="isActive = true">
          Filters
        </v-btn>

        <v-btn variant="outlined" class="ml-4">
          New
        </v-btn>

        <v-btn variant="outlined" class="ml-4">
          Old
        </v-btn>

        <v-btn variant="outlined" class="ml-4">
          Favorite
        </v-btn>
      </div>

      <v-divider></v-divider>

      <v-container fluid>
        <div style="height: max-content;" ref="listArticles">
          <div ref="article" v-for="article of articles" :key="article.id">
            <v-card variant="outlined">
              <v-img :src="article.imageURL"></v-img>
              <div style="display: inline-flex; align-items: center; width: 100%;">
                <v-card-title>{{ article.title }}</v-card-title>
                <v-spacer></v-spacer>
                <v-card-subtitle>{{ article.date }}</v-card-subtitle>
              </div>
              <v-card-subtitle>{{ article.author }}</v-card-subtitle>
              <v-card-text>{{ sliceDefault(article.content, 350) }}</v-card-text>
              <v-card-subtitle>Related Articles:
                <ul v-if="article.relatedArticles.length > 0">
                  <li v-for="relatedArticle of article.relatedArticles" :key="relatedArticle.id">
                    <a :href="`/articles/${relatedArticle.id}`">{{ relatedArticle.title }}</a>
                  </li>
                </ul>
                <span v-else>Автор не указал ссылки на другие статьи</span>
              </v-card-subtitle>

              <div style="display: inline-flex; align-items: center; width: 100%;">
                <v-card-subtitle>Tags: {{ article.tags.join(", ") }}</v-card-subtitle>
                <v-card-subtitle>Category: {{ article.category }}</v-card-subtitle>
                <v-card-subtitle>Views: {{ article.views }}</v-card-subtitle>
                <v-card-subtitle>Likes: {{ article.likes }}</v-card-subtitle>
                <v-card-subtitle>Comments: {{ article.comments.length }}</v-card-subtitle>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn>Read More</v-btn>
                  <v-btn v-if="article.externalLink" :href="article.externalLink">External Link</v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div>
        </div>
      </v-container>

    </v-container>
    
    <v-dialog width="900" v-model="isActive">
      <template v-slot:default="">
        <v-card title="Here you cat to settings all filters for seraching">

          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
              <v-text-field
                  model-value="John Doe"
                  density="compact"
                  label="underlined"
                  variant="outlined"
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              ></v-combobox>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              ></v-combobox>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              ></v-combobox>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              ></v-combobox>
              </v-col>

              <v-col
                cols="12"
                sm="6"
              >
              <v-switch label="Switch"></v-switch>
              </v-col>

              <v-col
                cols="12"
                sm="3"
              >
              <v-checkbox label="Checkbox"></v-checkbox>
              </v-col>

              <v-col
                cols="12"
                sm="3"
              >
              <v-checkbox label="Checkbox"></v-checkbox>
              </v-col>
            </v-row>
          </v-container>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              variant="outlined"
              text="Search"
            ></v-btn>

            <v-btn
              variant="outlined"
              text="Close"
              @click="isActive = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

    <v-dialog width="800" v-model="notificationDialog">
      <template v-slot:activator="{  }">
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Dialog">
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              text="Close Dialog"
              @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref, Ref, watch, onMounted } from "vue";
import NavigationDrawer from "../components/ui-components/NavigationDrawer.vue";
import {Article} from '@/types/article/article.type'
import { Comment } from '@/types/comment/comment.type'
import { sliceDefault } from '@/utils/slice'

const comments: Comment[] = [
  {
    id: 1,
    author: "John",
    date: "2022-01-01",
    content: "Great article!",
    likes: 10,
    dislikes: 2,
    articleId: 1,
    parentId: 0,
  },
  {
    id: 2,
    author: "Alice",
    date: "2022-02-15",
    content: "Nice job!",
    likes: 5,
    dislikes: 0,
    articleId: 1,
    parentId: 0,
  },
  {
    id: 3,
    author: "Mark",
    date: "2022-03-03",
    content: "I have a question...",
    likes: 2,
    dislikes: 1,
    articleId: 1,
    parentId: 1,
  },
  {
    id: 4,
    author: "Sarah",
    date: "2022-03-10",
    content: "Interesting perspective.",
    likes: 8,
    dislikes: 3,
    articleId: 2,
    parentId: 0,
  },
  {
    id: 5,
    author: "Michael",
    date: "2022-03-20",
    content: "I disagree with some points...",
    likes: 3,
    dislikes: 7,
    articleId: 2,
    parentId: 4,
  },
];

const article: Article = {
  id: 1,
  title: "Sample Article",
  author: "John Doe",
  date: "2022-01-01",
  content: "Lorem ipsum dolor sit amet...",
  tags: ["sample", "article"],
  category: "News",
  views: 100,
  likes: 50,
  comments: comments,
  relatedArticles: [],
  imageURL: "https://example.com/image.jpg",
  isFeatured: true,
  isPublished: true,
};

let isActive: Ref<boolean> = ref<boolean>(false);

let newArticles: Ref<boolean> = ref<boolean>(false);
let oldArticles: Ref<boolean> = ref<boolean>(false);
let favoriteArticles: Ref<boolean> = ref<boolean>(false);
let articles: Ref<Article[]> = ref<Article[]>([
  {
    id: 1,
    title: "Article 1",
    author: "Jane Doe",
    date: "2022-01-01",
    content: "This is the content of article 1 lorem ipsum dolor sit amet in the lorem ipsum dolor sit amet in the lorem ips Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridic",
    tags: ["tag1", "tag2"],
    category: "News",
    views: 100,
    likes: 100,
    comments: comments,
    relatedArticles: [],
    imageURL: "https://example.com/image1.jpg",
    isFeatured: true,
    isPublished: true,
  },
]);

onMounted(() => {
  articles.value = articles.value.slice(0, 5);
})

const items: Ref<Array<{language: string}>> = ref<Array<{language: string}>>( [
  { language: 'Ru' },
  { language: 'En' },
])

const itemsMenu: Ref<Array<{value: string}>> = ref<Array<{value: string}>>( [
  { value: 'My Profile' },
  { value: 'Logout' },
])

const languageDrop: Ref<boolean> = ref<boolean>(false);
const notificationDialog: Ref<boolean> = ref<boolean>(false);
const menuDrop: Ref<boolean> = ref<boolean>(false);


watch(
  () => newArticles.value,
  (val) => {
    if(val === true) {
      // here fetch new articles
    }
  }
)

watch(
  () => oldArticles.value,
  (val) => {
    if(val === true) {
      // here fetch old articles
    }
  }
)

watch(
  () => favoriteArticles.value,
  (val) => {
    if(val === true) {
      // here fetch favorite articles
    }
  }
)


</script>

<style>
@import url('https://cdn-uicons.flaticon.com/2.1.0/uicons-solid-straight/css/uicons-solid-straight.css')
</style>
