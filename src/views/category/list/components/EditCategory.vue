<script setup lang="ts">
import constants from '@/constants.ts';

import { useCategoryForm } from '@/views/category/list/components/configs/useCategoryForm.ts';

const {
  t,
  name,
  categoryNameAttr,
  status,
  categoryStatusAttr,
  description,
  categoryDescriptionAttr,
  errors,
  handleSubmit,
  resetForm,
  listCategoryStatus
} = useCategoryForm();

const props = defineProps({
  id: {
    type: Number,
    default: undefined
  }
});

const dialog = defineModel('dialog', { default: false });

const onUpdate = handleSubmit((value) => {
  console.log(value);
  console.log(props.id);
  resetForm();
  dialog.value = false;
});
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent :scrollable="true" :max-height="constants.MAX_HEIGHT_600">
    <v-card>
      <v-card-title class="text-capitalize">{{ t('category.edit') }}</v-card-title>
      <v-card-text>
        <v-label class="text-capitalize mb-1" :text="t('category.categoryName')"></v-label>
        <v-text-field
          v-model="name"
          v-bind="categoryNameAttr"
          :counter="constants.MAX_LENGTH_TITLE"
          :maxlength="constants.MAX_LENGTH_TITLE"
          variant="outlined"
          :placeholder="t('category.placeHolders.typeCategoryName')"
          :error-messages="errors.name"
        ></v-text-field>
        <v-label class="text-capitalize mb-1" :text="t('category.categoryStatus')"></v-label>
        <v-select
          v-model="status"
          v-bind="categoryStatusAttr"
          :items="listCategoryStatus"
          item-value="value"
          variant="outlined"
          :placeholder="t('category.placeHolders.select')"
          :error-messages="errors.status"
        ></v-select>
        <v-label class="text-capitalize mb-1" :text="t('category.description')"></v-label>
        <v-textarea
          v-model="description"
          v-bind="categoryDescriptionAttr"
          maxlength="150"
          variant="outlined"
          :placeholder="t('category.placeHolders.typeDescription')"
          max-rows="2"
          auto-grow
          rows="3"
          counter
          :error-messages="errors.description"
        ></v-textarea>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="error" @click="dialog = false">{{ t('cancel') }}</v-btn>
        <v-btn variant="flat" color="primary" @click="onUpdate">{{ t('update') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
