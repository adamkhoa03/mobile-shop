<script setup lang="ts">
import constants from '@/constants.ts';
import { ref } from 'vue';

const dialog = ref(false);
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent :scrollable="true" :max-height="constants.MAX_HEIGHT_600">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="mx-2" color="primary" prepend-icon="mdi-plus" text="Thêm sản phẩm" variant="flat"></v-btn>
    </template>

    <template v-slot:default></template>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
