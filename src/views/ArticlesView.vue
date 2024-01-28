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

      <div class="mt-5 d-flex" style="width: max-content; height: max-content; background-color: red;">
        

      </div>

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
import { ref, Ref, watch } from "vue";
import NavigationDrawer from "../components/ui-components/NavigationDrawer.vue";

let isActive: Ref<boolean> = ref<boolean>(false);

let newArticles: Ref<boolean> = ref<boolean>(false);
let oldArticles: Ref<boolean> = ref<boolean>(false);
let favoriteArticles: Ref<boolean> = ref<boolean>(false);

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
