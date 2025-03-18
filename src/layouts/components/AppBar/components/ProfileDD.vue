<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// icons
import { LogoutOutlined, UserOutlined, SettingOutlined, QuestionCircleOutlined, LockOutlined, EditOutlined } from '@ant-design/icons-vue';

const name = localStorage.getItem('firstName');
const tab = ref(null);
const logout = () => {
  localStorage.removeItem('token');
  router.push('/login');
};
</script>

<template>
  <div>
    <div class="d-flex align-center pa-5">
      <v-avatar size="32" class="mr-2">
        <img src="../../../../assets/images/users/avatar-1.png" width="32" alt="Julia" />
      </v-avatar>
      <div>
        <h6 class="text-h6 mb-0">{{ name }}</h6>
        <p class="text-caption mb-0">Quản lý tài khoản</p>
      </div>
      <div class="ml-auto">
        <v-btn variant="text" color="primary" rounded="sm" icon size="large" @click="logout">
          <LogoutOutlined :style="{ fontSize: '20px' }" />
        </v-btn>
      </div>
    </div>
    <v-tabs v-model="tab" color="primary" grow>
      <v-tab value="111">
        <UserOutlined class="v-icon--start" />
        Profile
      </v-tab>
      <v-tab value="222">
        <SettingOutlined class="v-icon--start" />
        Setting
      </v-tab>
    </v-tabs>
    <perfect-scrollbar style="height: calc(45vh - 300px); max-height: 240px">
      <v-window v-model="tab">
        <v-window-item value="111">
          <v-list class="py-0" aria-label="profile list" aria-busy="true">
            <v-list-item color="primary" rounded="0" value="Edit profile">
              <template v-slot:prepend>
                <EditOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <v-list-item-title class="text-h6"> Cài đặt tài khoản</v-list-item-title>
            </v-list-item>

            <v-list-item color="primary" rounded="0" value="View Profile">
              <template v-slot:prepend>
                <UserOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <v-list-item-title class="text-h6"> Chi tiết tài khoản</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-window-item>
        <v-window-item value="222">
          <v-list class="py-0" aria-label="profile list" aria-busy="true">
            <v-list-item color="primary" rounded="0" value="Support">
              <template v-slot:prepend>
                <QuestionCircleOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <v-list-item-title class="text-h6"> Hỗ trợ</v-list-item-title>
            </v-list-item>

            <v-list-item color="primary" rounded="0" value="Account">
              <template v-slot:prepend>
                <UserOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <v-list-item-title class="text-h6"> Đóng tài khoản</v-list-item-title>
            </v-list-item>

            <v-list-item color="primary" rounded="0" value="Privacy">
              <template v-slot:prepend>
                <LockOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <v-list-item-title class="text-h6">Quyền riêng tư</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-window-item>
      </v-window>
    </perfect-scrollbar>
  </div>
</template>
