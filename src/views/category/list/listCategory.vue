<script setup lang="ts">
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import { ref } from 'vue';
import { headers, phones } from '@/views/category/list/listCategory.ts';
import popupCategory from './components/popupCategory.vue';

const breadCrumbs = ref(['Danh mục']);

// const virtualBoats = computed(() =>
//   [...Array(100).keys()].map((i) => ({
//     ...phones[i % phones.length],
//     name: `${phones[i % phones.length].brand} #${i}`
//   }))
// );
</script>

<template>
  <base-bread-crumb title="Danh mục" :breadcrumbs="breadCrumbs" />

  <!--  Head-->
  <div class="d-flex justify-end">
    <v-responsive max-width="344">
      <v-text-field
        density="compact"
        append-inner-icon="mdi-magnify"
        hide-details
        variant="outlined"
        placeholder="Typing search"
      ></v-text-field>
    </v-responsive>
    <v-btn class="mx-2" color="primary" prepend-icon="mdi-plus" text="Thêm danh mục" variant="flat"></v-btn>
    <advance-search />
  </div>

  <!--  Content-->
  <div class="mt-7">
    <v-data-table-virtual :headers="headers" :items="phones" fixed-header item-value="name">
      <!--  Brand-->
      <template v-slot:[`item.brand`]="{ item }">
        <div class="d-flex align-center pointer">
          <div class="text-center mr-2">
            <v-avatar color="blue-darken-2" rounded="0">
              <v-img src="@/assets/images/categories/iphone.jpg"></v-img>
            </v-avatar>
          </div>
          <popup-category :brand="item.brand" />
        </div>
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
