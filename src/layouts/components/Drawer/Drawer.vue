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
      <Logo />
    </template>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <div>
      <v-list>
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!---Item Sub Header -->
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <!---Item Divider -->
          <v-divider class="my-3" v-else-if="item.divider" />
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
import menus from '@/layouts/components/Drawer/menu.ts'

import NavGroup from '@/layouts/components/Drawer/NavGroup/NavGroup.vue';
import NavItem from '@/layouts/components/Drawer/NavItem/NavItem.vue';
import NavCollapse from '@/layouts/components/Drawer/NavCollapse/NavCollapse.vue';
import Logo from '@/layouts/dashboard/logo/LogoDark.vue';

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(menus);
</script>
