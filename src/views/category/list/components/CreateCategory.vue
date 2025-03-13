<script setup lang="ts">
import constants from '@/constants.ts';
import { ref } from 'vue';
import { useCategoryForm } from '@/views/category/list/components/configs/useCategoryForm.ts';
import { type categoryItem } from '@/views/category/types/apis.ts';

//Services
import { CategoryServices } from '@/views/category/services/categoryServices.ts';
import { showSnackbar } from '@/utils/composables/useSnackBar.ts';

//Handling Form
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

//Handling event
const onSubmit = handleSubmit(async (value) => {
  const data = {
    brand: value.name,
    status: value.status,
    description: value.description
  };
  await createCategory(data);
  resetForm();
  dialog.value = false;
  emit('create-success');
  showSnackbar('Tạo thành công!', 'success');
});

//Reactive state
const isLoading = ref(false);

//Emits
const emit = defineEmits(['create-success']);

//Call API
const createCategory = async (data: categoryItem) => {
  try {
    isLoading.value = true;
    const response = await CategoryServices.createCategory(data);
    if (response && response.status === 200) {
      isLoading.value = false;
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent :scrollable="true" :max-height="constants.MAX_HEIGHT_600">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="mx-2" color="primary" prepend-icon="mdi-plus" text="Thêm danh mục" variant="flat"></v-btn>
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
