<template>
  <v-navigation-drawer
    left
    v-model="customizer.Sidebar_drawer"
    elevation="0"
    rail-width="200"
    mobile-breakpoint="lg"
    app
    class="leftSidebar"
    :rail="customizer.mini_sidebar"
    expand-on-hover
  >
    <template v-slot:prepend>
      <v-img class="ma-2" max-height="50px" src="@/assets/logo1.png"></v-img>
    </template>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <v-list>
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!---Item Divider -->
          <v-divider class="my-3" v-if="item.divider" />
          <!---If Has Child -->
          <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
          <!---Single Item-->
          <NavItem :item="item" v-else />
          <!---End Single Item-->
        </template>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { shallowRef } from 'vue';
import { useCustomizerStore } from '@/stores/customizer.ts';
import menus from '@/layouts/components/Drawer/menu.ts';

import NavItem from '@/layouts/components/Drawer/NavItem/NavItem.vue';
import NavCollapse from '@/layouts/components/Drawer/NavCollapse/NavCollapse.vue';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(menus);
</script>
