<script setup lang="ts">
defineProps(['groupItem']);
</script>

<template>
  <v-list-group :value="groupItem.title">
    <template v-slot:activator="{ props }">
      <v-list-item :prepend-icon="groupItem.icon" v-bind="props" :title="groupItem.title"></v-list-item>
    </template>

    <v-list-item
      v-for="(item, i) in groupItem.children"
      :key="i"
      :prepend-icon="item.icon"
      :title="item.title"
      :value="item.title"
    ></v-list-item>
  </v-list-group>
</template>

<style scoped lang="scss"></style>
