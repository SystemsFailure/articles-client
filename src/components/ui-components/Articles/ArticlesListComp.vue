<template>
    <v-container fluid>
        <div class="text mt-3">
          <v-pagination
            v-model="meta.page"
            :length="Math.ceil(articles.length / meta.limit)"
            :total-visible="4"
          ></v-pagination>
        </div>
        <div style="height: max-content;" ref="listArticles">
          <div ref="article" v-for="article of articles" :key="article.id" class="mt-3">
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
        <div class="text-center mt-3">
          <v-pagination
            v-model="meta.page"
            :length="Math.ceil(articles.length / meta.limit)"
            :total-visible="4"
          ></v-pagination>
        </div>
      </v-container>
    </template>
<script lang="ts" setup>
import { Ref, ref } from 'vue';
import { sliceDefault } from '@/utils/slice';
import { Article } from '@/types/article/article.type';
import { Comment } from '@/types/comment/comment.type';
import { onMounted } from 'vue';
interface Meta {total: number, limit: number, page: number}
const meta: Ref<Meta> = ref<Meta>({
  total: 0,
  limit: 15,
  page: 1,
});

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
  for (let i = 0; i < 56; i++) {
    articles.value.push({...articles.value[0]});
  }
})
</script>

<style scoped>
.card-article:hover {
    opacity: 0.5;
    cursor: pointer;
}
</style>