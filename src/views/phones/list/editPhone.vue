<script setup lang="ts">
import constants from '@/constants.ts';
import { form } from '@/views/phones/composable/useFormPhone.ts';
import { phoneServices } from '@/views/phones/services/phoneServices.ts';
import { type phoneItem } from '@/views/phones/types/phoneType.ts';
import { defineEmits, ref, computed, watch } from 'vue';
import { showSnackbar } from '@/utils/composables/useSnackBar.ts';

// interface Props {
//   dataCategory: { id: number; brand: string }[];
//   phoneId?: number;
// }
//
// const props = defineProps<Props>();
// const emits = defineEmits(['update-success']);

//Define Props & Emits
const props = defineProps(['dataCategory', 'phoneId']);

const emits = defineEmits(['update-success']);
const dialog = defineModel('dialog', { default: false });

// Form State
const {
  t,
  errors,
  handleSubmit,
  resetForm,
  setValues,
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

// Loading State
const loading = ref(false);

// Computed Property
const isDialogOpen = computed(() => dialog.value && props.phoneId);

const mapPhoneData = (data: any): phoneItem => ({
  name: data.name,
  code: data.code,
  description: data.description ?? '',
  category: { brand: data.category.brand, id: data.category.id },
  price: data.price,
  quantity: data.quantity
});

// Fetch Phone Detail
const getDetailPhone = async () => {
  if (!props.phoneId) return;
  try {
    loading.value = true;
    const response = await phoneServices.getDetail(props.phoneId);
    if (response?.status === 200 && response.data) {
      setValues(mapPhoneData(response.data));
    }
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// Update Phone
const updatePhone = async (id: number, data: phoneItem) => {
  try {
    loading.value = true;
    await phoneServices.updatePhone(data.category.id, id, data);
    emits('update-success');
    dialog.value = false;
    showSnackbar('Cập nhật thành công!', 'success');
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// Submit Form
const onSubmit = handleSubmit(async (values) => {
  if (!props.phoneId) return;
  await updatePhone(props.phoneId, mapPhoneData(values));
  resetForm();
});

// Auto-fetch data khi mở dialog
watch(isDialogOpen, (open) => {
  if (open) getDetailPhone();
});
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent scrollable :max-height="constants.MAX_HEIGHT_600">
    <v-card>
      <v-card-title class="text-capitalize">{{ t('category.createNewCategory') }}</v-card-title>
      <v-card-text>
        <v-label class="text-capitalize mb-1" :text="t('phones.deviceName')" />
        <v-text-field
          v-model="name"
          v-bind="nameAttr"
          name="name"
          :counter="constants.MAX_LENGTH_TITLE"
          :maxlength="constants.MAX_LENGTH_TITLE"
          variant="outlined"
          :placeholder="t('phones.placeHolder.name')"
          :error-messages="errors.name"
        />

        <v-label class="text-capitalize mb-1" :text="t('phones.code')" />
        <v-text-field
          v-model="code"
          v-bind="codeAttr"
          name="code"
          :counter="constants.MAX_LENGTH_TITLE"
          :maxlength="constants.MAX_LENGTH_TITLE"
          variant="outlined"
          :placeholder="t('phones.placeHolder.code')"
          :error-messages="errors.code"
        />

        <v-label class="text-capitalize mb-1" :text="t('phones.description')" />
        <v-textarea
          v-model="description"
          v-bind="descriptionAttr"
          name="description"
          maxlength="150"
          max-rows="2"
          auto-grow
          rows="3"
          counter
          variant="outlined"
          :placeholder="t('phones.placeHolder.description')"
          :error-messages="errors.description"
        />

        <v-label class="text-capitalize mb-1" :text="t('phones.category')" />
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

        <v-label class="text-capitalize mb-1" :text="t('phones.price')" />
        <v-text-field
          v-model="price"
          v-bind="priceAttr"
          name="price"
          :counter="constants.MAX_LENGTH_TITLE"
          :maxlength="constants.MAX_LENGTH_TITLE"
          variant="outlined"
          :placeholder="t('phones.placeHolder.price')"
          :error-messages="errors.price"
        />

        <v-label class="text-capitalize mb-1" :text="t('phones.quantity')" />
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
        <v-spacer />
        <v-btn variant="flat" color="error" @click="dialog = false">{{ t('cancel') }}</v-btn>
        <v-btn variant="flat" color="primary" @click="onSubmit">{{ t('update') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <base-dialog-loading :isLoading="loading" />
</template>

<style scoped lang="scss"></style>
