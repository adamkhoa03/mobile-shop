<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';

// Components
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import CreatePhone from '@/views/phones/list/createPhone.vue';
import EditPhone from '@/views/phones/list/editPhone.vue';

// Composable
import { usePhone } from '@/views/phones/composable/usePhone.ts';
import { headers } from '@/views/phones/composable/useFormPhone.ts';

// Services
import { phoneServices } from '@/views/phones/services/phoneServices.ts';
import { CategoryServices } from '@/views/category/services/categoryServices.ts';

// Types
import type { itemTable } from '@/views/phones/types/phoneType.ts';
import DialogConfirm from '@/components/shared/DialogConfirm.vue';
import { showSnackbar } from '@/utils/composables/useSnackBar.ts';

const { dataCreateSearchAdvance, t } = usePhone();

const breadCrumbs = computed(() => [t('phones.name')]);

//reactive state
const dataTable = ref<itemTable[]>([]);
const dataCategory = ref([]);
const phoneIDSelect = ref<number | undefined>(undefined);
const contentDelete = ref('');
const dialogEdit = ref<boolean>(false);
const dialogDelete = ref<boolean>(false);
const loading = ref(false);
const searchKeyword = ref('');
const advanceSearchUI = ref(dataCreateSearchAdvance);
const formDataAdvanceSearch = ref<Record<string, string | number | null>>({
  name: null,
  category_id: null,
  status: null,
  code: null
});

//Fetch list category
const getCategories = async () => {
  loading.value = true;
  const searchParams = { page: 1, limit: 100 };

  try {
    const response = await CategoryServices.getCategories(searchParams);
    if (response?.status === 200) {
      const categoryItemUI = advanceSearchUI.value.find((item) => item.ref === 'category_id');
      if (categoryItemUI) {
        categoryItemUI.items = response.data;
        dataCategory.value = response.data;
      }
    }
  } catch (error) {
    console.error('Lỗi khi lấy danh mục:', error);
  } finally {
    loading.value = false;
  }
};

//Fetch list phones
const getPhones = async () => {
  loading.value = true;
  const searchParams = { page: 1, limit: 100 };
  try {
    const response = await phoneServices.getListPhones(searchParams);
    if (response?.status === 200) {
      dataTable.value = response.data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

//Handle quick search
const quickSearch = async (searchParams: Record<string, unknown>) => {
  loading.value = true;
  try {
    const response = await phoneServices.quickSearch(searchParams);
    if (response?.status === 200) {
      dataTable.value = response.data;
    }
  } catch (error) {
    console.log(error);
    dataTable.value = [];
  } finally {
    loading.value = false;
  }
};

//Event handle
const search = () => {
  const searchParams = { page: 1, limit: 100, name: searchKeyword.value };
  quickSearch(searchParams);
};
const searchAdvance = () => {
  const params = Object();
  if (formDataAdvanceSearch.value.name) {
    params.name = formDataAdvanceSearch.value.name;
  }
  if (formDataAdvanceSearch.value.category_id) {
    params.category_id = formDataAdvanceSearch.value.category_id;
  }
  if (formDataAdvanceSearch.value.status) {
    params.status = formDataAdvanceSearch.value.status;
  }
  if (formDataAdvanceSearch.value.code) {
    params.code = formDataAdvanceSearch.value.code;
  }
  quickSearch(params);
};

//refresh data
const refreshData = () => getPhones();

//clear advance search
const clearAdvanceSearch = () => {
  formDataAdvanceSearch.value = { name: null, category_id: null, status: null, code: null };
  refreshData();
};
const handleEdit = (item: itemTable) => {
  phoneIDSelect.value = Number(item.id);
  dialogEdit.value = true;
};
const handleDelete = (item: itemTable) => {
  phoneIDSelect.value = Number(item.id);
  contentDelete.value = `${t('phones.product')}: ${item.name}`;
  dialogDelete.value = true;
};

const onDelete = async () => {
  dialogDelete.value = false;
  if (!phoneIDSelect.value) return;
  await deletePhone(phoneIDSelect.value);
  await refreshData();
};

//Call API delete
const deletePhone = async (id: number) => {
  try {
    loading.value = true;
    await phoneServices.deletePhone(id);
    showSnackbar('Xóa thành công!', 'success');
  } catch (error) {
    console.log(error);
    showSnackbar('Xóa không thành công!', 'error');
  } finally {
    loading.value = false;
  }
};

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
        density="compact"
        append-inner-icon="mdi-magnify"
        hide-details
        variant="outlined"
        placeholder="Nhập tên để tìm kiếm..."
        @keyup.enter="search"
        clearable
        @click:clear="search"
      ></v-text-field>
    </v-responsive>

    <!--    Create-->
    <CreatePhone @create-success="refreshData" :data-category="dataCategory" />

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
    <v-data-table :headers="headers" :items="dataTable" fixed-header hide-default-footer :no-data-text="t('noData')" items-per-page="-1">
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

  <edit-phone v-model:dialog="dialogEdit" :data-category="dataCategory" :phone-id="phoneIDSelect" />

  <!--  Dialog delete-->
  <DialogConfirm v-model:dialog="dialogDelete" :text="contentDelete" @confirmed="onDelete" />
  <base-dialog-loading :isLoading="loading" />
</template>

<style scoped lang="scss"></style>
