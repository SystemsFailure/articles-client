<template lang="html">
  <div style="position: absolute; right: 30px">
    <h5
      v-if="showReverse"
      class="text-caption text-decoration-none text-blue"
      @click="showReverse = !showReverse"
    >
      LogIn
    </h5>
    <h5
      v-else
      class="text-caption text-decoration-none text-blue"
      @click="showReverse = !showReverse"
    >
      SignIn
    </h5>
  </div>
  <v-main
    style="height: 100%; display: flex; align-items: center; overflow-y: hidden"
  >
    <Transition mode="out-in" name="slide-up">
      <authorization-form v-if="!showReverse"></authorization-form>
      <sign-in-form v-else></sign-in-form>
    </Transition>
  </v-main>
</template>
<script lang="ts" setup>
import AuthorizationForm from "@/components/ui-components/AuthorizationForm.vue";
import SignInForm from "@/components/ui-components/SignInForm.vue";
import { Ref, ref } from "vue";
let showReverse: Ref<boolean> = ref<boolean>(true);
</script>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(60px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
