<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import constants from '@/constants.ts';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const localeSelect = ref(localStorage.getItem(constants.LANGUAGE_KEY) || constants.DEFAULT_LANGUAGE);
const dataLanguage = ref(constants.DATA_LANGUAGE);
watchEffect(() => {
  localStorage.setItem(constants.LANGUAGE_KEY, localeSelect.value);
  locale.value = localeSelect.value;
});
</script>

<template>
  <v-select
    item-title="title"
    item-value="value"
    variant="outlined"
    v-model="localeSelect"
    :items="dataLanguage"
    hide-details
    density="compact"
    max-width="150px"
  >
    <template v-slot:selection="{ item }"> {{ $t(item.title) }}</template>
    <template #item="{ props }">
      <v-list-item v-bind="props">
        <template v-slot:title="{ title }">{{ $t(title) }}</template>
      </v-list-item>
    </template>
  </v-select>
</template>

<style scoped lang="scss"></style>
