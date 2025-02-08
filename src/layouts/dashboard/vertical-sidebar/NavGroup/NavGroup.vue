<template>
  <v-list-subheader color="lightText" class="smallCap text-subtitle-2">{{ props.item.title }}</v-list-subheader>
</template>

<script setup>
const props = defineProps({ item: Object });
</script>
