<script setup lang="ts">
import { useSnackBarStore  } from '@/stores/snackBar.ts';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const snackBar = useSnackBarStore ()
</script>

<template>
  <v-snackbar v-model="snackBar.isActive" location="top right" :color="snackBar.color">
    {{ snackBar.text }}

    <template v-slot:actions>
      <v-btn color="indigo" variant="text" @click="snackBar.SET_ACTIVE(false)"> {{ t('close') }}</v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped lang="scss"></style>
