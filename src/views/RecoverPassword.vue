<template lang="html">
  <v-main style="height: 100%; display: flex; align-items: center">
    <v-container fluid align="center" justify="center">
      <v-card
        class="px-15 mx-auto"
        elevation="1"
        max-width="600"
        variant="outlined"
      >
        <v-card-title class="py-5 font-weight-black"
          >Recovery your password</v-card-title
        >
        <v-card-text>
          To recover your password you need to fill in the email field
        </v-card-text>
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
          class="mt-2"
        ></v-text-field>

        <v-card-text>
          <div class="text-subtitle-2 font-weight-black mb-1">
            Enter the message code from gmail
          </div>
          <v-text-field
            label="Enter value here"
            single-line
            variant="outlined"
          ></v-text-field>

          <div style="float: left">
            <v-text
              class="text-decoration-none text-blue"
              :style="timer === 0 ? { color: 'blue' } : { opacity: 0.5 }"
              >send</v-text
            >
            <v-text>again after</v-text> {{ timer === 0 ? "" : timer }} seconds
          </div>
          <div
            style="display: flex; justify-content: space-between"
            class="mt-10"
          >
            <v-btn
              :disabled="loading"
              :loading="loading"
              density="compact"
              class="text-none mb-4"
              color="blue"
              size="x-large"
              variant="flat"
              @click="loading = !loading"
            >
              Verify and continue
            </v-btn>

            <v-btn
              density="compact"
              class="text-none"
              color="grey-lighten-3"
              size="x-large"
              variant="flat"
            >
              Cancel
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
      <!-- <v-card variant="outlined" width="600" height="400" class="py-5 px-">
        <v-card-title>Recovery password</v-card-title>
        <v-text class="">To recover your password you need to fill in the email field</v-text>

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
          class="mt-5"
        ></v-text-field>
      </v-card> -->
    </v-container>
  </v-main>
</template>
<script lang="ts" setup>
import { useAuth } from "@/composables/AuthView/useAuth";
import { Ref, ref, onMounted } from "vue";
const { state, v$ } = useAuth();
const loading: Ref<boolean> = ref<boolean>(false);
let timer: Ref<number> = ref<number>(60);

onMounted(() => {
  let timer_ = setInterval(() => {
    timer.value = timer.value - 1;
    if (timer.value <= 0) {
      clearInterval(timer_);
    }
    console.log(timer.value);
  }, 1000);
});
</script>
