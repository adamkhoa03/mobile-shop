<script setup lang="ts">
//components
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import popupCategory from './components/popupCategory.vue';
import CreateCategory from '@/views/category/list/components/CreateCategory.vue';
import EditCategory from '@/views/category/list/components/EditCategory.vue';
import DialogConfirm from '@/components/shared/DialogConfirm.vue';

import { ref } from 'vue';
import { headers, phones } from '@/views/category/list/listCategory.ts';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const breadCrumbs = ref([t('category.category')]);
const idEdit = ref();
const itemDelete = ref();

//Edit
const dialogEdit = ref(false);
const onEdit = (item: { id: number }) => {
  idEdit.value = item.id;
  dialogEdit.value = true;
};

//Delete
const dialogDelete = ref(false);
const onDelete = (item: { id: number; brand: string }) => {
  itemDelete.value = item;
  dialogDelete.value = true;
  console.log(itemDelete.value.brand);
};
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
    <v-data-table-virtual :headers="headers" :items="phones" fixed-header item-value="name">
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
