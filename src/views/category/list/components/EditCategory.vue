<script setup lang="ts">
import { toRef, watchEffect, defineEmits, ref } from 'vue';

//Services
import { CategoryServices } from '@/views/category/services/categoryServices.ts';

//Constant and config
import constants from '@/constants.ts';
import { useCategoryForm } from '@/views/category/list/components/configs/useCategoryForm.ts';
import { showSnackbar } from '@/utils/composables/useSnackBar.ts';
import { type categoryItem } from '@/views/category/types/apis.ts';

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
  listCategoryStatus,
  setValues,
  code,
  categoryCodeAttr
} = useCategoryForm();

//Define props and emit
const props = defineProps({
  id: {
    type: Number,
    default: undefined
  }
});
const emit = defineEmits(['update-success']);

//Reactive data
const idRef = toRef(props, 'id');
const isLoading = ref(false);

//Model binding
const dialog = defineModel('dialog', { default: false });

//Event handle
const onUpdate = handleSubmit(async (value) => {
  if (!idRef.value) return;
  const params = {
    brand: value.name,
    code: value.code,
    status: value.status,
    description: value.description
  };
  await updateCategory(idRef.value, params);
  resetForm();
});

//Call API
const getDetailCategory = async (id: number) => {
  isLoading.value = true;
  try {
    const response = await CategoryServices.getDetail(id);
    if (response?.status === 200 && response.data) {
      setValues({
        name: response.data.brand,
        code: response.data.code,
        status: response.data.status,
        description: response.data.description
      });
    }
    isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

const updateCategory = async (id: number, data: categoryItem) => {
  isLoading.value = true;
  try {
    await CategoryServices.updateCategory(id, data);
    emit('update-success');
    isLoading.value = false;
    dialog.value = false;
    showSnackbar('Cập nhật thành công!', 'success');
  } catch (error) {
    console.log(error);
  }
};

//Life cycle hook
watchEffect(() => {
  if (!idRef.value) return;
  if (dialog.value) getDetailCategory(idRef.value);
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
        <v-label class="text-capitalize mb-1" :text="t('category.code')"></v-label>
        <v-text-field
          v-model="code"
          v-bind="categoryCodeAttr"
          :counter="constants.MAX_LENGTH_TITLE"
          :maxlength="constants.MAX_LENGTH_TITLE"
          variant="outlined"
          :placeholder="t('category.placeHolders.code')"
          :error-messages="errors.code"
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

  <base-dialog-loading :isLoading="isLoading" />
</template>

<style scoped lang="scss"></style>
