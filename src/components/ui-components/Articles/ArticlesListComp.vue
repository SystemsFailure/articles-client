<template>
  <v-container fluid>
    <div class="d-flex" style="align-items: center">
      <div style="display: flex; align-items: center">
        <!-- Here need filte button and pagination -->
        <v-btn variant="outlined" @click="isActiveFiltersModal = true">
          Filters
        </v-btn>

        <v-btn variant="outlined" class="ml-4"> New </v-btn>

        <v-btn variant="outlined" class="ml-4"> Old </v-btn>

        <v-btn variant="outlined" class="ml-4"> Favorite </v-btn>
      </div>

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
    </div>
    <div style="height: max-content" ref="listArticles">
      <div
        ref="article"
        v-for="article of articles"
        :key="article.id"
        class="mt-5"
      >
        <item-article
          @go-article-id="goArticleId"
          :article="article"
        ></item-article>
      </div>
    </div>
    <div class="text-center mt-3">
      <v-pagination
        v-model="meta.page"
        :length="Math.ceil(articles.length / meta.limit)"
        :total-visible="4"
      ></v-pagination>
    </div>
  </v-container>

  <v-dialog width="900" v-model="isActiveFiltersModal">
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

          <v-btn variant="outlined" text="Confirm"></v-btn>

          <v-btn
            variant="outlined"
            text="Close"
            @click="isActiveFiltersModal = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script lang="ts" setup>
import ItemArticle from "../ItemArticle.vue";
import { Ref, ref } from "vue";
import { Article } from "@/types/article/article.type";
import { Comment } from "@/types/comment/comment.type";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

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

const isActiveFiltersModal: Ref<boolean> = ref<boolean>(false);

const comments: Comment[] = [
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

let articles: Ref<Article[]> = ref<Article[]>([
  {
    id: 2,
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
  for (let i = 0; i < 34; i++) {
    articles.value.push({ ...articles.value[0] });
  }
});

function goArticleId(id: number) {
  router.push({ name: "article-id", params: { id: id } });
}
</script>
