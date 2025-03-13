<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

//components
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import popupCategory from './components/popupCategory.vue';
import CreateCategory from '@/views/category/list/components/CreateCategory.vue';
import EditCategory from '@/views/category/list/components/EditCategory.vue';
import DialogConfirm from '@/components/shared/DialogConfirm.vue';

// Services & Constants
import { CategoryServices } from '@/views/category/services/categoryServices.ts';
import { headers } from '@/views/category/list/listCategory.ts';

const { t } = useI18n();

// Reactive state
const dataTable = ref<categoryResponse[]>([]);
const categoryItemID = ref<number | undefined>(undefined);
const contentDelete = ref('');
const dialogEdit = ref<boolean>(false);
const dialogDelete = ref<boolean>(false);
const loading = ref(false);

// Computed
const breadCrumbs = computed(() => [t('category.category')]);

// Interface
interface categoryResponse {
  id: number;
  brand: string;
  status: number;
}

//Call API
const getCategories = async () => {
  loading.value = true;
  const searchParams = { page: 1, limit: 100 };
  try {
    const response = await CategoryServices.getCategories(searchParams);
    if (response?.status === 200) {
      dataTable.value = response.data;
    }
    loading.value = false;
  } catch (error) {
    console.error('Lỗi khi lấy danh mục:', error);
  }
};

const deleteCategory = async (id: number) => {
  loading.value = true;
  try {
    await CategoryServices.deleteCategory(id);
    loading.value = false;
  } catch (error) {
    console.error(error);
  }
};

//Event handle
const handleEdit = (item: { id: number }) => {
  categoryItemID.value = Number(item.id);
  dialogEdit.value = true;
};

const handleDelete = (item: categoryResponse) => {
  contentDelete.value = `${t('category.category')}: ${item.brand}`;
  categoryItemID.value = Number(item.id);
  dialogDelete.value = true;
};

const onDelete = async () => {
  dialogDelete.value = false;
  if (!categoryItemID.value) return;
  await deleteCategory(categoryItemID.value);
  refreshData();
};

const refreshData = () => {
  getCategories();
};

//Lifecycle Hooks
onMounted(getCategories);
</script>

<template>
  <base-bread-crumb :title="t('category.category')" :breadcrumbs="breadCrumbs" />
  <!--  Head-->
  <div class="d-flex justify-end">
    <!--    Search-->
    <v-responsive max-width="344">
      <v-text-field
        ref="textField"
        density="compact"
        append-inner-icon="mdi-magnify"
        hide-details
        variant="outlined"
        placeholder="Typing search"
      ></v-text-field>
    </v-responsive>

    <!--    Create-->
    <create-category />

    <!--    EndCreate-->
    <advance-search />
  </div>

  <!--  Content-->
  <div class="mt-7">
    <v-data-table-virtual :headers="headers" :items="dataTable" fixed-header item-value="name">
      <!--  Brand-->
      <template v-slot:[`item.brand`]="{ item }">
        <popup-category :brand="item.brand" />
      </template>

      <template v-slot:[`item.status`]="{ item }">
        <span v-if="item.status == 1">Hoạt động</span>
        <span v-else> Không hoạt động</span>
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
    </v-data-table-virtual>
  </div>

  <!--  Dialog Edit Category-->
  <EditCategory v-model:dialog="dialogEdit" :id="categoryItemID" @update-success="refreshData" />

  <!--  Dialog delete-->
  <DialogConfirm v-model:dialog="dialogDelete" :text="contentDelete" @confirmed="onDelete" />

  <base-dialog-loading :isLoading="loading" />
</template>

<style scoped lang="scss"></style>
