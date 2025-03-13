<script setup lang="ts">
import constants from '@/constants.ts';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const dialog = defineModel('dialog', { default: false });
defineProps({
  text: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  }
});

defineEmits(['confirmed']);
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_400" persistent>
    <v-card class="text-center" :text="text || t('deleteConfirm')" :title="title || t('confirmDelete')">
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="primary" @click="dialog = false">{{ t('cancel') }}</v-btn>
        <v-btn prepend-icon="mdi-delete" variant="flat" color="error" @click="$emit('confirmed')">{{ t('delete') }} </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
