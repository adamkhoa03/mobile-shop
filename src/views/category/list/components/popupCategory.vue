<script setup lang="ts">
defineProps({
  brand: {
    type: String,
    default: null
  }
});
</script>

<template>
  <v-menu open-on-hover location="end" offset="10">
    <template v-slot:activator="{ props }">
      <div class="pointer" v-bind="props">{{ brand }}</div>
    </template>
    <v-card width="300px">
      <div class="text-h4 my-2 text-center text-capitalize">Tên danh mục: {{ brand }}</div>
      <div class="d-flex">
        <div>
          <v-img width="150px" src="@/assets/images/categories/iphone.jpg"></v-img>
        </div>
        <div>
          <div>
            <span class="text-h5">Ngày tạo:</span> <br />
            20/02/2025
          </div>
          <v-divider></v-divider>
          <div>
            <span class="text-h5">Ngày cập nhật:</span> <br />
            20/02/2025
          </div>
          <v-divider></v-divider>
          <div>
            <span class="text-h5">Trạng thái:</span> <br />
            Đã hiển thị
          </div>
        </div>
      </div>
    </v-card>
  </v-menu>
</template>

<style scoped lang="scss"></style>
