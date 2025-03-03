<script setup lang="ts">
import { mergeProps, ref } from 'vue';

const openMenu = ref(false);
const searchText = ref('');

const search = () => {
  openMenu.value = false;
};
</script>

<template>
  <v-menu v-model="openMenu" :close-on-content-click="false">
    <template v-slot:activator="{ props: menu }">
      <v-tooltip location="top">
        <template v-slot:activator="{ props: tooltip }">
          <v-btn color="primary" v-bind="mergeProps(menu, tooltip)" variant="flat" icon="mdi-cog" size="small"></v-btn>
        </template>
        <span>Tìm kiếm nâng cao</span>
      </v-tooltip>
    </template>
    <v-card title="Tìm kiếm nâng cao" variant="outlined">
      <v-card-text>
        <v-text-field label="Tên" variant="outlined" density="compact" hide-details class="mb-3"></v-text-field>
        <v-select
          label="Trạng thái"
          variant="outlined"
          density="compact"
          :items="['Hoạt động', 'Không hoạt động']"
          hide-details
          class="mb-3"
        ></v-select>
        <v-text-field v-model="searchText" label="Mã" variant="outlined" density="compact" hide-details></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" variant="flat" @click="search">Tìm kiếm</v-btn>
        <v-btn color="error" variant="flat">Xóa bộ lọc</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<style scoped lang="scss"></style>
