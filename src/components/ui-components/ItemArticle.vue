<template>
  <v-card variant="outlined">
    <v-img :src="article.imageURL"></v-img>
    <div style="display: inline-flex; align-items: center; width: 100%">
      <v-card-title>{{ article.title }}</v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle>{{ article.date }}</v-card-subtitle>
    </div>
    <v-card-subtitle>{{ article.author }}</v-card-subtitle>
    <v-card-text>{{ sliceDefault(article.content, 350) }}</v-card-text>
    <v-card-subtitle
      >Related Articles:
      <ul v-if="article.relatedArticles.length > 0">
        <li
          v-for="relatedArticle of article.relatedArticles"
          :key="relatedArticle.id"
        >
          <a :href="`/articles/${relatedArticle.id}`">{{
            relatedArticle.title
          }}</a>
        </li>
      </ul>
      <span v-else>Автор не указал ссылки на другие статьи</span>
    </v-card-subtitle>

    <div style="display: inline-flex; align-items: center; width: 100%">
      <v-card-subtitle>Tags: {{ article.tags.join(", ") }}</v-card-subtitle>
      <v-card-subtitle>Category: {{ article.category }}</v-card-subtitle>
      <v-card-subtitle>Views: {{ article.views }}</v-card-subtitle>
      <v-card-subtitle>Likes: {{ article.likes }}</v-card-subtitle>
      <v-card-subtitle>Comments: {{ article.comments.length }}</v-card-subtitle>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn>Read More</v-btn>
        <v-btn v-if="article.externalLink" :href="article.externalLink"
          >External Link</v-btn
        >
      </v-card-actions>
    </div>
  </v-card>
</template>
<script lang="ts" setup>
import { sliceDefault } from "@/utils/slice";
import { defineProps } from "vue";

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
