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
const idEdit = ref<number | null>(null);
const itemDelete = ref<categoryResponse | null>(null);
const dialogEdit = ref<boolean>(false);
const dialogDelete = ref<boolean>(false);

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
  try {
    const response = await CategoryServices.getCategories();
    if (response?.status === 200) {
      dataTable.value = response.data;
    }
  } catch (error) {
    console.error('Lỗi khi lấy danh mục:', error);
  }
};

//Event handle
const onEdit = (item: { id: number }) => {
  idEdit.value = item.id;
  dialogEdit.value = true;
};

const onDelete = (item: categoryResponse) => {
  itemDelete.value = item;
  dialogDelete.value = true;
  console.log(itemDelete.value.brand);
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
              <v-btn v-bind="props" variant="text" icon @click="onEdit(item)">
                <v-img width="25" class="pointer" src="@/assets/pencil.svg"></v-img>
              </v-btn>
            </template>
          </v-tooltip>
          <v-tooltip :text="t('delete')">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon @click="onDelete(item)">
                <v-img width="25" class="pointer" src="@/assets/icon-delete.svg"></v-img>
              </v-btn>
            </template>
          </v-tooltip>
        </div>
      </template>
    </v-data-table-virtual>
  </div>

  <!--  Dialog Edit Category-->
  <EditCategory v-model:dialog="dialogEdit" :id="idEdit" />

  <!--  Dialog delete-->
  <DialogConfirm v-model:dialog="dialogDelete" />
</template>

<style scoped lang="scss"></style>
