<script setup lang="ts">
// Computed
import { computed, ref, onMounted } from 'vue';

//Components
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import type { itemTable } from '@/views/phones/types/phoneType.ts';
import CreatePhone from '@/views/phones/list/createPhone.vue';

//Composable
import { usePhone } from '@/views/phones/composable/usePhone.ts';
import { headers } from '@/views/phones/composable/useFormPhone.ts';

//Import services
import { phoneServices } from '@/views/phones/services/phoneServices.ts';
import { CategoryServices } from '@/views/category/services/categoryServices.ts';

const { dataCreateSearchAdvance, t } = usePhone();

const breadCrumbs = computed(() => [t('phones.name')]);

//reactive state
const dataTable = ref<itemTable[]>([]);
const phoneID = ref<number | undefined>(undefined);
const contentDelete = ref('');
const dialogEdit = ref<boolean>(false);
const dialogDelete = ref<boolean>(false);
const loading = ref(false);
const searchKeyword = ref('');
const advanceSearchUI = ref(dataCreateSearchAdvance);
const formDataAdvanceSearch = ref<Record<string, string | number | null>>({
  brand: null,
  status: null,
  code: null
});

//Call API
const getCategories = async () => {
  loading.value = true;
  const searchParams = { page: 1, limit: 100 };
  try {
    const response = await CategoryServices.getCategories(searchParams);
    if (response?.status === 200) {
      const categoryItemUI = advanceSearchUI.value.find((item) => item.ref === 'categoryID');
      if (categoryItemUI) {
        categoryItemUI.items = response.data;
      }
    }
    loading.value = false;
  } catch (error) {
    console.error('Lỗi khi lấy danh mục:', error);
  }
};

const getPhones = async () => {
  loading.value = true;
  const searchParams = { page: 1, limit: 100 };
  try {
    const response = await phoneServices.getListPhones(searchParams);
    if (response?.status === 200) {
      dataTable.value = response.data;
    }
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
};

//Event handle
const quickSearch = async () => {};
const refreshData = () => {};
const searchAdvance = () => {};
const clearAdvanceSearch = () => {};
const handleEdit = (item: itemTable) => {};
const handleDelete = (item: itemTable) => {};

//Lifecycle Hooks
onMounted(() => {
  getCategories();
  getPhones();
});
</script>

<template>
  <base-bread-crumb :title="t('phones.name')" :breadcrumbs="breadCrumbs" />

  <!--  Head-->
  <div class="d-flex justify-end">
    <!--    Search-->
    <v-responsive max-width="344">
      <v-text-field
        v-model.trim="searchKeyword"
        ref="textField"
        density="compact"
        append-inner-icon="mdi-magnify"
        hide-details
        variant="outlined"
        placeholder="Nhập tên để tìm kiếm..."
        @keyup.enter="quickSearch"
      ></v-text-field>
    </v-responsive>

    <!--    Create-->
    <CreatePhone @create-success="refreshData" />

    <!--    EndCreate-->
    <advance-search
      :dataCreateUI="dataCreateSearchAdvance"
      :form-data="formDataAdvanceSearch"
      @search="searchAdvance"
      @clear="clearAdvanceSearch"
    />
  </div>

  <!--Table content-->
  <div class="mt-7">
    <v-data-table :headers="headers" :items="dataTable" fixed-header hide-default-footer>
      <template v-slot:[`item.category`]="{ item }">
        {{ item.category.brand }}
      </template>

      <!-- Action  -->
      <template v-slot:[`item.action`]="{ item }">
        <div class="d-flex align-center justify-end">
          <v-tooltip :text="t('edit')">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon @click="handleEdit(item)">
                <v-img width="25" class="pointer" src="@/assets/pencil.svg"></v-img>
              </v-btn>
            </template>
          </v-tooltip>
          <v-tooltip :text="t('delete')">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon @click="handleDelete(item)">
                <v-img width="25" class="pointer" src="@/assets/icon-delete.svg"></v-img>
              </v-btn>
            </template>
          </v-tooltip>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<style scoped lang="scss">
</style>
