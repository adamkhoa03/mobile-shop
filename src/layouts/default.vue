<script setup lang="ts">
import { RouterView } from 'vue-router';
import CoreDrawer from '@/layouts/components/Drawer/Drawer.vue';
import CoreAppBar from '@/layouts/components/AppBar/AppBar.vue';
import CoreFooter from '@/layouts/components/Footer/Footer.vue';
</script>

<template>
  <v-locale-provider>
    <v-app :class="[]">
      <CoreDrawer />
      <CoreAppBar />

      <v-main class="page-wrapper">
        <v-container fluid>
          <div>
            <RouterView />
          </div>
        </v-container>
        <v-container fluid class="pt-0">
          <div>
            <CoreFooter />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
