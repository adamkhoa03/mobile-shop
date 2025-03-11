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
  dialog,
  listCategoryStatus
} = useCategoryForm();

const addCategory = () => {};
const onSubmit = handleSubmit((value) => {
  console.log(value);
  resetForm();
  dialog.value = false;
});
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent :scrollable="true" :max-height="constants.MAX_HEIGHT_600">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="mx-2"
        color="primary"
        prepend-icon="mdi-plus"
        text="Thêm danh mục"
        variant="flat"
        @click="addCategory"
      ></v-btn>
    </template>

    <template v-slot:default>
      <v-card>
        <v-card-title class="text-capitalize">{{ t('category.createNewCategory') }}</v-card-title>
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
          <v-btn prepend-icon="mdi-plus" variant="flat" color="primary" @click="onSubmit">{{ t('createNew') }}</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
