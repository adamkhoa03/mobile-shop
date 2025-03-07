<script setup lang="ts">
//components
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import popupCategory from './components/popupCategory.vue';
import CreateCategory from '@/views/category/list/components/CreateCategory.vue';

import { ref } from 'vue';
import { headers, phones } from '@/views/category/list/listCategory.ts';

const breadCrumbs = ref(['Danh mục']);
</script>

<template>
  <base-bread-crumb title="Danh mục" :breadcrumbs="breadCrumbs" />

  <!--  Head-->
  <div class="d-flex justify-end">
    <!--    Search-->
    <v-responsive max-width="344">
      <v-text-field
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
      <template v-slot:[`item.action`]>
        <div class="d-flex align-center justify-end">
          <v-tooltip text="edit">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon>
                <v-img width="25" class="pointer" src="@/assets/pencil.svg"></v-img>
              </v-btn>
            </template>
          </v-tooltip>
          <v-tooltip text="delete">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" variant="text" icon>
                <v-img width="25" class="pointer" src="@/assets/icon-delete.svg"></v-img>
              </v-btn>
            </template>
          </v-tooltip>
        </div>
      </template>
    </v-data-table-virtual>
  </div>
</template>

<style scoped lang="scss"></style>
