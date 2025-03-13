<template>
  <v-dialog v-model="loading" persistent width="300">
    <v-card class="pa-4 d-flex flex-column align-center">
      <v-progress-circular indeterminate color="primary" size="50"></v-progress-circular>
      <p class="mt-3">{{ titleRef }}</p>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { toRef } from 'vue';

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: 'Đang xử lý dữ liệu...'
  }
});

//Reactive data
const loading = toRef(props, 'isLoading');
const titleRef = toRef(props, 'title');
</script>
