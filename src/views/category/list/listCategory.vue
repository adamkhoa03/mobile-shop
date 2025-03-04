<script setup lang="ts">
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import { ref } from 'vue';
import { headers, phones } from '@/views/category/list/listCategory.ts';

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
        <div class="d-flex align-center">
          <div class="text-center mr-2">
            <v-avatar color="blue-darken-2" rounded="0">
              <v-img src="@/assets/images/categories/iphone.jpg"></v-img>
            </v-avatar>
          </div>
          <v-menu open-on-hover location="end" offset="10">
            <template v-slot:activator="{ props }">
              <div v-bind="props">{{ item.brand }}</div>
            </template>
            <v-card width="300px">
              <div class="text-h4 my-2 text-center text-capitalize">Tên danh mục: {{ item.brand }}</div>
              <div class="d-flex">
                <div>
                  <v-img width="150px" src="@/assets/images/categories/iphone.jpg"></v-img>
                </div>
                <div>
                  <div>
                    <span class="text-h5">Ngày tạo:</span> <br />
                    20/02/2025
                  </div>
                  <div>
                    <span class="text-h5">Ngày cập nhật:</span> <br />
                    20/02/2025
                  </div>
                </div>
              </div>
            </v-card>
          </v-menu>
        </div>
      </template>

      <!-- Action  -->
      <template v-slot:[`item.action`]>
        <div>
          <v-tooltip text="edit">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="mdi-pencil" variant="flat" size="compact"></v-btn>
            </template>
          </v-tooltip>
          <v-tooltip text="delete">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="mdi-delete" variant="flat" size="compact"></v-btn>
            </template>
          </v-tooltip>
        </div>
      </template>
    </v-data-table-virtual>
  </div>
</template>

<style scoped lang="scss"></style>
