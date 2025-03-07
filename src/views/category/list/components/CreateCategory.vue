<script setup lang="ts">
import constants from '@/constants.ts';
import { ref } from 'vue';

const dialog = ref(false);
const category = ref({
  name: null,
  description: null,
  status: null
});

const addCategory = () => {};
const handleCreate = () => {
  console.log(category.value);
  dialog.value = false;
};
</script>

<template>
  <v-dialog v-model="dialog" :max-width="constants.MAX_WIDTH_500" persistent :scrollable="true" max-height="600">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="mx-2"
        color="primary"
        prepend-icon="mdi-plus"
        text="Thêm danh mục"
        variant="flat"
        @click="addCategory"
      ></v-btn>
    </template>

    <template v-slot:default>
      <v-card>
        <v-card-title> Tạo danh mục mới</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="category.name"
            counter="30"
            maxlength="30"
            label="Tên danh mục"
            variant="outlined"
            placeholder="Nhập tên danh mục"
          ></v-text-field>
          <v-select v-model="category.status" label="Trạng thái" :items="['Hoạt động', 'Không hoạt động']" variant="outlined"></v-select>
          <v-textarea
            v-model="category.description"
            maxlength="150"
            label="Mô tả"
            variant="outlined"
            placeholder="Nhập mô tả"
            max-rows="2"
            auto-grow
            rows="3"
            counter
          ></v-textarea>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="flat" color="error" @click="dialog = false">Hủy bỏ</v-btn>
          <v-btn prepend-icon="mdi-plus" variant="flat" color="primary" @click="handleCreate">Tạo mới</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss"></style>
