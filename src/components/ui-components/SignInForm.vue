<template lang="html">
  <v-container align="center" justify="center" fluid>
    <v-card variant="outlined" max-width="600px" class="px-5">
      <div class="mt-5">SignIn</div>
      <form class="px-5 py-5">
        <v-text-field
          v-model.trim="state.email"
          density="compact"
          prepend-inner-icon="mdi-email-outline"
          :error-messages="v$.email.$errors.map((e: any) => e.$message)"
          label="E-mail"
          variant="outlined"
          required
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        ></v-text-field>

        <div
          class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
        >
          Password
          <a
            class="text-caption text-decoration-none text-blue"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >
        </div>

        <v-text-field
          v-model.trim="state.password"
          density="compact"
          prepend-inner-icon="mdi-lock-outline"
          :error-messages="v$.password.$errors.map((e: any) => e.$message)"
          variant="outlined"
          placeholder="Your password"
          required
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
          type="password"
        ></v-text-field>

        <v-select
          v-model="state.select"
          density="compact"
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
                SignIn with GitHub
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
                SignIn with Google
              </h4>
            </v-btn>
          </div>
        </div>

        <v-btn class="me-4" variant="outlined" @click="v$.$validate">
          submit
        </v-btn>
        <v-btn @click="clear" variant="outlined"> clear </v-btn>
      </form>
    </v-card>
  </v-container>
</template>
<script lang="ts" setup>
import { useAuth, State } from "@/composables/AuthView/useAuth";
const { state, v$, items, initialState } = useAuth();

function clear(): void {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key as keyof State] = value;
  }
}
</script>
