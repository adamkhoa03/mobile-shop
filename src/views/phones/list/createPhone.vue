<script setup lang="ts">
import { ref } from 'vue';
import constants from '@/constants.ts';
import { form, type phoneItem } from '@/views/phones/composable/useFormPhone.ts';
import { phoneServices } from '@/views/phones/services/phoneServices.ts';
import { showSnackbar } from '@/utils/composables/useSnackBar.ts';

// Form State
const {
  t,
  errors,
  handleSubmit,
  resetForm,
  name,
  nameAttr,
  code,
  codeAttr,
  description,
  descriptionAttr,
  price,
  priceAttr,
  quantity,
  quantityAttr,
  category,
  categoryAttr
} = form();

defineProps(['dataCategory', 'phoneId']);
const emit = defineEmits(['create-success']);

// Reactive state
const dialog = ref(false);
const loading = ref(false);

// API Call
const createPhone = async (data: phoneItem) => {
  try {
    loading.value = true;
    const response = await phoneServices.createPhone(data);
    if (response?.status === 201) {
      showSnackbar('Tạo thành công!', 'success');
      emit('create-success');
      resetForm();
      dialog.value = false;
    }
  } catch (error) {
    showSnackbar('Tạo thất bại!', 'error');
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// Event Handlers
const onSubmit = handleSubmit(async (value) => {
  const data: phoneItem = {
    name: value.name,
    code: value.code,
    price: value.price,
    quantity: value.quantity,
    description: value.description,
    category: {
      brand: value.category.brand,
      id: value.category.id
    }
  };
  await createPhone(data);
});
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent :scrollable="true" :max-height="constants.MAX_HEIGHT_600">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" class="mx-2" color="primary" prepend-icon="mdi-plus" text="Thêm sản phẩm" variant="flat" />
    </template>

    <v-card>
      <v-card-title class="text-capitalize">{{ t('category.createNewCategory') }}</v-card-title>
      <v-card-text>
        <v-label class="text-capitalize mb-1">{{ t('phones.deviceName') }}</v-label>
        <v-text-field
          v-model="name"
          v-bind="nameAttr"
          name="name"
          variant="outlined"
          :placeholder="t('phones.placeHolder.name')"
          :error-messages="errors.name"
        />

        <v-label class="text-capitalize mb-1">{{ t('phones.code') }}</v-label>
        <v-text-field
          v-model="code"
          v-bind="codeAttr"
          name="code"
          variant="outlined"
          :placeholder="t('phones.placeHolder.code')"
          :error-messages="errors.code"
        />

        <v-label class="text-capitalize mb-1">{{ t('phones.description') }}</v-label>
        <v-textarea
          v-model="description"
          v-bind="descriptionAttr"
          name="description"
          auto-grow
          rows="3"
          variant="outlined"
          :placeholder="t('phones.placeHolder.description')"
          :error-messages="errors.description"
        />

        <v-label class="text-capitalize mb-1">{{ t('phones.category') }}</v-label>
        <v-autocomplete
          v-model="category"
          v-bind="categoryAttr"
          name="category"
          variant="outlined"
          :items="dataCategory"
          item-value="id"
          item-title="brand"
          return-object
          :placeholder="t('phones.placeHolder.category')"
          :error-messages="errors.category"
        />

        <v-label class="text-capitalize mb-1">{{ t('phones.price') }}</v-label>
        <v-text-field
          v-model="price"
          v-bind="priceAttr"
          name="price"
          variant="outlined"
          :placeholder="t('phones.placeHolder.price')"
          :error-messages="errors.price"
        />

        <v-label class="text-capitalize mb-1">{{ t('phones.quantity') }}</v-label>
        <v-text-field
          v-model="quantity"
          v-bind="quantityAttr"
          name="quantity"
          variant="outlined"
          :placeholder="t('phones.placeHolder.quantity')"
          :error-messages="errors.quantity"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" color="error" @click="dialog = false">{{ t('cancel') }}</v-btn>
        <v-btn prepend-icon="mdi-plus" variant="flat" color="primary" @click="onSubmit">{{ t('createNew') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
