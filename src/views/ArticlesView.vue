<template lang="html">
  <ToolbarComp :title="'All Articles'" :breadcrumbs="['a', 'b']"></ToolbarComp>

  <v-container fluid>
    <div style="display: flex; align-items: center" class="mb-5">
      <!-- Here need filte button and pagination -->
      <v-btn variant="outlined" @click="isActive = true"> Filters </v-btn>

      <v-btn variant="outlined" class="ml-4"> New </v-btn>

      <v-btn variant="outlined" class="ml-4"> Old </v-btn>

      <v-btn variant="outlined" class="ml-4"> Favorite </v-btn>
    </div>

    <v-divider></v-divider>
    <div
      class="ml-auto mt-3 d-flex align-items-center"
      style="justify-content: end"
    >
      <v-pagination
        v-model="meta.page"
        :length="Math.ceil(articles.length / meta.limit)"
        :total-visible="4"
      ></v-pagination>
    </div>
    <v-container fluid>
      <div style="height: max-content" ref="listArticles">
        <div ref="article" v-for="article of articles" :key="article.id">
          <item-article
            @go-article-id="goArticleId"
            :article="article"
          ></item-article>
        </div>
      </div>
    </v-container>
  </v-container>

  <v-dialog width="900" v-model="isActive">
    <template v-slot:default="">
      <v-card title="Here you cat to settings all filters for seraching">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                model-value="John Doe"
                density="compact"
                label="underlined"
                variant="outlined"
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-combobox>
            </v-col>

            <v-col cols="12" sm="6">
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-combobox>
            </v-col>

            <v-col cols="12" sm="6">
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-combobox>
            </v-col>

            <v-col cols="12" sm="6">
              <v-combobox
                density="compact"
                clearable
                chips
                multiple
                label="Combobox"
                variant="outlined"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
              ></v-combobox>
            </v-col>

            <v-col cols="12" sm="6">
              <v-switch label="Switch"></v-switch>
            </v-col>

            <v-col cols="12" sm="3">
              <v-checkbox label="Checkbox"></v-checkbox>
            </v-col>

            <v-col cols="12" sm="3">
              <v-checkbox label="Checkbox"></v-checkbox>
            </v-col>
          </v-row>
        </v-container>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn variant="outlined" text="Search"></v-btn>

          <v-btn
            variant="outlined"
            text="Close"
            @click="isActive = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts" setup>
import ItemArticle from "@/components/ui-components/ItemArticle.vue";
import ToolbarComp from "@/components/ui-components/ToolbarComp.vue";
import { ref, Ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Article } from "@/types/article/article.type";
import { Comment } from "@/types/comment/comment.type";

const router = useRouter();

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
    content:
      "This is the content of article 1 lorem ipsum dolor sit amet in the lorem ipsum dolor sit amet in the lorem ips Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridic",
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
});

watch(
  () => newArticles.value,
  (val) => {
    if (val === true) {
      // here fetch new articles
    }
  }
);

watch(
  () => oldArticles.value,
  (val) => {
    if (val === true) {
      // here fetch old articles
    }
  }
);

watch(
  () => favoriteArticles.value,
  (val) => {
    if (val === true) {
      // here fetch favorite articles
    }
  }
);
interface Meta {
  total: number;
  limit: number;
  page: number;
}
const meta: Ref<Meta> = ref<Meta>({
  total: 0,
  limit: 10,
  page: 1,
});

function goArticleId(id: number) {
  router.push({ name: "article-id", params: { id: id } });
}
</script>

<style>
@import url("https://cdn-uicons.flaticon.com/2.1.0/uicons-solid-straight/css/uicons-solid-straight.css");
</style>
