<script setup lang="ts">
import { mergeProps, ref, toRef } from 'vue';

// Props and Emits
const emits = defineEmits(['search', 'clear']);
const props = defineProps(['dataCreateUI', 'formData']);

//Reactive state
const openMenu = ref(false);
const formRef = toRef(props, 'formData');

//Event Handle
const search = () => {
  openMenu.value = false;
  emits('search');
};
const clear = () => {
  emits('clear');
  openMenu.value = false;
};
console.log(props.dataCreateUI);
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
        <template v-for="(item, index) in dataCreateUI" :key="index">
          <v-text-field
            v-if="item.type === 'textField'"
            v-model="formRef[item.ref]"
            :label="item.label"
            variant="outlined"
            density="compact"
            hide-details
            class="mb-3"
          ></v-text-field>

          <v-autocomplete
            v-if="item.type === 'autocomplete'"
            :label="item.label"
            :item-title="item.title"
            :item-value="item.value"
            variant="outlined"
            return-object
            :items="item.items"
          ></v-autocomplete>

          <v-select
            v-if="item.type === 'select'"
            v-model="formRef[item.ref]"
            :label="item.label"
            variant="outlined"
            density="compact"
            :items="item.items"
            :item-value="item.value"
            hide-details
            class="mb-3"
          ></v-select>
        </template>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" variant="flat" @click="clear">Xóa bộ lọc</v-btn>
        <v-btn color="primary" variant="flat" @click="search">Tìm kiếm</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<style scoped lang="scss"></style>
