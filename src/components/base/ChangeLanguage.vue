<script setup lang="ts">
import { ref, watch } from 'vue';
import constants from '@/constants.ts';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const localeSelect = ref(localStorage.getItem(constants.LANGUAGE) || constants.LANGUAGE);
watch(localeSelect, (newValue) => {
  localStorage.setItem(constants.LANGUAGE, newValue);
  locale.value = newValue;
});
</script>

<template>
  <v-btn-toggle v-model="localeSelect" rounded mandatory>
    <v-btn value="en">🇺🇸 EN</v-btn>
    <v-btn value="vi">🇻🇳 VI</v-btn>
  </v-btn-toggle>
</template>

<style scoped lang="scss"></style>
