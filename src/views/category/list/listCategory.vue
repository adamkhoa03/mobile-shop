<script setup lang="ts">
import AdvanceSearch from '@/components/shared/AdvanceSearch.vue';
import { ref } from 'vue';

const breadCrumbs = ref(['Danh mục']);

const headers = [
  { title: 'Thương hiệu', align: 'start', key: 'brand', sortable: true },
  { title: 'Mô tả', align: 'start', key: 'description', sortable: true },
  { title: 'Thao tác', align: 'end', key: 'action', sortable: false }
] as const; // Readonly

const phones = [
  {
    brand: 'Apple',
    description: 'Hãng điện thoại cao cấp, nổi bật với iPhone và hệ sinh thái iOS.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Samsung',
    description: 'Thương hiệu Hàn Quốc với dòng Galaxy đa dạng từ phổ thông đến cao cấp.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Xiaomi',
    description: 'Nhà sản xuất Trung Quốc, nổi bật với cấu hình mạnh và giá rẻ.',
    action: ['delete', 'edit']
  },
  { brand: 'Oppo', description: 'Chuyên về điện thoại chụp ảnh đẹp, thiết kế thời trang.', action: ['delete', 'edit'] },
  { brand: 'Vivo', description: 'Thương hiệu tập trung vào công nghệ camera và âm thanh.', action: ['delete', 'edit'] },
  {
    brand: 'OnePlus',
    description: 'Hãng smartphone cao cấp với hiệu năng mạnh mẽ và OxygenOS.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Realme',
    description: 'Thương hiệu con của Oppo, hướng đến phân khúc giá rẻ và trung cấp.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Sony',
    description: 'Hãng Nhật Bản nổi tiếng với dòng Xperia và công nghệ màn hình cao cấp.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Google',
    description: 'Nhà sản xuất Pixel với trải nghiệm Android thuần khiết.',
    action: ['delete', 'edit']
  },
  {
    brand: 'Asus',
    description: 'Chuyên điện thoại gaming như ROG Phone với hiệu năng mạnh.',
    action: ['delete', 'edit']
  }
];

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
