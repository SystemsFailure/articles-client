<template lang="html">
  <v-container align="center" justify="center" fluid>
    <v-card variant="outlined" max-width="600px" class="px-5">
      <div class="mt-5">Authorization</div>
      <form class="px-5 py-5">
        <v-text-field
          v-model="state.name"
          density="compact"
          :error-messages="v$.name.$errors.map((e: any) => e.$message)"
          :counter="10"
          variant="outlined"
          placeholder="login"
          required
          @input="v$.name.$touch"
          @blur="v$.name.$touch"
        ></v-text-field>

        <v-text-field
          v-model="state.email"
          density="compact"
          prepend-inner-icon="mdi-email-outline"
          :error-messages="v$.email.$errors.map((e: any) => e.$message)"
          label="E-mail"
          variant="outlined"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></v-text-field>

        <v-select
          density="compact"
          v-model="state.select"
          :items="items"
          :error-messages="v$.select.$errors.map((e: any) => e.$message)"
          label="Role"
          variant="outlined"
          required
          @change="v$.select.$touch"
          @blur="v$.select.$touch"
        ></v-select>

        <v-checkbox
          v-model="state.checkbox"
          :error-messages="v$.checkbox.$errors.map((e: any) => e.$message)"
          label="Do you agree?"
          required
          @change="v$.checkbox.$touch"
          @blur="v$.checkbox.$touch"
        ></v-checkbox>

        <div style="display: flex; justify-content: space-between" class="">
          <div style="width: fit-content">
            <v-btn
              prepend-icon="mdi-github"
              variant="outlined"
              width="250"
              class="mb-10"
            >
              <h4 class="text-medium-emphasis text-caption float-left">
                Login with GitHub
              </h4>
            </v-btn>
          </div>

          <div style="width: fit-content">
            <v-btn
              prepend-icon="mdi-google"
              variant="outlined"
              width="250"
              class="mb-10"
            >
              <h4 class="text-medium-emphasis text-caption float-left">
                Login with Google
              </h4>
            </v-btn>
          </div>
        </div>

        <v-btn
          class="me-4"
          variant="outlined"
          @click="v$.$validate"
          :loading="loading"
        >
          submit
        </v-btn>
        <v-btn @click="clear" variant="outlined"> clear </v-btn>
      </form>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import { ref, Ref } from 'vue'
const loading: Ref<boolean> = ref<boolean>(true);
import { useAuth, State }  from '@/composables/AuthView/useAuth'

const { state, v$, items, initialState } = useAuth()

function clear() : void {
    v$.value.$reset();
    
    for (const [key, value] of Object.entries(initialState)) {
        state[key as keyof State] = value;
    }
}
</script>
